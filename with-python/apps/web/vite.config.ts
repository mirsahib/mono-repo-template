import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@repo/ui': path.resolve(__dirname, '../../packages/ui/src'),
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1') // Rewrite /api to /api/v1
      }
    }
  },
});
