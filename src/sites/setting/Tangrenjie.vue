<template>
  <VideoHelper @init="init" />
</template>

<script setup lang="ts">
import clone from 'clone'
import { logger, waitUntil } from '../../utils'
import { createMsgSender, onMsg } from '../../utils/conmunicate'
import { IVideoHelperConfig, VideoHelper } from '../../video-helper'

function playNextVideo() {
  const next = document.querySelector('.content.show li.active + li')

  const nextLink = next?.firstChild as HTMLLinkElement | null

  nextLink?.click()
}

async function init(conf: IVideoHelperConfig) {
  const getIframe = () =>
    document.querySelector('#playleft iframe') as HTMLIFrameElement | null

  await waitUntil(() => !!getIframe()?.src)

  const iframe = getIframe()!
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
