import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          // Basic variables
          $primary-color: #3498db;
          $secondary-color: #2c3e50;
          $success-color: #27ae60;
          $warning-color: #f39c12;
          $danger-color: #e74c3c;
          
          $white: #ffffff;
          $gray-100: #f8f9fa;
          $gray-200: #e9ecef;
          $gray-300: #dee2e6;
          $gray-400: #ced4da;
          $gray-500: #adb5bd;
          $gray-600: #6c757d;
          $gray-700: #495057;
          $gray-800: #343a40;
          $gray-900: #212529;
          
          $font-family-primary: 'Arial', '微軟正黑體', sans-serif;
          $font-size-base: 1rem;
          
          $spacing-1: 0.25rem;
          $spacing-2: 0.5rem;
          $spacing-3: 0.75rem;
          $spacing-4: 1rem;
          $spacing-6: 1.5rem;
          $spacing-8: 2rem;
          
          $border-radius-base: 0.25rem;
          $border-radius-lg: 0.5rem;
          
          $breakpoint-sm: 576px;
          $breakpoint-md: 768px;
          $breakpoint-lg: 992px;
          $breakpoint-xl: 1200px;
        `
      }
    }
  }
})