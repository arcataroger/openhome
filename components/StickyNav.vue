<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';
import { useScroll } from '@vueuse/core';

const { width, height } = useWindowSize();
const { y, isScrolling, directions } = useScroll(window);
const sticky = ref(null);

onMounted(() => {
  // set sticky as hidden
  gsap.set(sticky.value, { yPercent: -100 });

  // listen for scroll up
  document.addEventListener('scroll', setSticky);
});
onUnmounted(() => {
  document.removeEventListener('scroll', setSticky);
});

// toggle sticky
const setSticky = () => {
  // show sticky on scroll up if scrolled past 100px
  if (directions.top && y.value > height.value) {
    if (!sticky.value.classList.contains('on')) {
      sticky.value.classList.add('on');
      gsap.killTweensOf(sticky.value);
      gsap.to(sticky.value, {
        duration: 0.75,
        yPercent: 0,
        ease: 'power3.out',
      });
    }

    // hide sticky on scroll down
  } else if (sticky.value.classList.contains('on')) {
    sticky.value.classList.remove('on');
    let easer = 'back.in';
    let sp = 0.5;

    // move faster if at top to avoid overlap
    if (y.value <= height.value) {
      easer = 'quad.out';
      sp = 0.35;
    }

    gsap.killTweensOf(sticky.value);
    gsap.to(sticky.value, {
      duration: sp,
      yPercent: -100,
      ease: easer,
    });
  }
};
</script>

<template>
  <div class="sticky-nav set-theme dk hpad" ref="sticky">
    <HeaderParts sticky="true" />
  </div>
</template>

<style scoped>
.sticky-nav {
  background-color: var(--black);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 65px;
  z-index: 21;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 20px;
    top: -20px;
    background-color: var(--black);
  }
  .content-wrapper {
    margin-top: -21px;
  }
}
</style>
