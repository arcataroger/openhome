<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
const { width, height } = useWindowSize();

onMounted(() => {
  const cards = gsap.utils.toArray('.card');
  cards.forEach((card, i) => {
    gsap.set(card, { position: 'absolute', zIndex: cards.length - i });
  });

  setTimeout(function () {
    gsap.to('.mover', {
      yPercent: -100,
      stagger: 0.5,
      ease: 'quad.inOut',
      scrollTrigger: {
        trigger: '.home-slider',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  }, 200);
});
</script>

<template>
  <div
    class="home-slider section-wrapper lt gridlines col-vpad"
    :class="width <= 900 && 'stack'"
  >
    <Gridlines />

    <div class="content-wrapper no-max tester">
      <div class="grid two-col mx-1600 auto">
        <div class="col pad flex-cn">
          <div class="txt-grp mx-600">
            <h2>Build your ideal smart speaker experience.</h2>
          </div>
        </div>

        <div class="col nopad cards">
          <div class="spacer"></div>
          <HomeCard class="mover" />
          <HomeCard class="mover" />
          <HomeCard />
        </div>
      </div>

      <div class="slide-nav">1 2 3 4</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
}
.spacer {
  width: 100%;
  height: 100vh;
}
.slide-nav {
  position: absolute;
  right: 0;
  top: 0;
}
@media (min-width: 1025px) {
  .home-slider {
    .col.pad {
      padding-top: 5.9375rem;
      padding-bottom: 5.9375rem;
    }
  }
}
@media (min-width: 551px) and (max-width: 1024px) {
  .home-slider {
    .col.pad {
      padding-top: var(--side-marginM);
      padding-bottom: var(--side-marginM);
    }
  }
}
</style>
