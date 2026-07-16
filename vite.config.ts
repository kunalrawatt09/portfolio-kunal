import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // ADD THIS LINE SO VITE KNOWS YOUR SITE IS IN A SUBFOLDER:
  base: "/portfolio-kunal/",
  
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
