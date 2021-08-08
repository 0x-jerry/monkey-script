import { ISiteEffectConfig } from '../globals'
import { onKeydown } from '../utils/onKeydown'

export const conf: ISiteEffectConfig = {
  test: /baidu\.com/,
  fn() {
    onKeydown('meta, /', () => {
      console.log('help')
    })
  },
}
