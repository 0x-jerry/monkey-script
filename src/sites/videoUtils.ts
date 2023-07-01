import { ISiteEffectConfig } from '../globals'

export const conf: ISiteEffectConfig = {
  test: /./,
  fn() {
    const factor = {
      timeline: 0.01,
      volume: 0.0001,
    }

    document.querySelectorAll('video').forEach((el) => {
      el.addEventListener('wheel', (e) => {
        e.preventDefault()

        if (e.deltaX) {
          el.currentTime = toRange(
            el.currentTime + e.deltaX * factor.timeline,
            0,
            el.duration
          )
        }

        if (e.deltaY) {
          el.volume = toRange(el.volume - e.deltaY * factor.volume, 0, 1)
        }

        console.log(el.volume, el.currentTime)
      })
    })
  },
}

function toRange(v: number, min = 0, max = 100) {
  return v < min ? min : v > max ? max : v
}
