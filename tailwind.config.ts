import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
				primaryBlue: '#72C0C5',
        primaryGray: '#EDF3F4',
        secondaryGray: '#ADACB8'
			},
      height: {
				screen80: '80vh',
			},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'heroSlide1': "url('/bg/heroSlide1.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
