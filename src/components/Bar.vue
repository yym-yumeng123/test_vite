<template>
  <div :class="['app_side', direction]">
    <div class="side">
      <!-- 个人中心 开发者中心 应用市场 -->
      <div class="side_item">
        <img class="side_item_image" :src="person" />
        <div class="side_item_title">个人中心</div>
      </div>
      <div class="side_item">
        <img class="side_item_image" :src="dev" alt="" />
        <div class="side_item_title">开发者中心</div>
      </div>
      <div class="side_item">
        <img class="side_item_image" :src="app" alt="" />
        <div class="side_item_title">应用市场</div>
      </div>
      <div class="side_item" @click="handleOpenLayout">
        <img class="side_item_image" :src="layout" alt="" />
        <div class="side_item_title">桌面布局</div>
      </div>
      <div class="side_item" @click="handleOpenBg">
        <img class="side_item_image" :src="bg" alt="" />
        <div class="side_item_title">背景设置</div>
      </div>
    </div>

    <!-- 桌面布局 -->
    <a-modal
      :width="800"
      v-model:open="open"
      :closable="false"
      title="选择桌面布局"
    >
      <template #footer>
        <a-button key="submit" type="primary" @click="handleOk">确认</a-button>
      </template>
      <a-row :gutter="16">
        <a-col
          :span="12"
          v-for="item in allDirection"
          :key="item"
          class="modal_item"
        >
          <Layout
            :direction="item"
            @selectLayout="handleActiveLayout"
            :active="activeLayout === item"
          />
        </a-col>
      </a-row>
    </a-modal>

    <!-- 背景设置 -->
    <a-drawer
      v-model:open="bgOpen"
      title="设置背景图片"
      placement="right"
      :closable="false"
    >
      <div class="img_wrap">
        <img v-for=" (item, index) of allPhoto" :key="index" class="img" :src="item" @click="handleSelectBg(index)">
      </div>
    </a-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dev from "@/assets/dev.svg?url";
import person from "@/assets/person.svg";
import app from "@/assets/app.svg";
import layout from "@/assets/layout.svg";
import bg from "@/assets/bg.svg";
import Layout from "./Layout.vue";
import { allDirection } from "@/config.js";

import cloud from "@assets/images/cloud.png"
import three from "@assets/images/three_twice.png"
import flower from "@assets/images/flower.jpg"
import plane from "@assets/images/plane.jpg"
import tree from "@assets/images/tree.jpg"
import waterdrop from "@assets/images/waterdrop.jpg"


const allPhoto = ref([flower, cloud, three, plane, tree, waterdrop])
const props = defineProps({
  direction: { type: String, default: "bottomTopVertical" },
});
const emit = defineEmits(["selectLayout", "selectBg"]);

const open = ref(false);
const activeLayout = ref(props.direction);

const bgOpen = ref(false);

const handleOpenLayout = () => {
  activeLayout.value = props.direction;
  open.value = true;
};

const handleOpenBg = () => {
  bgOpen.value = true;
};

const handleOk = () => {
  emit("selectLayout", activeLayout.value);
  open.value = false;
};

const handleActiveLayout = (value) => {
  activeLayout.value = value;
};

const handleSelectBg = (index) => {
  emit("selectBg", index)
  bgOpen.value = false;
};
</script>

<style lang="less" scoped>
.app_side {
  display: flex;
  justify-content: center;
  background: transparent;
  padding: 8px;
  .side {
    background-color: hsla(var(--system-color-dark-hsl), 0.7);
    box-shadow: inset 0 0 0 0.2px hsla(var(--system-color-grey-100-hsl), 0.7),
      0 0 0 0.2px hsla(var(--system-color-grey-900-hsl), 0.7),
      #0000004d 2px 5px 19px 7px;
    position: relative;
    padding: 0.3rem;
    border-radius: 1.2rem;
    height: 100%;
    display: flex;
    align-items: flex-end;
    &_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 8px;
      cursor: pointer;
      transition: all .5s;
      &:hover {
        transform: scale(1.3);
      }
      .side_item_image {
        width: 36px;
        height: 36px;
      }
      .side_item_title {
        margin-top: 2px;
        font-size: 12px;
        color: #fff;
        font-weight: 600;
      }
    }
  }

  &.leftRightVertical,
  &.leftRightHorizontal,
  &.rightLeftVertical,
  &.rightLeftHorizontal {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .side {
      flex-direction: column;
      &_item {
        .side_item_image {
          width: 36px;
          height: 36px;
        }
        .side_item_title {
          margin-top: 2px;
          font-size: 12px;
          color: #fff;
          font-weight: 600;
          min-width: 60px;
          text-align: center;
        }
      }
    }
  }
}

.modal_item {
  margin-bottom: 16px;
}

.img_wrap {
  width: 100%;
  .img {
    width: 100%;
    height: 140px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>