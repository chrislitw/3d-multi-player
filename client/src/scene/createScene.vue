<script setup lang="ts">
import { createScene } from './createScene.ts'
import { ref, onMounted } from 'vue'

const bjsCanvas = ref<HTMLCanvasElement | null>(null)
onMounted(async () => {
  if (bjsCanvas.value) {
    await createScene(bjsCanvas.value)
  }
})
</script>
<template>
  <canvas ref="bjsCanvas" width="500" height="500" />
</template>
<style scoped></style>
./createScene.js
