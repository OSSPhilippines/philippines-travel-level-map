import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/',
	plugins: [react()],
	build: {
		outDir: 'build', // CRA's default build output
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.js',
	},
});