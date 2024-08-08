<template>
  <div
    class="desktop"
    :style="{ background: `url(${bgSrc}) 0 0 / 100% 100% no-repeat` }"
  >
    <div :class="['app_wrap', direction]">
      <div class="bar">
        <Bar
          :direction="direction"
          @selectLayout="handleARenderLayout"
          @selectBg="handleSelectBg"
        />
      </div>
      <transition-group name="main" tag="div" :class="['main', direction]">
        <div
          @contextmenu="handleClickRight"
          @dblclick="handleDblClick"
          class="main-item"
          v-for="item in AppIcons"
          :key="item.id"
        >
          <img :src="item.src" alt="前端项目图" class="app_icon_image" />
          <div class="app_icon_title">{{ item.name }}</div>
        </div>
        <div class="main-item">
          <PlusSquareOutlined class="app_icon_plus" />
          <div class="app_icon_title">添加</div>
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
import { PlusSquareOutlined } from "@ant-design/icons-vue";

import cloud from "@assets/images/cloud.png";
import three from "@assets/images/three_twice.png";
import flower from "@assets/images/flower.jpg";
import plane from "@assets/images/plane.jpg";
import tree from "@assets/images/tree.jpg";
import waterdrop from "@assets/images/waterdrop.jpg";

const allPhoto = ref([flower, cloud, three, plane, tree, waterdrop]);
const bgSrc = ref(allPhoto.value[0]);

// 布局 bar_main_main方向
const direction = ref("bottomTopVertical"); // bar 底部 main top 垂直

const handleARenderLayout = (val) => {
  direction.value = val;
};

const handleSelectBg = (index) => {
  console.log("index", index);
  bgSrc.value = allPhoto.value[index];
};

const handleClickRight = (e) => {
  e.preventDefault();
  //show your menu
  //这个函数与 this.$contextmenu 一致
  ContextMenu.showContextMenu({
    theme: "mac",
    x: e.x,
    y: e.y - 10,
    items: [
      {
        label: "在新标签页中打开链接",
        onClick: () => {
          // 打开新页面
          window.open("221");
        },
      },
      {
        label: "复制链接地址",
        onClick: () => {
          // 打开新页面
          window.open("2121");
        },
      },
      {
        label: "删除该应用",
        onClick: () => {
          // 打开新页面
          window.open("2121");
        },
      },
    ],
  });
};

const handleDblClick = (e) => {
  e.preventDefault();
  // TODO: 跳转新URL
};
</script>

<style scoped lang="less">
.desktop {
  width: 100%;
  height: 100vh;
  user-select: none;
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

    &.rightLeftVertical {
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    &.rightLeftHorizontal {
      flex-direction: row-reverse;
      justify-content: space-between;
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

.main.leftRightVertical {
  flex-direction: column;
}

.main.leftRightHorizontal {
  align-content: flex-start;
}

.main.rightLeftVertical {
  flex-direction: column;
}

.main.rightLeftHorizontal {
  align-content: flex-start;
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
    background-color: hsla(var(--system-color-dark-hsl), 0.7);
    border-radius: 16px;
  }
}

.app_icon_plus {
  font-size: 50px;
}
</style>
