module.exports = {
	tabWidth: 3,
	useTabs: true,
	singleQuote: false,
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "**/*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
