import { toArray } from '@0x-jerry/utils'
import { ISiteEffectConfig } from '../globals'
import { waitUntil } from '../utils'

const Configs = [
  {
    site: /vip\.sp-flv\.com/,
    el: ['.m-player'],
  },
]

export const conf: ISiteEffectConfig = {
  test: /./,
  async fn() {
    const factor = {
      timeline: 0.01,
      volume: 0.0001,
    }

    for (const config of Configs) {
      if (!config.site.test(location.hostname)) {
        continue
      }

      const els = toArray(config.el)

      els.forEach(async (selector) => {
        await waitUntil(() => !!document.querySelectorAll(selector).length)

        document.querySelectorAll(selector).forEach(async (el) => {
          const getVideoEl = () =>
            el instanceof HTMLVideoElement ? el : el.querySelector('video')

          await waitUntil(() => !!getVideoEl())

          const videoEl = getVideoEl()

          if (!videoEl) return
          ;(el as HTMLElement).addEventListener('wheel', (e) => {
            e.preventDefault()

            if (e.deltaX) {
              videoEl.currentTime = toRange(
                videoEl.currentTime + e.deltaX * factor.timeline,
                0,
                videoEl.duration
              )
            }

            if (e.deltaY) {
              videoEl.volume = toRange(
                videoEl.volume - e.deltaY * factor.volume,
                0,
                1
              )
            }
          })
        })
      })
    }
  },
}

function toRange(v: number, min = 0, max = 100) {
  return v < min ? min : v > max ? max : v
}
