import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { onKeydown } from '../utils/onKeydown'
import BaiduVue from './setting/Baidu.vue'

export const conf: ISiteEffectConfig = {
  test: /baidu\.com/,
  fn() {
    useSettingUI(BaiduVue)

    onKeydown('meta, /', () => {
      console.log('help')
    })
  },
}
