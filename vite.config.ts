import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 20,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        quality: 80,
        lossless: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
