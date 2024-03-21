import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Function to extract parent folder name
function getParentFolderName(id) {
  const match = id?.match(/\/([^/]+)\/[^/]+$/);
  return match ? match[1] : 'common'; // Default to 'common' if no parent folder is found
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames(chunkInfo) {
          const parentFolder = getParentFolderName(chunkInfo.facadeModuleId);
          return `assets/${parentFolder}.js`;
        },
        assetFileNames: 'assets/index.css',
      },
    },
  },
})
