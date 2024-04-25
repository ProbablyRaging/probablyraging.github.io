/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'base': '#353e3d',
                'dazzle': '#ed7d22'
            },
            styles: {
                'backdrop-blur-glass': {
                    'backdrop-filter': 'blur(10px)',
                    'background-color': 'rgba(255, 255, 255, 0.7)'
                },
            },
            fontFamily: {
                'yaro-black': ['yaro-black', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
