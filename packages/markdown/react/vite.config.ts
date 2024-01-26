import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        dist: resolve(__dirname, 'src/components/markdown/markdown.tsx')
      }
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        // 'katex',
        // 'react-markdown',
        // 'rehype-katex',
        // 'remark-gfm',
        // 'unist-util-visit'
      ],
      output: {
        globals: {}
      }
    }
  },
  plugins: [react()]
})
