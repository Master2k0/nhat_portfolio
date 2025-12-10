import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { visualizer } from "rollup-plugin-visualizer";
import ReactInspector from "vite-plugin-react-inspector";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    ReactInspector(),
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
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
