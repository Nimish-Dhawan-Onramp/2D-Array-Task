import { sveltekit } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
const dev = process.argv.includes('dev');
const config = {
  kit: {
	appDir: 'app',
    adapter: adapter({
      // Options can be configured here if needed
      fallback: 'index.html', // Used for SPA routing if applicable
    }),
    paths: {
      base: dev ? '' : process.env.BASE_PATH, // Use a leading '/' but no trailing '/'
    }
  },
  preprocess: vitePreprocess()
};

export default config;
