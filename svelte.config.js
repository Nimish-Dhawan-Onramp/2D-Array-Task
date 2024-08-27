import { sveltekit } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
const config = {
  kit: {
    adapter: adapter({
      // Options can be configured here if needed
      fallback: 'index.html', // Used for SPA routing if applicable
    }),
    paths: {
      base: '/2D-Array-Task', // Use a leading '/' but no trailing '/'
    }
  },
  preprocess: sveltePreprocess()
};

export default config;
