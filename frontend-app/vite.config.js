import { defineConfig } from 'vite';

/**
 * `base` is configurable so the same build works on Render (served from /) as
 * well as GitHub Pages project sites (served from /<repo>/).
 * Override with VITE_BASE_PATH. Defaults to '/'.
 */
export default defineConfig(() => {
  const base = process.env.VITE_BASE_PATH || '/';

  return {
    base,
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
    },
    server: {
      port: 5173,
      open: true,
    },
    preview: {
      port: 4173,
    },
  };
});