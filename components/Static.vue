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

onMounted(() => {
  ctx = gsap.context((self) => {
    tl = gsap
      .timeline({ repeat: -1, repeatDelay: sp })
      .set('.static.one', { display: 'none' }, 0)
      .set('.static.two', { display: 'block' }, 0)
      .set('.static.one', { display: 'block' }, sp)
      .set('.static.two', { display: 'none' }, sp)
      .pause();

    // play when in view, or turn off
    setTimeout(function () {
      playInView(main.value, tl, null, offset);
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="static-wrap" ref="main">
    <div class="static one"></div>
    <div class="static two"></div>
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
  &.two {
    background-image: url('/65b21e16a3a7025655fff89e_Noise.png');
  }
  &.one {
    background-image: url('/65b21e16a3a7025655fff8a2_various.png');
  }
}
</style>
