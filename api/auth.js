export default async function handler(req, res) {
  const { provider, code } = req.query;

  if (code) {
    // GitHub callback — exchange code for access token
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      }
    );

    const data = await tokenResponse.json();

    if (data.error) {
      return res.status(400).send(`OAuth error: ${data.error_description || data.error}`);
    }

    // Return token to Decap CMS via postMessage
    res.send(`
      <!DOCTYPE html>
      <html><body><script>
        (function() {
          function receiveMessage(e) {
            window.opener.postMessage(
              { token: '${data.access_token}', provider: 'github' },
              e.origin
            );
            window.close();
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage({ auth: "auth", provider: "github" }, "*");
        })();
      </script></body></html>
    `);
    return;
  }

  // Initial auth request from Decap CMS
  if (provider === "github") {
    const siteUrl = req.headers["x-vercel-deployment-url"]
      ? `https://${req.headers["x-vercel-deployment-url"]}`
      : process.env.ORIGIN || `https://${req.headers.host}`;

    const redirectUri = `${siteUrl}/api/auth`;
    const scope = "repo,user";

    const authUrl =
      `https://github.com/login/oauth/authorize` +
      `?client_id=${process.env.GITHUB_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scope)}`;

    res.writeHead(302, { Location: authUrl });
    res.end();
    return;
  }

  res.status(400).send("Unknown provider");
}
