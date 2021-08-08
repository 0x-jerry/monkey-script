import { whenDev } from '../config'
import { ISiteEffectConfig } from '../globals'
import { onKeydown } from '../utils/onKeydown'

export const conf: ISiteEffectConfig = {
  test: /agdm\.tv/,
  fn() {
    whenDev(() => {
      // @ts-ignore
      window.requestAnimationFrame = () => {}
    })

    // next episode
    onKeydown('right', () => {
      const current = document.querySelector(
        '.tab-pane.active > ul > li > a.btn-warm'
      )

      const el = current?.parentElement?.nextElementSibling

      el?.querySelector('a')?.click()
    })

    // pre episode
    onKeydown('left', () => {
      const current = document.querySelector(
        '.tab-pane.active > ul > li > a.btn-warm'
      )

      const el = current?.parentElement?.previousElementSibling

      el?.querySelector('a')?.click()
    })
  },
}
