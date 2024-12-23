import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.ts'
    }),
    mdx(),
    icon({
      include: {
        lucide: ['*']  // This includes all Lucide icons
      }
    })
  ],
  site: 'https://rccgis-uchicago.github.io/site',
  // base: '/site', // We don't need this anymore since it's included in the site URL
});