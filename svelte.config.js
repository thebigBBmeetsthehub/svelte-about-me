import adapter from '@sveltejs/adapter-static'; 
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev'); 

const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
        }),
        paths: {
            base: dev ? '' : process.env.BASE_PATH || '/svelte-about-me',
        },
        prerender: {
            entries: ['*', '/404'] 
        },
    }
};

export default config;
