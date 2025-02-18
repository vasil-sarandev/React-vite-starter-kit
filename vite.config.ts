import path from 'path';
import react from '@vitejs/plugin-react';
import { config as dotenvConfig } from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Custom path for .env files
  const envFile = path.resolve(__dirname, `src/config/env_configs/.env.${mode}`);
  dotenvConfig({ path: envFile });

  return {
    base: './',
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 8080,
    },
    preview: {
      port: 8080,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      exclude: ['**/node_modules/**', '**/e2e/**'],
      setupFiles: './src/config/setup-tests.ts',
      coverage: {
        include: ['src/**'],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  };
});
