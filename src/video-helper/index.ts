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

interface FakeStyle {
  __backup_style__?: string | null
}

let currentFullscreen: HTMLElement | null = null

export function getCurrentFullscreen() {
  return currentFullscreen
}

export function requestFakeFullscreen(el: HTMLElement & FakeStyle) {
  el.__backup_style__ = el.getAttribute('style')

  el.style.top = '0'
  el.style.left = '0'
  el.style.position = 'fixed'
  el.style.zIndex = '999999'
  el.style.width = '100vw'
  el.style.height = '100vh'

  currentFullscreen = el
}

export function exitFakeFullscreen(
  el: (HTMLElement & FakeStyle) | null = currentFullscreen
) {
  if (!el) return

  el.setAttribute('style', el.__backup_style__ || '')

  currentFullscreen = null
}

export const VideoHelper = VideoHelperVue

export * from './typing.d'
