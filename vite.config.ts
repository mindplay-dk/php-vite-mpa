import { defineConfig } from 'vite';
import * as path from 'path';
import preact from "@preact/preset-vite";

const CLIENT_DIR = "client"; // Directory where the client-side code (entry points and assets) are located
const PUBLIC_DIR = "public"; // Directory from which the server serves static files
const DIST_DIR = "dist"; // Directory where the built files are output (relative to PUBLIC_DIR)

export default defineConfig({
  root: path.resolve(__dirname, CLIENT_DIR), // root directory for the client-side source code
  base: `/${DIST_DIR}/`, // in dev, Vite serves files from here - in production, the server serves production files from here
  build: {
    outDir: path.resolve(__dirname, PUBLIC_DIR, DIST_DIR),
    emptyOutDir: true, // Vite doesn't clear the output directory by default
    manifest: true, // Generate `manifest.json` (required for PHP backend integration)
    rollupOptions: {
      input: path.resolve(CLIENT_DIR, 'index.ts'), // Entry point for the application
    }
  },

  server: {
    host: 'localhost',
    port: 8000,
    proxy: {
      [`^/(?!${DIST_DIR}/).*`]: {
        target: 'http://localhost:8001', // PHP backend server
        changeOrigin: true, // Required for backend server to receive the correct host header (e.g. virtual hosts)
        //rewrite: path => path.replace(/^\/+/, '/')
      }
    }
  },

  plugins: [
    preact(),
  ]
});
