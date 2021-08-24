import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { onKeydown } from '../utils/onKeydown'
import RootComponent from './setting/Baidu.vue'

export const conf: ISiteEffectConfig = {
  test: /baidu\.com/,
  fn() {
    useSettingUI(RootComponent)

    onKeydown('meta, /', () => {
      console.log('help')
    })
  },
}
