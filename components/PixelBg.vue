<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();

let cols;
let rows;
let total;
let pixelw = 200;

cols = Math.floor(width.value / pixelw);
rows = Math.floor(width.value / pixelw);
total = (cols + 1) * (rows + 1);
console.log(total);
</script>

<template>
  <div class="pixel-grid">
    <div class="pixel-gif" v-for="n in total"></div>
  </div>
</template>

<style scoped>
.pixel-grid {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: start;
  align-items: start;
}
.pixel-gif {
  width: 200px;
  height: 200px;
  background-image: url('/pixel-gif.gif');
  background-size: 200px 200px;
}
</style>
