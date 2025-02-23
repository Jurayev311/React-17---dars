import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false,
      },
      manifest: {
        name: "Car Wash",
        short_name: "Car Wash",
        description: "Car Wash",
        // display: "fullscreen"
        theme_color: "#ffffff",
        icons: [
          {
            src: "/logo_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
})
