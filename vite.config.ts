import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

export default defineConfig((conf) => {
  const isDev = conf.mode == 'dev'
  console.log(`serve at: file://${process.cwd()}/dev.user.js`)

  return {
    plugins: [
      vue(),
      Components({
        customComponentResolvers: ViteIconsResolver(),
      }),
      ViteIcons(),
    ],
    build: {
      lib: {
        entry: resolve('src/index.ts'),
        name: '0xJerry',
        fileName: '0x-jerry',
      },
      watch: isDev ? {} : null,
    },
  }
})
