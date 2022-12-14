import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
	plugins: [
		vue(),
		dts({ outputDir: 'es' }),
		visualizer()
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './packages'),
			'@components': resolve(__dirname, './packages/components'),
			'@utils': resolve(__dirname, './packages/utils'),
			'@theme': resolve(__dirname, './packages/theme')
		}
	},
	build: {
		target: 'modules',
		outDir: 'dist',
		minify: false,
		lib: {
			entry: resolve(__dirname, './index.ts'),
			name: 'alwaysme',
			fileName: (format, name) => `${name.replace(/_(\S*)/, '')}.${format}.js`
		},
		rollupOptions: {
			external: ['vue'],
			input: {
				main: resolve(__dirname, './packages/index.ts')
			},
			output: [
				{
					dir: 'es',
					format: 'es',
					sourcemap: true,
					// entryFileNames: '[name].[format].js',
					preserveModules: true
				},
				{
					dir: 'lib',
					format: 'cjs',
					sourcemap: true,
					// entryFileNames: '[name].[format].js',
					preserveModules: true
				}
			]
		}
	},
	server: {
		host: 'localhost',
		port: 7100,
		open: false,
		hmr: true
	}
})
