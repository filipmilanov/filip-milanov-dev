import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages repo name: https://<user>.github.io/<repo>/
// Change this string if you rename the repository.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { port: 3000 },
})
