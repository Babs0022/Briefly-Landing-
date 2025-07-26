import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Configure the development server port
  },
  build: {
    outDir: 'dist', // Specify the output directory for the build
  },
})
