<script setup>
import gsap from 'gsap';
const main = ref();
const total = 10;
const xpos = [0, 3, 6, 9, 12, 12, 12, 15, 15, 18];
const ypos = [6, 6, 6, 6, 0, 6, 12, 3, 9, 6];
let ctx;

onMounted(() => {
  /*   ctx = gsap.context((self) => {
    const pixels = gsap.utils.toArray('.pixel', main.value);
    pixels.forEach((item, i) => {
      gsap.set(item, { y: 0 });
      gsap.to(item, {
        y: 12,
        delay: i * -0.1,
        yoyo: true,
        repeat: -1,
        ease: 'quad.inOut',
      });
    });
  }, main.value); */
});
onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <!--   <svg viewBox="0 0 19.66576 15.35853" class="use-theme">
    <rect x="16.83406" y="6.14356" width="2.8317" height="3.07174" />
    <rect x="11.16996" y="6.14356" width="2.8317" height="3.07174" />
    <rect x="8.37747" y="6.14356" width="2.8317" height="3.07174" />
    <rect x="5.58498" y="6.14356" width="2.8317" height="3.07174" />
    <rect x="2.79249" y="6.14356" width="2.8317" height="3.07174" />
    <rect y="6.14356" width="2.8317" height="3.07174" />
    <rect x="14.00106" y="3.07178" width="2.8317" height="3.07174" />
    <rect x="11.16936" y="12.28679" width="2.8317" height="3.07174" />
    <rect x="11.16996" width="2.8317" height="3.07174" />
    <rect x="14.00236" y="9.21537" width="2.8317" height="3.07174" />
  </svg> -->
  <div class="pixel-group" ref="main">
    <div
      class="pixel"
      v-for="n in total"
      :style="`left: ${xpos[n - 1]}px; transform: translateY(${ypos[n - 1]}px)`"
    ></div>
  </div>
</template>

<style scoped>
.pixel-group {
  position: absolute;
  left: 0;
  top: 1px;
  width: 21px;
  height: 16px;
}
.pixel {
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 3px;
}
</style>
