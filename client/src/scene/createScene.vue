<script setup lang="ts">
import { onMounted } from 'vue'
import { createScene } from './scene.ts'

onMounted(() => createScene())
</script>
<template>
  <div>
    <canvas id="three"></canvas>
  </div>
</template>
<style lang="css" scoped></style>
