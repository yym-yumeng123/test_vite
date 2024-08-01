<template>
  <div class="desktop">
    <img :src="desk" class="background-image" alt="Desktop Background">
    <div class="app-icons">
      <AppIcon v-for="item in AppIcons" :key="item.name" :src="item.src" :title="item.name" />
    </div>
  </div>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { AppIcons } from '@/config.js'
import desk from '@assets/images/desk.jpg'
</script>

<style scoped>
.desktop {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.app-icons {
  position: absolute;
  top: 16px;
  left: 16px;
  height: calc(100vh - 32px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); /* 每列宽度占据父元素的 50% */
  grid-template-rows: repeat(auto-fill, minmax(80px, auto));
  grid-gap: 16px; /* 减小列之间的间距 */
  grid-auto-flow: column;
}
</style>
