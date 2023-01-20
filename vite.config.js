import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import shimReactPdf from "vite-plugin-shim-react-pdf";



// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), VitePWA({ registerType: 'autoUpdate' }), shimReactPdf()],
  server:{
    port: 3000
  },
})
