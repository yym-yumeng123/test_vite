<template>
  <div :class="['layout', direction]">
    <div class="main">
      <i v-for="i in 3" :key="i" class="item" />
    </div>
    <div class="footer">
      <div class="bar"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  direction: { type: String, default: "bottomTopVertical" },
});
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  padding: 8px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0.2px hsla(var(--system-color-grey-100-hsl), 0.7),
    0 0 0 0.2px hsla(var(--system-color-grey-900-hsl), 0.7),
    #0000004d 2px 5px 19px 7px;
  &:hover {
    outline: 2px solid #1677ff;
  }
  &.bottomTopVertical, &.topBottomVertical {
    flex-direction: column;
    .main {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      .item {
        width: 20px;
        height: 20px;
        margin-bottom: 8px;
        background: #1677ff;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      .bar {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        background: rgba(62, 37, 30, 0.5);
      }
    }
  }
  &.bottomTopHorizontal {
    flex-direction: column;
    .main {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      height: 84px;
      .item {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        background: #1677ff;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      .bar {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        background: rgba(62, 37, 30, 0.5);
      }
    }
  }

  &.topBottomVertical {
    flex-direction: column-reverse;
  }
}
</style>