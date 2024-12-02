import { defineConfig } from 'astro/config';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://ramosites.com",
	integrations: [
		robotsTxt(),
		sitemap(),
	],
	vite: {
		logLevel: 'error', // Suppresses warnings
	},
});