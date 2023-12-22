import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@theme': resolve(__dirname, './src/theme'),
      '@layer': resolve(__dirname, './src/layer')
    }
  },
  build: {
    // cssCodeSplit: true,
    outDir: 'dist',
    lib: {
      entry: {
        server: resolve(__dirname, 'src/components'),
        s: resolve(__dirname, 'src/components')
      }
    },
    rollupOptions: {
      external: ['clsx', 'react', 'react-dom'],
      output: {
        globals: {
          clsx: 'clsx',
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [react()]
})
