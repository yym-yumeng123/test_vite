<template>
  <div class="app-icon" @contextmenu="handleClickRight">
    <img :src="src" alt="前端项目图" class="app-icon-image" />
    <div class="app-icon-title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  }
});

const handleClickRight = (e) => {
  console.log(e, 'e')
  e.preventDefault();
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