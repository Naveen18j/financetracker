import { defineConfig } from 'vite';

export default defineConfig({
  root: './client',  // Point to the client directory
  build: {
    outDir: 'dist',  // Output directory for the build
    rollupOptions: {
      input: '/client/index.html',  // Ensure correct entry point
    },
  },
});
