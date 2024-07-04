import type { Config } from "tailwindcss";
import { beagle } from '@/public/beagle.jpg';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      'main-gradient' : 'bg-black',
    },
  },
  plugins: [],
};
export default config;
