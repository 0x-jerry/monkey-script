import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { queryCondition } from '../utils/query'

export const conf: ISiteEffectConfig = {
  test: /blog\.reimu\.net/,
  fn() {
    queryCondition(() => {
      const els = document.querySelectorAll(
        '.entry-content pre'
      ) as NodeListOf<HTMLElement>

      let r = false
      for (const item of Array.from(els)) {
        if (item.style.display === 'none') {
          item.style.display = 'block'
          r = true
        }
      }

      return r
    })
    console.log('domain init')
  },
}
