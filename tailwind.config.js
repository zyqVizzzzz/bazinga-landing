/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3f51b5",
				secondary: "#e8447a",
				accent: "rgb(92, 198, 187)",
				neutral: "#505665",
			},
			fontFamily: {
				comic: [
					'"Comic Sans MS"',
					"'Yozai Medium'",
					"Hannotate SC",
					'"Courier New"',
					"monospace",
				],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				retro: {
					primary: "#3f51b5",
					secondary: "#e8447a",
					accent: "rgb(92, 198, 187)",
					neutral: "#505665",
					"base-100": "#f2f2f2",
				},
			},
		],
	},
};
