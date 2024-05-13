/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'base': '#AB87F0',
                'dazzle': '#CEFE23',
                'alt': '#7251b1'
            },
            styles: {
                'backdrop-blur-glass': {
                    'backdrop-filter': 'blur(10px)',
                    'background-color': 'rgba(255, 255, 255, 0.7)'
                },
            },
        },
    },
    plugins: [],
};
