import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ["**/*.jsx", "**/*.js"]
    })
  ],
  server: {
    port: 8080,
    proxy: {
      '/*': 'http://localhost:3000/'
    },
    hmr: true
  }
})
