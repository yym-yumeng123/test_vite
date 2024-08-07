<template>
  <div class="desktop">
    <div :class="['app_wrap', direction]">
      <div class="bar">
        <Bar :direction="direction" @selectLayout="handleARenderLayout" />
      </div>
      <div class="main">
        <AppIcon
          v-for="item in AppIcons"
          :key="item.id"
          :src="item.src"
          :title="item.name"
          :testUrl="item.testUrl"
          :mainUrl="item.mainUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Bar from "../components/Bar.vue";
import AppIcon from "../components/AppIcon.vue";
import { AppIcons } from "@/config.js";

// 布局 bar_main_main方向
const direction = ref("bottomTopVertical"); // bar 底部 main top 垂直
// const direction = ref('bottomTopHorizontal') // bar 底部 main top 水平
// const direction = ref('topBottom')

const handleARenderLayout = (val) => {
  direction.value = val;
};
</script>

<style scoped lang="less">
.desktop {
  width: 100%;
  height: 100vh;
  user-select: none;
  background: url("@assets/images/tree.jpg") 0px 0px / 100% 100% no-repeat;
  background-size: cover;
  .app_wrap {
    display: flex;
    height: 100%;
    transition: all 0.3s ease-out;
    .bar {
      transition: all 0.3s ease-out;
    }
    .main {
      display: flex;
      transition: all 0.3s ease-out;
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
    &.bottomTopHorizontal {
      flex-direction: column-reverse;
      .main {
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        height: calc(100% - 90px);
      }
    }
  }
}
</style>
