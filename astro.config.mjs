import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://alan-vidal.github.io",
  base: "APP-Public",
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});