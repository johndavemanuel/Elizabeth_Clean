/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layout/*.liquid",
		"./sections/*.liquid",
		"./snippets/*.liquid",
		"./templates/customers/*.liquid",
		"./templates/*.liquid",
	],
	theme: {
		extend: {
			height: {
				'94': '22rem'
			}
		},
	},
	corePlugins: {
		aspectRatio: false,
	  },
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
};
