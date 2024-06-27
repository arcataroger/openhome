<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
import gsap from 'gsap';
const props = defineProps(['offset']);

let ctx;
let tl;
const main = ref();
const sp = 0.1;
let offset = null;
if (props.offset != undefined) {
  offset = props.offset;
}
const total = 3;

onMounted(() => {
  ctx = gsap.context((self) => {
    const frames = gsap.utils.toArray('.static');
    tl = gsap.timeline({ repeat: -1 }).pause();

    frames.forEach((frame, i) => {
      gsap.set(frame, { display: 'none' });
      tl.set(frame, { display: 'block' }, i * sp);
      tl.set(frame, { display: 'none' }, i * sp + sp);
    });

    // play when in view, or turn off
    setTimeout(function () {
      //playInView(main.value, tl, null, offset);
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="static-wrap" ref="main">
    <div class="static" v-for="n in total"></div>
  </div>
</template>

<style scoped>
.static,
.static-wrap {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.static-wrap {
  opacity: 0.25;
  mix-blend-mode: normal;
}
.static {
  /* opacity: 0.2; */
  background-color: #fff;
  background-position: 50%;
  background-size: 1440px auto;
  background-image: url('/65b21e16a3a7025655fff89e_Noise.png');
  &:nth-child(2) {
    transform: scaleX(-1);
  }
  &:nth-child(3) {
    transform: scaleY(-1);
  }
  &:nth-child(4) {
    transform: scale(-1);
  }
}
</style>
