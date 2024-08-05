<template>
  <div class="app_side">
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
    </div>
  </div>
</template>

<script setup>
import dev from '@/assets/dev.svg?url'
import person from '@/assets/person.svg'
import app from '@/assets/app.svg'
</script>

<style lang="less" scoped>
.app_side {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  user-select: text;
  margin-right: 24px;
  .side {
    border: 1px solid #454545;
    background: #808080;
    padding: 16px 0 8px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    &_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4px 8px;
      cursor: pointer;
      margin-bottom: 8px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
      .side_item_image {
        width: 40px;
        height: 40px;
        color: #2498E5;
      }
      .side_item_title {
        color: #fff;
      }
    }
  }
}
</style>