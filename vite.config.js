import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows connections from any device on the network
    port: 5173,      // Optional: Specify a custom port if needed
  },
})
