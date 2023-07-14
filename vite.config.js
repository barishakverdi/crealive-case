// vite.config.js
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

// @see https://vitejs.dev/config/

export default {
    build: {
        assetsDir: "assets/",
        outDir: "public/",
        minify: true,

        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'src/views/index.html'),
            },
        },
    },

    css: {
        devSourcemap: true,
    },

    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'src/views/block'),
        }),
    ],
}
