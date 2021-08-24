<template>
  <div>
    <div class="conf-line">
      <label>
        <input type="checkbox" v-model="conf.autoPlay" />
        <span> 自动播放 </span>
      </label>
    </div>
    <div class="conf-group">
      <div class="conf-line">
        <label>
          <input type="checkbox" v-model="conf.skip.enable" />
          <span> 跳过片头/片尾 </span>
        </label>
      </div>
      <div class="conf-line">
        <label>
          <span> 片头： </span>
          <input type="number" v-model.number="conf.skip.beforeSkipTs" />
        </label>
      </div>
      <div class="conf-line">
        <label>
          <span> 片尾： </span>
          <input type="number" v-model.number="conf.skip.afterSkipTs" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { getConfig } from '../utils/siteConf'

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

const emit = defineEmits(['init'])

onMounted(() => {
  emit('init', conf)
})
</script>

<style scoped>
input[type='checkbox'] {
  appearance: button;
}

.conf-group {
}

.conf-line {
  margin: 4px 0;
}
</style>
