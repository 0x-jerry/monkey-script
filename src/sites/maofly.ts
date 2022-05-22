import { ISiteEffectConfig } from '../globals'
import { handleKeydown } from '../utils/onKeydown'

export const conf: ISiteEffectConfig = {
  test: /maofly\.com/,
  fn() {
    handleKeydown('right', () => {
      const el = document.querySelector('[title=下集]')

      ;(el as HTMLElement)?.click()
    })

    handleKeydown('left', () => {
      const el = document.querySelector('[title=上集]')

      ;(el as HTMLElement)?.click()
    })
  },
}
