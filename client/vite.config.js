import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteBasicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  plugins: [
    react(),
  ]
})
