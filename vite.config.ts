import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig((conf) => {
  const isDev = conf.mode == 'dev'
  console.log(`serve at: file://${process.cwd()}/dev.user.js`)

  return {
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
