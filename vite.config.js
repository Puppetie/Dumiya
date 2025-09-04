import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh for better development experience
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    }), 
    tailwindcss()
  ],
  base: '/',
  server: {
    port: 3000,
    open: true,
    host: true,
    // Enable compression for development
    compress: true
  },
  build: {
    outDir: 'dist',
    // Disable sourcemaps in production for better performance
    sourcemap: process.env.NODE_ENV === 'development',
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      external: (id) => {
        // Exclude native binary files from bundling
        if (id.includes('tailwindcss-oxide') && id.endsWith('.node')) {
          return true
        }
        return false
      },
      output: {
        manualChunks: {
          // Split vendor libraries
          vendor: ['react', 'react-dom'],
          // Split components into separate chunks for better caching
          components: [
            './src/components/Header.jsx',
            './src/components/Hero.jsx',
            './src/components/About.jsx',
            './src/components/Gaming.jsx',
            './src/components/Art.jsx',
            './src/components/ShowsMovies.jsx',
            './src/components/Experience.jsx',
            './src/components/Contact.jsx',
            './src/components/Footer.jsx'
          ]
        },
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          // Optimize asset file names
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name].[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name].[hash].${ext}`
          }
          return `assets/[name].[hash].${ext}`
        }
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@tailwindcss/oxide'],
    // Force pre-bundling of dependencies
    force: true
  },
  define: {
    global: 'globalThis'
  },
  // Enable gzip compression
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : []
  }
})
