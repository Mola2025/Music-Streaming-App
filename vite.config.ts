import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  envPrefix: "VITE_", // Solo las variables que empiezan con VITE_ estarán disponibles en el frontend
});