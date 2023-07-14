/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/views/**/*.html',
        './src/js/**/*.js',
        './index.html',
    ],
    theme: {
        extend: {
            screens: {
                sm: {'max': '576px'},
                md: {'max': '768px'},
                lg: {'max': '1024px'},
                xl: {'max': '1200px'},
                xxl: {'max': '1440px'},
            },

            colors: {
                primary: '#57A0C6',
                dark: '#091929',
                light: '#dcdfe3',
                text: '#2A373A',
                white: '#FFFFFF',
                black: '#000000',
                helper: "#A2A2A2",
            },

            zIndex: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
            },

            flexGrow: {
                1: '1',
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('prettier-plugin-tailwindcss'),
    ],
};

