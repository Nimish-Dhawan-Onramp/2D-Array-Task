import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
			paths: {
			  base: '2D-Array-Task' // Replace 'your-repo-name' with the name of your GitHub repo
			}
		},
		preprocess: sveltePreprocess();
		adapter: adapter()
	}
};

export default config;
