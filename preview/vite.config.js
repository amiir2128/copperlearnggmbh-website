import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
const root = fileURLToPath(new URL('.', import.meta.url))
export default defineConfig({
  root, plugins: [react()],
  css: { postcss: fileURLToPath(new URL('../postcss.config.js', import.meta.url)) },
  build: { outDir: '../dist-preview', emptyOutDir: true, cssCodeSplit: false, assetsInlineLimit: 1e9, rollupOptions: { output: { inlineDynamicImports: true } } },
})
