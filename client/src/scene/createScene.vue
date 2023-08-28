<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ThreeScene } from './scene.ts'

const three = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
  if (three.value !== null) new ThreeScene(three.value)
})
</script>
<template>
  <div>
    <canvas ref="three"></canvas>
  </div>
</template>
<style lang="css" scoped></style>
