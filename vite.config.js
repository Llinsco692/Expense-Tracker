import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'crypto': 'crypto-browserify',  // Force Vite to use the browser version of crypto
    },
  },
})
