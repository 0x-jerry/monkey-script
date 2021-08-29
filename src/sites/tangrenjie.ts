import { ISiteEffectConfig } from '../globals'
import { useSettingUI } from '../ui/render'
import { isInIFrame, logger, waitUntil } from '../utils'
import { createMsgSender, onMsg } from '../utils/conmunicate'
import { IVideoHelperConfig } from '../video-helper/typing'
import { initSkip } from '../video-helper'
import RootComponent from './setting/Tangrenjie.vue'

const mainDomain = /tangrenjie\.(tv)/

export const conf: ISiteEffectConfig = {
  test: [
    // main domain
    mainDomain,
  ],
  fn() {
    unsafeWindow.onkeydown =
      unsafeWindow.onkeyup =
      unsafeWindow.onkeypress =
        () => {}

    if (isInIFrame()) {
      let initialized = false
      onMsg('init', async (origin: string, conf: IVideoHelperConfig) => {
        if (initialized) return
        initialized = true

        const sendMsg = createMsgSender(unsafeWindow.top, origin)

        await waitUntil(() => !!document.querySelector('video'))

        const video = document.querySelector('video')!

        initSkip(video, conf, () => sendMsg('play-next-video'))
      })
    }

    useSettingUI(RootComponent)
  },
}
