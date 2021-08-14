import { isDev } from '../config'
import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { isInIFrame, logger } from '../utils'
import { createMsgSender, onMsg } from '../utils/conmunicate'
import AgefansVue from './setting/Agefans.vue'

const mainDomain = /agefans\.cc/
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

    const isMain = mainDomain.test(location.host)

    if (!isMain) {
      onMsg('init', (conf: IConfig) => {
        const handler = setInterval(() => {
          const video = document.querySelector('video')
          if (video) {
            clearInterval(handler)
            initVideo(video, conf)
          }
        })
      })

      const sendMsg = createMsgSender(
        unsafeWindow.top,
        'https://www.agefans.cc'
      )

      sendMsg('iframe-loaded', location.origin)

      function initVideo(video: HTMLVideoElement, conf: IConfig) {
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
          if (conf.skip.enable) {
            if (video.currentTime < conf.skip.beforeSkipTs) {
              video.currentTime = conf.skip.beforeSkipTs
            }

            const restTime = video.duration - video.currentTime

            if (restTime < conf.skip.afterSkipTs) {
              sendMsg('play-next-video')
            }
          }
        })
      }
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
