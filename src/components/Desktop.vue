<template>
  <div class="desktop">
    <div class="app_wrap">
      <Sider />
      <Mainapp />
    </div>
  </div>
</template>

<script setup>
import Sider from './Sider.vue'
import Mainapp from './Mainapp.vue'
</script>

<style scoped lang="less">
.desktop {
  width: 100vw;
  height: 100vh;
  user-select: none;
  background: url('@assets/images/desk.jpg') no-repeat center;
  background-size: cover;
  .background_image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .app_wrap {
    display: flex;
    height: 100vh;
  }
}
</style>
