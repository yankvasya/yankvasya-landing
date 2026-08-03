// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yankvasya.dev',
  integrations: [
    // Generates /sitemap-index.xml + /sitemap-0.xml at build time.
    // Referenced from public/robots.txt.
    sitemap(),
  ],
});
