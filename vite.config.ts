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
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
      },
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
      },
    },
  },
})