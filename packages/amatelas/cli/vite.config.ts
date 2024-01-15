import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main'),
        ind: resolve(__dirname, 'src/main')
      }
    }
  }
})
