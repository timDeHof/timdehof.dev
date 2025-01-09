import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom"],
					utils: ["./src/utils"],
				},
			},
		},
		chunkSizeWarningLimit: 1000,
		sourcemap: true,
	},
	server: {
		headers: {
			"X-Frame-Options": "DENY",
		},
	},
});
