<script setup lang="ts">
import { RouterView } from 'vue-router'
import Scene from './scene/createScene.vue'
</script>

<template>
  <Scene></Scene>
  <RouterView />
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
