import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' 
import path from "path";

export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/auth": {
        target: "https://express-js-recipes-api.onrender.com",
        changeOrigin: true,
      },
      "/api": {
        target: "https://express-js-recipes-api.onrender.com",
        changeOrigin: true,
      },
    },
  },
})