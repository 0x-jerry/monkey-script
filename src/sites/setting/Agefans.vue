<template>
  <VideoHelper @init="init" @fullscreen="fakeFullscreen" />
</template>

<script setup lang="ts">
import clone from 'clone'
import { waitUntil } from '../../utils'
import { createMsgSender, onMsg } from '../../utils/conmunicate'
import { onKeydown } from '../../utils/onKeydown'
import {
  exitFakeFullscreen,
  getCurrentFullscreen,
  IVideoHelperConfig,
  requestFakeFullscreen,
  VideoHelper,
} from '../../video-helper'

function playNextVideo() {
  const current = document.querySelector('.movurl[style*=block] ul li a[style]')

  ;(
    current?.parentElement?.nextElementSibling
      ?.firstElementChild as HTMLDivElement
  )?.click()
}

onKeydown('esc', () => {
  exitFakeFullscreen()
})

function fakeFullscreen() {
  if (!getCurrentFullscreen()) {
    const iframe = document.querySelector('iframe')!
    requestFakeFullscreen(iframe)
  }
}

async function init(conf: IVideoHelperConfig) {
  const iframe = document.querySelector('iframe')!

  await waitUntil(() => !!iframe.src)

  const origin = new URL(iframe.src).origin

  const sendMsg = createMsgSender(iframe.contentWindow!, origin)
  sendMsg('init', location.origin, clone(conf))

  iframe.addEventListener('load', () => {
    sendMsg('init', location.origin, clone(conf))
  })

  onMsg('play-next-video', () => {
    playNextVideo()
  })

  const tryFullScreen = async () => {
    if (!getCurrentFullscreen()) {
      requestFakeFullscreen(iframe)
    }
  }

  onMsg('fullscreen', () => tryFullScreen())

  return
}
</script>
