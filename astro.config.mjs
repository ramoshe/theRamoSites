import { defineConfig } from 'astro/config';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: netlify(),
	site: "https://ramosites.com",
	redirects: {
		'/booking': 'https://book.squareup.com/appointments/vjrjd6n9mj1tfy/location/LK93RM75F2SNS/services',
		'/consult': 'https://book.squareup.com/appointments/b0okwnpqhl5j7v/location/LK93RM75F2SNS/services',
		'/website-start': 'https://book.squareup.com/appointments/t1wixfgf35ntau/location/LK93RM75F2SNS/services',
		'/website-meeting': 'https://book.squareup.com/appointments/l0nwrwucp28fj7/location/LK93RM75F2SNS/services',
		'/ETSsista': 'https://book.squareup.com/appointments/kd5ppmciqp3xdh/location/LK93RM75F2SNS/services',
		'/etssista': 'https://book.squareup.com/appointments/kd5ppmciqp3xdh/location/LK93RM75F2SNS/services'
	},
	integrations: [
		robotsTxt(),
		sitemap(),
	],
	vite: {
		logLevel: 'error', // Suppresses warnings
	},
});