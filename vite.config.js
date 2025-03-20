import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Adjust this path if your index.html is elsewhere
  build: {
    outDir: '../dist', // output directory for the build
  },
});
