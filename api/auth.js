export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get("code");
    const provider = url.searchParams.get("provider");

    if (code) {
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
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/html");
        res.end(`OAuth error: ${data.error_description || data.error}`);
        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<!DOCTYPE html>
<html><body><script>
  (function() {
    window.opener.postMessage(
      { token: '${data.access_token}', provider: 'github' },
      '*'
    );
    window.close();
  })();
</script></body></html>`);
      return;
    }

    if (provider === "github") {
      const origin = process.env.ORIGIN || `https://${req.headers.host}`;
      const redirectUri = `${origin}/api/auth`;
      const scope = "repo,user";
      const clientId = process.env.GITHUB_CLIENT_ID;

      if (!clientId) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("GITHUB_CLIENT_ID not configured");
        return;
      }

      const authUrl =
        `https://github.com/login/oauth/authorize` +
        `?client_id=${encodeURIComponent(clientId)}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&scope=${encodeURIComponent(scope)}`;

      res.statusCode = 302;
      res.setHeader("Location", authUrl);
      res.end();
      return;
    }

    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("Invalid request: specify ?provider=github or ?code=...");
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal error: " + err.message);
  }
}
