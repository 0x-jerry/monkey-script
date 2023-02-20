<script lang="ts" setup>
function openRepo() {
  // https://0x-jerry.github.io/play-play-play/#/
  const url = new URL(location.href)
  const [name] = url.host.split('.')
  const [_, repo] = url.pathname.split('/')

  const u = `https://github.com/${name}/${repo}`

  window.open(u, '_blank')
}
</script>

<template>
  <div class="test">
    <button @click="openRepo">Goto Repo</button>
  </div>
</template>

<style lang="less"></style>
