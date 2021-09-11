import { ISiteEffectConfig } from '../globals'
// import { useSettingUI } from '../ui/render'
import { handleKeydown } from '../utils/onKeydown'

export const conf: ISiteEffectConfig = {
  test: /eb4fans\.com/,
  fn() {
    handleKeydown('right', () => {
      const el = document.querySelector(
        '#single > div > div:nth-child(2) > div:nth-child(4) > div.col-xs-5.align-right a'
      )

      ;(el as HTMLElement)?.click()
    })

    handleKeydown('left', () => {
      const el = document.querySelector(
        '#single > div > div:nth-child(2) > div:nth-child(4) > div.col-xs-5.align-left a'
      )

      ;(el as HTMLElement)?.click()
    })
  },
}
