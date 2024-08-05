<template>
  <div class="app-icon" @contextmenu="handleClickRight">
    <img :src="src" alt="前端项目图" class="app-icon-image" />
    <div class="app-icon-title">{{ title }}</div>
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
    required: true,
  },
  mainUrl: {
    type: String,
    required: true,
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
.app-icon {
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: text;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  .app-icon-image {
    width: 48px;
    height: 100%;
    padding: 4px 8px;
  }

  .app-icon-title {
    margin-top: 5px;
    padding: 0 4px 4px;
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
}
</style>