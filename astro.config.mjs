// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://yankvasya.dev',
  build: {
    // Inline all CSS into the HTML. The stylesheet is only ~18 KB, so
    // inlining removes the render-blocking /_astro/*.css request entirely.
    inlineStylesheets: 'always',
  },
  integrations: [
    // Generates /sitemap-index.xml + /sitemap-0.xml at build time.
    // Referenced from public/robots.txt.
    sitemap(),
  ],
});
