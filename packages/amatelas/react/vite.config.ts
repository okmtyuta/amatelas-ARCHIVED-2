import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: { '@src': resolve(__dirname, './src') }
  },
  build: {
    // cssCodeSplit: true,
    outDir: 'dist',
    lib: {
      entry: {
        server: resolve(__dirname, 'src/components/server.ts'),
        svg: resolve(__dirname, 'src/svg/index.ts')
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
