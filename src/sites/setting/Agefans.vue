<template>
  <div>
    <div>
      <label>
        <input type="checkbox" v-model="conf.autoPlay" />
        <span> 自动播放 </span>
      </label>
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
import clone from 'clone'
import { onMounted } from '@vue/runtime-core'
import { isDev } from '../../config'
import { logger, waitUntil } from '../../utils'
import { createMsgSender, onMsg } from '../../utils/conmunicate'
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
  initAutoPlay()
})

function playNextVideo() {
  const current = document.querySelector('.movurl[style*=block] ul li a[style]')

  ;(
    current?.parentElement?.nextElementSibling
      ?.firstElementChild as HTMLDivElement
  )?.click()
}

async function initAutoPlay() {
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
