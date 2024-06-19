<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

let ctx;
const main = ref();
let played = false;

onMounted(() => {
  // split headline into letters
  splitHeadline(main.value);

  let el;
  ctx = gsap.context((self) => {
    setTimeout(function () {
      ScrollTrigger.create({
        trigger: main.value,
        start: 'top 65%',
        onEnter: () => {
          if (!played) {
            animSplitHeadline(main.value);
            played = true;
          }
        },
      });
    }, 200);
  }, main.value);
});
onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <h2 class="hl-anim" ref="main"><slot /></h2>
</template>

<style scoped></style>
