<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
import gsap from 'gsap';

let cols;
let rows;
let total;
let pixelw = 200;

cols = Math.ceil(width.value / pixelw);
rows = Math.ceil(width.value / pixelw);
total = (cols + 1) * (rows + 1);
console.log(total);

const rots = ['0deg', '90deg', '180deg', '270deg'];
const gifs = ['/pixel-gif6.gif', '/pixel-gif6-rev.gif'];

let rand;
const randRotate = () => {
  rand = gsap.utils.random(0, 4, 1);
  return rand;
};
const randImg = () => {
  rand = gsap.utils.random(0, 1, 1);
  return gifs[rand];
};
</script>

<template>
  <div class="pixel-grid">
    <div
      class="pixel-gif"
      v-for="n in total"
      :style="`background-image:url(${randImg()}); transform: rotate(${rots[randRotate()]})`"
    ></div>
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: stretch;
  align-items: center;
}
.pixel-gif {
  width: 200px;
  height: 200px;
  /* border: 1px solid red; */
  /* background-image: url('/pixel-gif4.gif'); */
  background-size: 150px auto;
}
</style>
