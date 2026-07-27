import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['apps/*/src/**/*.{test,spec}.{ts,tsx}', 'packages/*/src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist', 'old-files'],
  },
})
