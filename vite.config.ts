import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config
export default defineConfig({
  build: {
    rollupOptions: {
      external: ["prop-types"],
    },
  },
  plugins: [react()],
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png"],
});
