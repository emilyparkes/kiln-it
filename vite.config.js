import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  plugins: [react(), EnvironmentPlugin('JWT_SECRET')],
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
})