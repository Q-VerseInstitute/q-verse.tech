// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': '/src',
                '@components': '/src/components',
                '@styles': '/src/styles',
                '@layouts': '/src/layouts'
            }
        }
    },
    output: "static",
    site: "https://q-verse.tech/"
});
