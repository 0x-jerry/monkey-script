import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'

export const conf: ISiteEffectConfig = {
  test: /site\.domain/,
  fn() {
    console.log('domain init')
  },
}
