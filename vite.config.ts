import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Clips App',
        short_name: 'Clips',
        description:
          'An incremental game, a clicker game, a tap game and an idle game. Inspired by "Universal Paperclips" developed just for fun.',
        start_url: '/clips/',
        display: 'standalone',
        theme_color: '#e6e6e6',
        background_color: '#171717',
        icons: [
          {
            src: '/clips/clips-192x192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
          {
            src: '/clips/clips-256x256.svg',
            type: 'image/svg+xml',
            sizes: '256x256',
          },
          {
            src: '/clips/clips-384x384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/clips/clips-512x512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  base: '/clips/',
  resolve: {
    alias: {
      '@': path.resolve('./'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
        additionalData: '@use "@/src/assets/scss/base/breakpoints" as *;',
      },
    },
  },
});
