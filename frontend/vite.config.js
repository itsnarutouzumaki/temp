import { defineConfig } from "vite";
// import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Disable hash in filenames
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  css: {
    modules: {
      // Optional: Disable hashing for CSS module classes
      generateScopedName: "[name]__[local]",
    },
  },
});