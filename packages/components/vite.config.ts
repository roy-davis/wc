import { defineConfig } from 'vite';
import path from 'node:path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@wc/components',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
