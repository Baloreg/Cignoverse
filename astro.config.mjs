import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // Genera /privacy.html invece di /privacy/index.html: Cloudflare Pages
  // serve /privacy direttamente (HTTP 200) senza redirect 308 verso la
  // versione con slash finale, come richiesto da Google OAuth branding.
  build: {
    format: 'file',
  },
});
