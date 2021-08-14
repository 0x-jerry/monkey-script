import { ISiteEffectConfig } from './globals'
import { buildInfo } from './info'
import { start } from './utils/index'

start(async () => {
  buildInfo()

  const imports = import.meta.globEager('./sites/*.ts')

  const modules = Object.values(imports).map((t) => t.conf)

  const siteFns: ISiteEffectConfig[] = modules

  const hit = siteFns.find((s) => s.test.test(location.hostname))

  hit?.fn()
})
