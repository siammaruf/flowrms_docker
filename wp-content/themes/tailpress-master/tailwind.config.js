const theme = require('./theme.json');
const tailPress = require("@jeffreyvr/tailwindcss-tailpress");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.php',
        './**/*.php',
        './resources/js/*.js',
        './safelist.txt'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: tailPress.colorMapper(tailPress.theme('settings.color.palette', theme)),
            fontSize: tailPress.fontSizeMapper(tailPress.theme('settings.typography.fontSizes', theme))
        },
        screens: {
            'xs': '480px',
            'sm': '600px',
            'md': '782px',
            'lg': tailPress.theme('settings.layout.contentSize', theme),
            'xl': tailPress.theme('settings.layout.wideSize', theme),
            '2xl': '1440px'
        }
    },
    plugins: [
        tailPress.tailwind
    ]
};
