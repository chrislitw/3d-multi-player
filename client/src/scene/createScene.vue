<script setup lang="ts">
import { createScene } from './createScene.ts'
import { ref, onMounted } from 'vue'

const bjsCanvas = ref<HTMLCanvasElement>()
onMounted(async () => {
  if (bjsCanvas.value) {
    await createScene(bjsCanvas.value)
    const WEBSOCKET_URL = import.meta.env.VITE_WEBSOCKET_URL
    const ws = new WebSocket(WEBSOCKET_URL)

    //開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
    ws.onopen = () => {
      console.log('open connection')
      alert('websocket connected!')
    }

    //關閉後執行的動作，指定一個 function 會在連結中斷後執行
    ws.onclose = () => {
      console.log('close connection')
    }
  }
})
</script>
<template>
  <canvas id="bjsCanvas" ref="bjsCanvas" />
</template>
<style lang="css" scoped>
#bjsCanvas {
  width: 100%;
  height: 100%;
}

#bjsCanvas:focus {
  outline: none;
}
</style>
