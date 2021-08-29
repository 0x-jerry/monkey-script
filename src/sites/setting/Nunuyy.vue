<template>
  <VideoHelper @init="init" />
</template>

<script setup lang="ts">
import { waitUntil } from '../../utils'
import { IVideoHelperConfig } from '../../video-helper/typing'
import { initConfig, VideoHelper } from '../../video-helper'

async function init(conf: IVideoHelperConfig) {
  await waitUntil(() => !!document.querySelector('video'))

  const video = document.querySelector('video')!

  initConfig(video, conf, () => {
    const next = document.querySelector('.playlists ul li.on + li')

    const nextLink = next?.firstChild as HTMLLinkElement | null

    nextLink?.click()
  })
}
</script>
