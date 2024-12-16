import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This will ensure that PNG files and other images are correctly handled as assets
// It also ensures that JSON files are parsed correctly
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
  json: {
    stringify: true, // Ensures JSON files are treated correctly and can be imported
  },
});
