import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  //plugins: [react()],
  plugins: [
    react(),
    base("/"),
    ViteImageOptimizer({
      jpeg: {
        quality: 60,
      },
      jpg: {
        quality: 60,
      },
    }),
  ],
  server: {
    port: 3000,
  },
});




