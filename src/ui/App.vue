<template>
  <div class="root">
    <div class="setting-icon">
      <i-ph-gear class="gear" />
    </div>
    <div class="setting-content">
      <component is="setting-content"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from '@vue/reactivity'

const data = reactive({
  msg: 'msg',
})
</script>

<style scoped>
.root {
  position: fixed;
  top: 50vh;
  left: 0px;
}

.setting-icon {
  cursor: pointer;
  background: rgb(233, 233, 233);
  border: 1px solid #b1b1b1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.setting-icon:hover {
  border: 1px solid #727272;
}

.gear {
  font-size: 20px;
  transition: transform ease 1s;
  transform: rotate(0deg);
}

.setting-icon:hover .gear {
  transform: rotate(360deg);
}
</style>
