import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  if (mode === 'ui') {
    return {
      plugins: [react()],
      build: {
        base: './',
        outDir: 'dist',
      },
    };
  } else if (mode === 'resource') {
    return {
      base: './',
      plugins: [
        VitePluginNode({
          adapter({ app, res }) {
            app(res, res);
          },
          appPath: 'server/main.ts',
        }),
        VitePluginNode({
          adapter({ app, res }) {
            app(res, res);
          },
          appPath: 'client/main.ts',
        }),
      ],
      build: {
        outDir: '.',
        sourcemap: false,
        rollupOptions: {
          input: {
            // server-specific rollup options
            server: 'server/main.ts',
            client: 'client/main.ts',
          },
          output: {
            // Output options go here
            // You can specify a directory structure if you want:
            entryFileNames: '[name]/dist/main.js',
            chunkFileNames: '[name]/dist/[hash].js',
            // If you need to preserve the directory structure, you could use a function here
          },
        },
        platform: 'node',
      },
    };
  }
});
