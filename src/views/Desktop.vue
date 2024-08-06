<template>
  <div class="desktop">
    <div :class="['app_wrap', direction]">
      <div class="bar">
        <Bar :direction="direction" />
      </div>
      <div class="main">
        <Mainapp />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Bar from '../components/Bar.vue'
import Mainapp from '../components/Mainapp.vue'
// 布局 bar_main_main方向
const direction = ref('bottomTopVertical') // bar 底部 main top 垂直
// const direction = ref('bottomTopHorizontal') // bar 底部 main top 水平
// const direction = ref('topBottom')
</script>

<style scoped lang="less">
.desktop {
  width: 100%;
  height: 100vh;
  user-select: none;
  background: url('@assets/images/tree.jpg') 0px 0px / 100% 100% no-repeat;;
  background-size: cover;
  .app_wrap {
    display: flex;
    height: 100%;
    .main {
      display: flex;
    }
    &.bottomTopVertical {
      flex-direction: column-reverse;
      .main {
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-start;
        height: calc(100% - 90px);
      }
    }
    // &.topBottom {
    //   flex-direction: column;
    //   height: 100vh;
    //   .main {
    //     flex: 1;
    //   }
    // }
  }
}
</style>
