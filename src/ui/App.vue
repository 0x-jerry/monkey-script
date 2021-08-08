<template>
  <div class="root">
    {{ data.msg }}
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
  left: 10px;
}
</style>
