<script setup>
import gsap from 'gsap';

let ctx;

onMounted(() => {
  let el;
  ctx = gsap.context((self) => {
    scrollUpToggle('.demo-sticky', 'lock');
  });
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="demo-sticky anim-resize">
    <a href="https://app.openhome.xyz/" target="_blank" class="cta-btn rnd"
      >demo</a
    >
  </div>
</template>

<style scoped>
@media (min-width: 1025px) {
  .demo-sticky {
    position: fixed;
    right: 35px;
    bottom: 35px;
    z-index: 10;
    transform: translate(-35px, -80px);
    transition-duration: 1s;
    &.lock {
      transform: translate(0px, 0px);
    }
  }
}
@media (min-width: 1025px) and (max-width: 1200px) {
  .demo-sticky {
    transform: translate(0, -75px);
    /*     right: 35px;
    bottom: 35px; */
  }
}
@media (max-width: 1024px) {
  .demo-sticky {
    position: fixed;
    z-index: 10;
    right: 75px;
    top: 20px;
  }
  .cta-btn.rnd {
    font-size: 18px;
    border-radius: 60px;
    padding: 7px 9px;
  }
}
</style>
