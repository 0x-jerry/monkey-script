<template>
  <div class="root" :class="{ active: data.isActive }">
    <div class="setting-content">
      <div class="setting-icon" @click="data.isActive = !data.isActive">
        <i-ph-gear class="gear" />
      </div>
      <div class="content-wrapper">
        <component is="setting-content"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity'
import { isDev } from '../config'
import { onKeydown } from '../utils/onKeydown'

const data = reactive({
  isActive: isDev(),
})

function toggle() {
  data.isActive = !data.isActive
}

onKeydown('meta + .', toggle)
</script>

<style scoped>
.root {
  position: fixed;
  top: 50vh;
  left: 0px;
}

.content-wrapper {
  padding: 5px;
  border: 1px solid #888;
}

.setting-content {
  position: relative;
  transform: translateX(-100%);
  transition: transform ease 0.4s;
}

.root.active .setting-content {
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
</style>
