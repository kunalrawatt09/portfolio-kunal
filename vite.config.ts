import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // GitHub Pages serves the site from a subfolder, so set the Vite base path.
  vite: {
    base: "/portfolio-kunal/",
  },
  tanstackStart: {
    server: {
      entry: "server",
      preset: "github-pages",
      prerender: {
        routes: ["/"]
      }
    },
  },
});
