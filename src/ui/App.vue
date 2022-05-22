<template>
  <div class="root" :class="{ active: data.isActive }">
    <div class="setting-content">
      <div class="setting-icon" @click="toggle">
        <i-ph-gear-fill v-if="data.isActive" class="gear" />
        <i-ph-gear v-else class="gear" />
      </div>
      <div class="content-wrapper">
        <div v-if="isDev()">
          <div>
            <button @click="clearSiteConfig">删除配置</button>
          </div>
          <br />
        </div>
        <component is="setting-content"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { isDev } from '../config'
import { logger } from '../utils'
import { onKeydown } from '../utils/onKeydown'
import { clearSiteConfig } from '../utils/siteConf'

const data = reactive({
  isActive: isDev(),
})

function toggle() {
  data.isActive = !data.isActive
}

onKeydown('meta + .', toggle)
</script>

<style lang="less">
.root {
  * {
    color: #333;
  }

  button {
    cursor: pointer;
  }

  input {
    background: #fff;
  }
}
</style>

<style lang="less" scoped>
.root {
  position: fixed;
  top: 50vh;
  left: 0px;
  color: #333;

  .content-wrapper {
    padding: 5px;
    background: #fff;
    border: 1px solid #888;
  }

  .setting-content {
    position: relative;
    transform: translateX(-100%);
    transition: transform ease 0.4s;
  }

  &.active .setting-content {
    transform: translateX(0);
  }

  .setting-content:hover {
    transform: translateX(0);
  }

  .setting-icon {
    cursor: pointer;
    background: #fff;
    padding: 2px;
    color: #444;
    border: 1px solid #333;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
  }

  .setting-icon:hover {
    color: #555;
  }

  .gear {
    font-size: 20px;
    transition: transform ease 1s;
  }
}
</style>
