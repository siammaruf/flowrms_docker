module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('postcss-nested-ancestors'),
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')
    ]
}
