<script setup>
import gsap from 'gsap';
const main = ref();
const total = 10;
const xpos = [0, 3, 6, 9, 12, 12, 12, 15, 15, 18];
const ypos = [6, 6, 6, 6, 0, 6, 12, 3, 9, 6];
let pixels;

onMounted(() => {
  pixels = gsap.utils.toArray('.pixel', main.value);
});

const hoverOn = () => {
  pixels.forEach((item, i) => {
    gsap.set(item, { y: 12 });
    gsap.to(item, {
      duration: 0.35,
      y: 0,
      delay: i * -0.07,
      yoyo: true,
      repeat: -1,
      ease: 'quad.inOut',
    });
  });
};
const hoverOff = () => {
  pixels.forEach((item, i) => {
    gsap.killTweensOf(item);
    gsap.to(item, {
      duration: 1,
      y: ypos[i],
      ease: 'elastic.out',
    });
  });
};

defineExpose({
  hoverOn,
  hoverOff,
});
</script>

<template>
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
