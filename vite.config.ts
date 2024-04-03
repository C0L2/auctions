import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isLocalApi = env.REACT_APP_API_ENV === 'local'

  return {
    envPrefix: 'REACT_APP_',
    plugins: [
      react(),
      !isLocalApi && mkcert(),
      svgr({
        svgrOptions: {},
      }),
    ],
    define: {
      'process.env': process.env,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: parseInt(env.REACT_APP_PORT) || 80,
      host: env.REACT_APP_HOST || 'localhost',
      https: !isLocalApi,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          },
        },
      },
    },
  }
})
