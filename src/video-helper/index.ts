import { sleep } from '@0x-jerry/lib'
import { IVideoHelperConfig } from './typing'
import VideoHelperVue from './VideoHelper.vue'

export function initSkip(
  video: HTMLVideoElement,
  conf: IVideoHelperConfig,
  playNext: () => any,
  fullscreen?: () => any
) {
  video.addEventListener('timeupdate', () => {
    const restTime = video.duration - video.currentTime

    if (video.currentTime < 2) {
      if (conf.autoFullScreen) {
        fullscreen?.()
      }
    }

    if (conf.autoPlay) {
      const tryPlay = async () => {
        if (!needPlay) {
          return
        }

        await video.play()
        await sleep(500)
        await tryPlay()
      }

      const needPlay = video.paused && video.currentTime < 1
      if (needPlay) {
        tryPlay()
        return
      }

      if (restTime < 1) {
        playNext()
        return
      }
    }

    if (!conf.skip.enable) {
      return
    }

    // skip before
    if (video.currentTime < conf.skip.beforeSkipTs) {
      video.currentTime = conf.skip.beforeSkipTs
    }

    // skip after
    if (restTime < conf.skip.afterSkipTs) {
      playNext()
    }
  })
}

export const VideoHelper = VideoHelperVue

export * from './typing.d'
