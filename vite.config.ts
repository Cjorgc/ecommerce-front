import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  const { VITE_BASE_URL, VITE_PORT } = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [react()],
    base: VITE_BASE_URL,
    server: {
      port: +VITE_PORT,
      host: '0.0.0.0',
      cors: true,
    }
  })
}
