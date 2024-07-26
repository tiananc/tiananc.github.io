/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter, "sans-serif"'],
			indieflower: ["Indie Flower"]
			},
			
			extend: {
				colors: {
				'snow': '#FFFFFC',
				'grey-smoke': '#EFEFEF',
				'dark-grey': '#313131',

				'melon': '#FFADAD',
				'sunset': '#FFD6A5',
				'cream': '#FDFFB6',
				'tea-green': '#CAFFBF',
				'electric-blue': '#9BF6FF',
				'periwinkle': '#BDB2FF',
				'mauve': '#FFC6FF',
			}
			},
	},
	plugins: [],
}
