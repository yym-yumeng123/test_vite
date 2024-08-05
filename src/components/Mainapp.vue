<template>
  <div class="app_main">
    <AppIcon
      v-for="item in AppIcons"
      :key="item.id"
      :src="item.src"
      :title="item.name"
      :testUrl="item.testUrl"
      :mainUrl="item.mainUrl"
    />
  </div>
</template>

<script setup>
import AppIcon from "./AppIcon.vue";
import { AppIcons } from "@/config.js";
</script>

<style lang="less" scoped>
.app_main {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>