import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}', // if using app directory
    ],
    darkMode: 'class', // 👈 enables dark mode with "class"
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;
