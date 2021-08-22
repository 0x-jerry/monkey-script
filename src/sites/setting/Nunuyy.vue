<template>
  <VideoHelper @init="initAutoPlay" />
</template>

<script setup lang="ts">
import clone from 'clone'
import { waitUntil } from '../../utils'
import { createMsgSender, onMsg } from '../../utils/conmunicate'
import { IVideoHelperConfig } from '../../video-helper/typing'

function playNextVideo() {
  const current = document.querySelector('.movurl[style*=block] ul li a[style]')

  ;(
    current?.parentElement?.nextElementSibling
      ?.firstElementChild as HTMLDivElement
  )?.click()
}

async function initAutoPlay(conf: IVideoHelperConfig) {
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

  return
}
</script>
