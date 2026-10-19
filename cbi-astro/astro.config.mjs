// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cbiorlando.org',
  integrations: [
    react(),
    sitemap({
      // The homepage is server-rendered, so the sitemap can't discover it on its own
      customPages: ['https://cbiorlando.org/'],
      filter: (page) => !page.includes('/404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});