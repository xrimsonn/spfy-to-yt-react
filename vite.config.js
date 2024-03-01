import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

const apiKeys = [
  "REACT_APP_SPOTIFY_CLIENT_ID",
  "REACT_APP_SPOTIFY_CLIENT_SECRET",  
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  apiKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
})