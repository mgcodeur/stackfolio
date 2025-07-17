import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "node:url";

import beautify from "vite-plugin-beautify";
import UnoCSS from 'unocss/vite'
import nunjucks from "vite-plugin-nunjucks";

export default defineConfig({
    root: './src',
    base: './',
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: fileURLToPath(new URL('./src/index.html', import.meta.url)),
            }
        }
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    plugins: [
        // @ts-expect-error: nunjucks types not available yet
        nunjucks(), 
        UnoCSS(),
        beautify({
            inDir: "dist",
            js: {
                enabled: false,
                glob: "**/*.js",
                options: {},
            },
            css: {
                enabled: false,
                glob: "**/*.css",
                options: {},
            },
            html: {
                enabled: true,
                glob: "**/*.html",
                options: {
                    indent_size: 2,
                    max_preserve_newlines: 1,
                    preserve_newlines: true,
                    wrap_line_length: 0,
                    end_with_newline: true,
                },
            },
        }),
    ]
});