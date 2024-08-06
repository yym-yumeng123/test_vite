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
  </div>
</template>

<script setup>
import dev from "@/assets/dev.svg?url";
import person from "@/assets/person.svg";
import app from "@/assets/app.svg";
import layout from "@/assets/layout.svg";
defineProps({
  direction: { type: String, default: "bottomTopVertical" },
});

const handleOpenLayout = () => {
  console.log("handleOpenLayout");
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
</style>