import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 1024,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 配置IP
  },
});
