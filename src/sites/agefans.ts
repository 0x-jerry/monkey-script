import { isDev } from '../config'
import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { isInIFrame, logger } from '../utils'
import { createMsgSender, onMsg } from '../utils/conmunicate'
import AgefansVue from './setting/Agefans.vue'

export const conf: ISiteEffectConfig = {
  test: [/agefans\.cc/, /shankuwang\.com/],
  fn() {
    if (isDev()) {
      unsafeWindow.onbeforeunload = () => {
        return '别跑了'
      }
    }

    if (isInIFrame()) {
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
          if (conf.autoPlay && video.paused) {
            video.play()
          }
        }

        if (video.readyState == video.HAVE_ENOUGH_DATA) {
          autoPlay()
        }

        video.addEventListener('load', () => autoPlay())

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
