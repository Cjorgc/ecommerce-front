import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const { VITE_BASE_URL, VITE_PORT } = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [react()],
    base: VITE_BASE_URL,
    server: {
      // port: +VITE_PORT,
      host: '0.0.0.0',
      cors: true,
      // proxy: {
      //   '/signup': {
      //     target: 'https://ecommerce-production-0702.up.railway.app/signup',
      //     secure: false,
      //     changeOrigin: true,
      //   },
      // }
    },
    // build: {
    //   rollupOptions: {
    //     input: {
    //       main: resolve(__dirname, 'index.html'),
    //     }
    //   },
    //   outDir: 'dist',
    //
    // },


  })
}
