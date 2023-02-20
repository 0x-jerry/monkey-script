import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import GithubIo from './setting/GithubIo.vue'

export const conf: ISiteEffectConfig = {
  test: /\.github\.io/,
  fn() {
    useSettingUI(GithubIo)
  },
}
