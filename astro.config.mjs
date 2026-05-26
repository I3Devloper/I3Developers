import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://i3developers.com",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      filter: (page) =>
        !page.includes(
          "/blog-about-websitedevelopment-websitedesign-seo-marketingagency-socialmediamarketing-in-lafayette-la/"
        )
    })
  ]
});
