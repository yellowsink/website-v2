module.exports = {
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  bracketSpacing: true,
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
