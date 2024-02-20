import { defineConfig } from 'astro/config';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import matomo from "astro-matomo";

// https://astro.build/config
export default defineConfig({
	site: "https://new.myte.site",
	integrations: [
		robotsTxt(),
		sitemap(),
		matomo({
			enabled: import.meta.env.PROD, // Only load in production
			host: "https://matomo.ramoshe.com/",
			// trackerUrl: "js/", // defaults to matomo.php
			// srcUrl: "js/", // defaults to matomo.js
			siteId: 3,
		}),
	],
});