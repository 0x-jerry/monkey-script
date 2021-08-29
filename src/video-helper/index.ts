import { sleep } from '@0x-jerry/lib'
import { IVideoHelperConfig } from './typing'
import VideoHelperVue from './VideoHelper.vue'

export function initConfig(
  video: HTMLVideoElement,
  conf: IVideoHelperConfig,
  playNext: () => any,
  fullscreen?: () => any
) {
  const tryPlay = async () => {
    const needPlay = video.paused && video.currentTime < 1

    if (conf.autoFullScreen) {
      fullscreen?.()
    }

    if (!needPlay) {
      return
    }

    await video.play()
    await sleep(500)
    await tryPlay()
  }

  const initLoaded = () => {
    if (video.currentTime < 1) {
      tryPlay()
      return
    }
  }

  initLoaded()
  video.addEventListener('load', initLoaded)

  video.addEventListener('timeupdate', () => {
    const restTime = video.duration - video.currentTime

    if (conf.autoPlay && restTime < 1) {
      playNext()
      return
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
