import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import UnoCSS from "@unocss/astro";
import {
	presetWebFonts,
	presetWind3,
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";
// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
// @ts-check

// font util function
const i = (name) => ({ name, italic: true });

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
				theme: {
					colors: {
						text: {
							DEFAULT: "#212121",
							dark: "#dedede"
						},
						link: "#296abb",
					},
				},
				presets: [
					presetWind3(),
					presetWebFonts({
						inlineImports: false,
						fonts: {
							prose: [i("IBM Plex Serif"), i("Noto Serif JP"), "serif"],
							heading: ["Roboto Mono:300,100", "IBM Plex Sans JP:300", "monospace"],
							code: ["Jetbrains Mono", "Roboto Mono", "monospace"],
						},
					}),
				],
				transformers: [
					transformerVariantGroup(),
					transformerDirectives(),
					transformerCompileClass(),
				],
			}),
		],
	},
);
