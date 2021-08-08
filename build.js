const { CAC } = require('cac')
const esbuild = require('esbuild')
const fs = require('fs/promises')
const { resolve } = require('path')

const cac = new CAC()

const { options: opt } = cac.option('-w, --watch', 'watch').parse()

main()

async function main() {
  const banner = await getBanner()
  bundle(banner)
}

async function bundle(banner) {
  return esbuild.build({
    entryPoints: [resolve('src/index.ts')],
    outfile: resolve('index.js'),
    banner: {
      js: banner,
    },
    watch: opt.watch,
  })
}

function getBanner() {
  return fs.readFile(resolve('src/banner.ts'), {
    encoding: 'utf-8',
  })
}
