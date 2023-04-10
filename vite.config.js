import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve
} from "path";

const aliases = {
  
  'assets': 'src/assets/img',
 
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, resolve(__dirname, value)]),
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   build: {
        rollupOptions: {
            external: [
                "react", // ignore react stuff
                "react-dom",
            ],
        }
    },
    resolve: {
        alias: {
            ...resolvedAliases,
            './runtimeConfig': './runtimeConfig.browser',
            'jss-plugin-{}': 'jss-plugin-global'
        },
    },
})
