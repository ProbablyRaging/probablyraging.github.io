const { nextui } = require("@nextui-org/react");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: ["Ubuntu Mono", "monospace"],
            },
        },
        screens: {
        },
    },
    mode: "jit",
    plugins: [nextui(), addVariablesForColors],
    corePlugins: {
        preflight: false,
    },
    important: true,
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}