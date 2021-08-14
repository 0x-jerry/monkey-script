import { isDev } from '../config'
import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import AgefansVue from './setting/Agefans.vue'

export const conf: ISiteEffectConfig = {
  test: /agefans\.cc/,
  fn() {
    if (isDev()) {
      unsafeWindow.onbeforeunload = () => {
        return '别跑了'
      }
    }

    useSettingUI(AgefansVue)
  },
}
