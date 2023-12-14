// frontend/vite.config.js
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
   return {
      server: {
         port: 8000,
         open: true,
         proxy: {
            '^/sendmail': {
               target: 'http://localhost:3000',
               changeOrigin: true,
            },
         }
      },
   }
})