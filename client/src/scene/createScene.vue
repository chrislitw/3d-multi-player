<script setup lang="ts">
import { createScene } from './createScene.ts'
import { ref, onMounted } from 'vue'

const bjsCanvas = ref<HTMLCanvasElement | null>(null)

onMounted(async () => {
  if (bjsCanvas.value) {
    await createScene(bjsCanvas.value)
    const wss = new WebSocket('ws://localhost:8080')

    wss.onopen = (e) => {
      console.log('connected to websocket server')
    }

    wss.onmessage = (e) => {
      console.log('onmessage', e.data)
    }
  }
})
</script>
<template>
  <canvas ref="bjsCanvas" width="500" height="500" />
</template>
<style scoped></style>
./createScene.js
