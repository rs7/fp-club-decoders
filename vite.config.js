import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	css: {
		modules: {
			generateScopedName: '[name]_[local]_[hash:hex:4]',
		},
	},
	plugins: [react(), viteTsconfigPaths()],
})
