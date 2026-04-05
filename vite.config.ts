import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['expressless-electrothermal-shanda.ngrok-free.dev'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@react-three/rapier') || id.includes('@dimforge')) return 'physics-vendor'
          if (id.includes('@react-three/postprocessing') || id.includes('postprocessing')) return 'postprocessing-vendor'
          if (id.includes('three') || id.includes('@react-three')) return 'three-vendor'
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react-vendor'
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
