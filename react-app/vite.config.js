import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://nodejs-todoapp-k9f7.onrender.com', // Replace with your actual API URL
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '', // Remove the "/api" prefix when making the request
        },
      },
    },
  },
});
