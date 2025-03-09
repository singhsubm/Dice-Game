import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: '0.0.0.0', // Any IP se access allow karega
    port: 3000, // Apne port ka dhyan rakh
    strictPort: true,
  }
})
