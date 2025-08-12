import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import UnoCSS from "@unocss/astro";
import { presetWind3 } from "unocss";
// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check

// https://astro.build/config
export default defineConfig(
	/** @type {import('astro').AstroUserConfig} */
	{
		// Comment out "renderers: []" to enable Astro's default component support.
		//renderers: [],
		markdown: {
			syntaxHighlight: "shiki",
			shikiConfig: {
				theme: "one-dark-pro",
				wrap: false,
			},
		},
		integrations: [
			mdx(),
			UnoCSS({
				presets: [presetWind3()],
			}),
		],
	},
);
