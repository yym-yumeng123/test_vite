<template>
  <div class="desktop">
    <div :class="['app_wrap', direction]">
      <div class="bar">
        <Bar :direction="direction" @selectLayout="handleARenderLayout" />
      </div>
      <transition-group name="main" tag="div" :class="['main', direction]">
        <div
          @contextmenu="() => handleClickRight(item.testUrl, item.mainUrl)"
          class="main-item"
          v-for="item in AppIcons"
          :key="item.id"
        >
          <img :src="item.src" alt="前端项目图" class="app_icon_image" />
          <div class="app_icon_title">{{ item.name }}</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContextMenu from "@imengyu/vue3-context-menu";
import Bar from "../components/Bar.vue";
import { AppIcons } from "@/config.js";

// 布局 bar_main_main方向
const direction = ref("bottomTopVertical"); // bar 底部 main top 垂直

const handleARenderLayout = (val) => {
  direction.value = val;
};

const handleClickRight = (testUrl, mainUrl) => {
  e.preventDefault();
  //show your menu
  //这个函数与 this.$contextmenu 一致
  ContextMenu.showContextMenu({
    theme: "mac",
    x: e.x,
    y: e.y - 10,
    items: [
      {
        label: "进入测试环境",
        onClick: () => {
          // 打开新页面
          window.open(testUrl);
        },
      },
      {
        label: "进入正式环境",
        onClick: () => {
          // 打开新页面
          window.open(mainUrl);
        },
      },
    ],
  });
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
    .main {
      display: flex;
      flex-wrap: wrap;
    }
    &.bottomTopVertical {
      flex-direction: column-reverse;
    }
    &.bottomTopHorizontal {
      flex-direction: column-reverse;
    }
    &.topBottomVertical {
      flex-direction: column;
    }
    &.topBottomHorizontal {
      flex-direction: column;
    }
  }
}

.main.bottomTopVertical {
  flex-direction: column;
  align-content: flex-start;
  height: calc(100% - 90px);
}

.main.topBottomVertical {
  flex-direction: column;
  align-content: flex-start;
  height: calc(100% - 90px);
}

.main.bottomTopHorizontal {
  flex-direction: row;
  align-content: flex-start;
  height: calc(100% - 90px);
}

.main-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-right: 16px;
  padding: 8px 2px;
  width: 80px;
  user-select: text;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .app_icon_image {
    width: 50px;
    height: 50px;
  }

  .app_icon_title {
    display: flex;
    align-items: center;
    margin-top: 6px;
    padding: 2px 8px;
    color: #fff;
    font-size: 12px;
    background-color: #b2b2b2;
    border-radius: 16px;
  }
}
</style>
