import { ISiteEffectConfig } from '../globals'
import { ui } from '../ui/render'
import { onKeydown } from '../utils/onKeydown'

export const conf: ISiteEffectConfig = {
  test: /baidu\.com/,
  fn() {
    onKeydown('meta, /', () => {
      console.log('help')
    })
    ui()
  },
}
