import { isDev } from '../config'
import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { isInIFrame, waitUntil } from '../utils'
import { createMsgSender, onMsg } from '../utils/conmunicate'
import { IVideoHelperConfig } from '../video-helper/typing'
import { initConfig } from '../video-helper'
import RootComponent from './setting/Agefans.vue'

const mainDomain = /agefans\.(cc|vip)/

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
      onMsg('init', async (origin: string, conf: IVideoHelperConfig) => {
        if (initialized) return
        initialized = true

        const sendMsg = createMsgSender(unsafeWindow.top, origin)

        await waitUntil(() => !!document.querySelector('video'))

        const video = document.querySelector('video')!

        initConfig(
          video,
          conf,
          () => sendMsg('play-next-video'),
          () => sendMsg('fullscreen')
        )
      })
    }

    useSettingUI(RootComponent)
  },
}
