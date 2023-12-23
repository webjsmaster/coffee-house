import { resolve } from 'path'
import { defineConfig } from 'vite'
import { pages } from './pages.config'

const pageInput = {}

pages.forEach((page) => {
	pageInput[page.name] = page.path
})

export default defineConfig({
	build: {
		rollupOptions: {
			input: { ...pageInput },
			// output: {
			// 	dir: resolve(__dirname, './..'),
			// },
		},
		sourcemap: true,
	},
	resolve: {
		alias: {
			$fonts: resolve('./src/fonts'),
		},
	},
	css: {
		devSourcemap: true,
	},
})
