<template>
  <div class="app_icon" @contextmenu="handleClickRight">
    <img :src="src" alt="前端项目图" class="app_icon_image" />
    <div class="app_icon_title">{{ title }}</div>
  </div>
</template>

<script setup>
import ContextMenu from '@imengyu/vue3-context-menu'
import { toRaw } from 'vue'
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
  //prevent the browser's default menu
  e.preventDefault()
  console.log(props.title, toRaw(props), 'props')
  //show your menu
  //这个函数与 this.$contextmenu 一致
  ContextMenu.showContextMenu({
    theme: 'mac',
    x: e.x,
    y: e.y - 10,
    items: [
      { 
        label: "进入测试环境", 
        onClick: () => {
          // 打开新页面
          window.open(props.testUrl)
        }
      },
      { 
        label: "进入正式环境",
        onClick: () => {
          // 打开新页面
          window.open(props.mainUrl)
        }
      }
    ]
  }); 
}

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
    background-color: #B2B2B2;
    border-radius: 16px;
  }
}
</style>