import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

dotenv.config();

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': process.env,
  },
});
