import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import NunuyyVue from './setting/Nunuyy.vue'

const mainDomain = /nunuyy\.(cc|vip)/

export const conf: ISiteEffectConfig = {
  test: [
    // main domain
    mainDomain,
  ],
  fn() {
    useSettingUI(NunuyyVue)
  },
}
