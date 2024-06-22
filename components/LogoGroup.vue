<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();

/* placeholder data */
const logos = [
  '/logos/apple-music.svg',
  '/logos/g-nest.svg',
  '/logos/hue.svg',
  '/logos/chat-gpt.svg',
  '/logos/spotify.svg',
  '/logos/uber.svg',
];

const main = ref();
let tl;
let ctx;
let mm = gsap.matchMedia();
const maxw = 650;
const scrollSp = 30;

onMounted(() => {
  let el;

  ctx = gsap.context((self) => {
    // timeline container
    el = document.querySelector('.logo-ticker');

    // match media wrapper
    mm.add('(max-width: ' + maxw + 'px)', () => {
      // get scroller width
      initScroller();

      // create timeline
      tl = gsap.timeline({
        repeat: -1,
        paused: true,
      });

      // setup timeline props
      tl.to(el, {
        duration: scrollSp,
        xPercent: -50,
        ease: 'none',
      });

      // trigger timeline when in viewport
      setTimeout(function () {
        playInView(el, tl);
      }, 200);
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

const initScroller = () => {
  //console.log('set scroller width');
};
</script>

<template>
  <div
    class="logo-ticker mt-100"
    :class="width <= maxw && 'scrolling'"
    ref="main"
  >
    <div class="logo-group flex-jst">
      <div class="logo-item" v-for="logo in logos">
        <img :src="logo" alt="brand" />
      </div>
    </div>
    <div class="logo-group flex-jst" v-if="width <= maxw">
      <div class="logo-item" v-for="logo in logos">
        <img :src="logo" alt="brand" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-ticker.scrolling {
  position: relative;
  height: 72px;
  width: 1700px; /* dynamic */
  margin-top: 40px;
  padding-bottom: 30px;
  .logo-group {
    position: absolute;
    left: 0;
    top: 0;
    width: 850px; /* dynamic */
    padding: 0px;
  }
  .logo-group:nth-child(2) {
    left: 50%;
  }
}

.logo-group {
  padding: 0 75px 40px;
}
@media (max-width: 1200px) {
  .logo-group {
    padding: 0 40px 40px;
  }
}
@media (max-width: 1024px) {
  .logo-group {
    padding: 0 10px 40px;
  }
  .logo-item {
    padding: 0 15px;
  }
}
@media (max-width: 650px) {
  .logo-item {
    padding: 0 40px 0 0;
  }
}
</style>
