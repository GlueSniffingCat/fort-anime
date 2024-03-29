import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				red45: "#E50000",
				red50: "#ff0000",
				red55: "#ff1919",
				red60: "#ff3333",
				red80: "#ff9999",
				red90: "#ffcccc",
				red95: "#ffe5e6",
				red99: "#fffafa",
				black06: "#0F0F0F",
				black08: "#141414",
				black10: "#1A1A1A",
				black12: "#1F1F1F",
				black15: "#262626",
				black20: "#333333",
				black25: "#404040",
				black30: "#4C4C4C",
				grey60: "#999999",
				grey65: "#A6A6A6",
				grey70: "#B3B3B3",
				grey75: "#BFBFBF",
				grey90: "#e4e4e7",
				grey95: "#f1f1f3",
				grey97: "#f8f8fa",
				grey99: "#fcfcfd",
			},
			backgroundColor: {
				red45: "#E50000",
				red50: "#ff0000",
				red55: "#ff1919",
				red60: "#ff3333",
				red80: "#ff9999",
				red90: "#ffcccc",
				red95: "#ffe5e6",
				red99: "#fffafa",
				black06: "#0F0F0F",
				black08: "#141414",
				black10: "#1A1A1A",
				black12: "#1F1F1F",
				black15: "#262626",
				black20: "#333333",
				black25: "#404040",
				black30: "#4C4C4C",
				grey60: "#999999",
				grey65: "#A6A6A6",
				grey70: "#B3B3B3",
				grey75: "#BFBFBF",
				grey90: "#e4e4e7",
				grey95: "#f1f1f3",
				grey97: "#f8f8fa",
				grey99: "#fcfcfd",
			},
		},
	},
	plugins: [],
};
export default config;
