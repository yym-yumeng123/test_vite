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
    </div>

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
        <a-col :span="12" v-for="(item) in allDirection" :key="item" class="modal_item">
          <Layout :direction="item" @selectLayout="handleActiveLayout" :active="activeLayout === item" />
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dev from "@/assets/dev.svg?url";
import person from "@/assets/person.svg";
import app from "@/assets/app.svg";
import layout from "@/assets/layout.svg";
import Layout from "./Layout.vue";
import { allDirection } from "@/config.js";
const props = defineProps({
  direction: { type: String, default: "bottomTopVertical" },
});
const emit = defineEmits(["selectLayout"]);


const open = ref(false);
const activeLayout = ref(props.direction);

const handleOpenLayout = () => {
  open.value = true;
};

const handleOk = () => {
  emit("selectLayout", activeLayout.value)
  open.value = false;
};

const handleActiveLayout = (value) => {
  activeLayout.value = value;
}
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
      transition: transform 0.3s ease; /* 添加过渡效果 */
      &:hover {
        transform: scale(1.2);
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
}

.modal_item {
  margin-bottom: 16px;
}
</style>