import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { handleKeydown } from '../utils/onKeydown'
import RootComponent from './setting/Baidu.vue'

export const conf: ISiteEffectConfig = {
  test: /baidu\.com/,
  fn() {
    useSettingUI(RootComponent)

    handleKeydown('meta, /', () => {
      console.log('help')
    })
  },
}
