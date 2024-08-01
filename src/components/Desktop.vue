<template>
  <div class="desktop">
    <img src="background.jpg" class="background-image" alt="Desktop Background">
    <div class="app-icons">
      <div class="app-icon">App 1</div>
      <div class="app-icon">App 2</div>
      <div class="app-icon">App 3</div>
      <!-- Add more app icons as needed -->
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.desktop {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.app-icons {
  position: absolute;
  top: 50px;
  left: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
}

.app-icon {
  width: 100px;
  height: 100px;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
