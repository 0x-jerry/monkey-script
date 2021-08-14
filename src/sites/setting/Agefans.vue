<template>
  <div>
    <div>
      <input type="checkbox" v-model="conf.autoPlay" />
      <span> 自动播放 </span>
    </div>
    <div class="group">
      <div>
        <label>
          <input type="checkbox" v-model="conf.skip.enable" />
          <span> 跳过片头/片尾 </span>
        </label>
      </div>
      <div>
        <label>
          <span> 片头： </span>
          <input type="number" v-model.number="conf.skip.beforeSkipTs" />
        </label>
      </div>
      <div>
        <label>
          <span> 片尾： </span>
          <input type="number" v-model.number="conf.skip.afterSkipTs" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { logger } from '../../utils'
import { getConfig } from '../../utils/siteConf'

const [conf] = getConfig({
  autoPlay: false,
  skip: {
    enable: false,
    /**
     * 跳过片头
     * */
    beforeSkipTs: 0,
    /**
     * 跳过片尾
     * */
    afterSkipTs: 0,
  },
})

onMounted(() => {
  if (conf.skip.enable) {
    enableAutoPlay()
  }
})

function playNextVideo() {
  const current = unsafeWindow.document.querySelector(
    '.movurl[style*=block] ul li a[style]'
  )

  ;(
    current?.parentElement?.nextElementSibling
      ?.firstElementChild as HTMLDivElement
  )?.click()
}

function initVideo(video: HTMLVideoElement) {
  if (conf.autoPlay && video.paused) {
    video.play()
  }

  video.addEventListener('timeupdate', () => {
    if (conf.skip.enable) {
      if (video.currentTime < conf.skip.beforeSkipTs) {
        video.currentTime = conf.skip.beforeSkipTs
      }

      const restTime = video.duration - video.currentTime

      if (restTime < conf.skip.afterSkipTs) {
        playNextVideo()
      }
    }
  })
}

function enableAutoPlay() {
  const iframeWindow =
    unsafeWindow.document.querySelector('iframe')?.contentWindow

  const hanlder = setInterval(() => {
    const video = iframeWindow?.document.querySelector('video') as any

    if (video) {
      clearInterval(hanlder)
      initVideo(video)
    }
  }, 1000)
}
</script>
