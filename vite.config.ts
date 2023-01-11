import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_BASE_URL } = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [react()],
    base: VITE_BASE_URL,
    server: {
      port: +process.env.VITE_PORT,
      host: '0.0.0.0',
      cors: true
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        }
      }
    }
  })
}
