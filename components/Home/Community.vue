<script setup>
import { useWindowSize } from '@vueuse/core';
import gsap from 'gsap';
const { width, height } = useWindowSize();

let ctx;
let tl;
const scrollSp = 15;
const main = ref();

onMounted(() => {
  let el;
  ctx = gsap.context((self) => {
    tl = gsap.timeline({
      repeat: -1,
      paused: true,
    });

    // timeline container
    el = self.selector('.scrolling-wrap');

    tl.set(el, { xPercent: -50 });
    tl.to(el, {
      duration: scrollSp,
      xPercent: 0,
      ease: 'none',
    });
  }, main.value);

  // trigger timeline when in viewport
  setTimeout(function () {
    playInView(el, tl);
  }, 200);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="community section-wrapper lt pt">
    <div class="content-wrapper p-max has-br">
      <header>
        <Headline><h2>Join the OpenHome Community</h2></Headline>
        <p>
          Ready to redefine the boundaries of voice AI? Join OpenHome today and
          be part of the <br />community that’s setting the tone for tomorrow's
          AI innovations. Where will your <br />imagination take you? Let
          OpenHome be the launchpad for your voice AI journey.
        </p>
        <CtaBtn href="#" arrow="true">Join the Community</CtaBtn>
      </header>
    </div>

    <!-- shapes animation -->
    <div class="anim-wrap img-ph mt-65 grid-cn" ref="main">
      <div class="scrolling-wrap" style="width: 4300px">
        <div class="scrolling-part" style="width: 2150px">
          <img src="~/assets/img/home-community-ph@2x.png" />
        </div>
        <div class="scrolling-part" style="width: 2150px">
          <img src="~/assets/img/home-community-ph@2x.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrolling-wrap {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  height: 100%;
}
.community {
  --baseH: 370px;
}
.anim-wrap {
  margin-top: 55px;
  height: var(--baseH);
  transform-origin: left top;
}

@media (max-width: 1400px) {
  .anim-wrap {
    transform: scale(0.8);
    height: calc(var(--baseH) * 0.8);
  }
}
@media (max-width: 1024px) {
  .anim-wrap {
    transform: scale(0.6);
    height: calc(var(--baseH) * 0.6);
  }
}
@media (max-width: 768px) {
  .anim-wrap {
    display: block;
    margin-top: 45px;
    transform: scale(0.48);
    height: calc(var(--baseH) * 0.48);
    /*  height: 175px; */
  }
}
</style>
