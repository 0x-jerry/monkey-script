import { isDev } from '../config'
import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { isInIFrame, logger, waitUntil } from '../utils'
import { createMsgSender, onMsg } from '../utils/conmunicate'
import AgefansVue from './setting/Agefans.vue'

const mainDomain = /nunuyy\.(cc|vip)/

export const conf: ISiteEffectConfig = {
  test: [
    // main domain
    mainDomain,
    // iframe domain
    /shankuwang\.com/,
  ],
  fn() {
    if (isDev()) {
      unsafeWindow.onbeforeunload = () => {
        return '别跑了'
      }
    }

    if (isInIFrame()) {
      let initialized = false
      onMsg('init', async (origin: string, conf: IConfig) => {
        if (initialized) return
        initialized = true

        const sendMsg = createMsgSender(unsafeWindow.top, origin)

        await waitUntil(() => !!document.querySelector('video'))

        const video = document.querySelector('video')!

        const autoPlay = () => {
          if (!conf.autoPlay) {
            return
          }

          const handler = setInterval(() => {
            if (video.paused && video.currentTime < 1) {
              video.play()
            } else if (video.currentTime > 1) {
              clearInterval(handler)
            }
          }, 500)
        }

        autoPlay()

        video.addEventListener('timeupdate', () => {
          const restTime = video.duration - video.currentTime

          if (conf.autoPlay && restTime < 1) {
            sendMsg('play-next-video')
          }

          if (conf.skip.enable) {
            if (video.currentTime < conf.skip.beforeSkipTs) {
              video.currentTime = conf.skip.beforeSkipTs
            }

            if (restTime < conf.skip.afterSkipTs) {
              sendMsg('play-next-video')
            }
          }
        })
      })
    }

    useSettingUI(AgefansVue)
  },
}

export interface IConfig {
  autoPlay: boolean
  skip: {
    enable: boolean
    /**
     * 跳过片头
     * */
    beforeSkipTs: number
    /**
     * 跳过片尾
     * */
    afterSkipTs: number
  }
}
