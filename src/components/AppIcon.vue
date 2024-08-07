<template>
  <div class="app_icon gradientAnimation" @contextmenu="handleClickRight">
    <img :src="src" alt="前端项目图" class="app_icon_image" />
    <div class="app_icon_title">{{ title }}</div>
  </div>
</template>

<script setup>
import ContextMenu from "@imengyu/vue3-context-menu";
import { toRaw } from "vue";
const props = defineProps({
  src: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  testUrl: {
    type: String,
  },
  mainUrl: {
    type: String,
  },
});

const handleClickRight = (e) => {
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
          window.open(props.testUrl);
        },
      },
      {
        label: "进入正式环境",
        onClick: () => {
          // 打开新页面
          window.open(props.mainUrl);
        },
      },
    ],
  });
};
</script>

<style lang="less" scoped>
.app_icon {
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

.gradientAnimation {
  animation-name: gradient;
  animation-duration: 0.85s;
  animation-fill-mode: forwards;
  opacity: 0;
}

/* 不带前缀的放到最后 */
@keyframes gradient {
  0% {
    opacity: 0;
    transform: translate(-100px, 0px);
  }

  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
</style>