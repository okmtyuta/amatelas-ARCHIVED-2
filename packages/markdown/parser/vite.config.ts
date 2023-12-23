import { defineConfig } from 'vite'
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
        server: resolve(__dirname, 'src/main.ts'),
        reactive: resolve(__dirname, 'src/main.ts')
      }
    }
    // rollupOptions: {
    //   external: ['clsx', 'react', 'react-dom'],
    //   output: {
    //     globals: {
    //       clsx: 'clsx',
    //       react: 'React',
    //       'react-dom': 'ReactDOM'
    //     }
    //   }
    // }
  }
})
