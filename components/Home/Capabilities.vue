<script setup>
import { useWindowSize } from '@vueuse/core';
import * as rive from '@rive-app/canvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const { width, height } = useWindowSize();

const main = ref();
let ctx;

let riveEco;
let scrollY;
let riveScrollInputs;

onMounted(() => {
  let layout = new rive.Layout({
    fit: rive.Fit.Contain,
    alignment: rive.Alignment.TopCenter,
  });

  // setup instance
  riveEco = new rive.Rive({
    src: '/riv/500-api-scroll.riv',
    canvas: document.getElementById('rive-eco'),
    artboard: '500-api-scroll',
    stateMachines: '500-api-scroll',
    layout: layout,
    autoplay: true,
    onLoad: (_) => {
      riveEco.resizeDrawingSurfaceToCanvas();
      riveScrollInputs = riveEco.stateMachineInputs('500-api-scroll');
      scrollY = riveScrollInputs.find((i) => i.name === 'scroll'); // change as an eased value
    },
  });

  // add gsap scrolltrigger
  ctx = gsap.context((self) => {
    setTimeout(function () {
      ScrollTrigger.create({
        trigger: main.value,
        start: 'top 95%',
        end: 'bottom 80%',
        scrub: true,
        onUpdate: (self) => {
          const pct = self.progress.toFixed(3) * 100;
          console.log(pct);
          scrollY.value = pct;
        },
      });
    }, 200);
  }, main.value);

  /*   const api = document.querySelector('.api');
  api.addEventListener('mousewheel', function (e) {
    // Cross-browser wheel delta
    var delta = (e.wheelDelta || -e.deltaY) / 6;

    totalScroll += delta;
    if (totalScroll >= 0) {
      totalScroll = 0;
    }

    scrolledRiveVar = totalScroll * -0.145;

    if (scrolledRiveVar >= 100) {
      scrolledRiveVar = 100;
    }
    scrollY.value = scrolledRiveVar;

    console.log(scrolledRiveVar);
  }); */
});
onUnmounted(() => {
  riveEco.cleanup();
  ctx.revert();
});
</script>

<template>
  <div class="api section-wrapper bgtexture dk pt pb-160">
    <div class="content-wrapper p-max">
      <header>
        <Headline>Powerful APIs for <br />Developers & Enterprises</Headline>
        <p class="mx-1100 auto">
          Easy to use, powerful tools for complex tasks. Our platform includes
          comprehensive APIs for speech-to-text, text-to-speech, and language
          understanding. Whether it's for medical transcription or creating
          autonomous agents, OpenHome is the trusted choice for developers
          looking to push the boundaries of what voice AI can do.
        </p>
        <div
          class="cta-group mt-20"
          :class="width <= 550 && 'grid two-col gap'"
        >
          <CtaBtn href="#" arrow="true">Try a Demo</CtaBtn>
          <CtaBtn href="#" arrow="true">Explore Ecosystem</CtaBtn>
        </div>
      </header>
    </div>

    <!-- wave animation -->
    <div class="anim-wrap grid-cn img-ph mt-65" ref="main">
      <canvas id="rive-eco" width="1800" height="1460"></canvas>
      <!-- <img src="~/assets/img/home-api-ph.png" /> -->
    </div>

    <!-- capabilities -->
    <div class="content-wrapper p-max">
      <div class="capabilities">
        <!-- giant text -->
        <!--         <div class="callout-txt-lg">500+</div>
 -->
        <!-- content row 2 col -->
        <div class="grid two-col pt">
          <div class="col pr" :class="width > 900 && 'pt-65'">
            <div class="txt-goup mx-600">
              <Headline>Powerful Capabilities</Headline>
              <p>
                With over 500 +With features that support a wide range of
                applications—from medical transcription to smart home
                integration—OpenHome sets the stage for a future where AI is
                seamlessly integrated into everyday life.
              </p>
              <CtaBtn href="#" arrow="true">Browse more Capabilities</CtaBtn>
            </div>
          </div>
          <div class="col pl">
            <IconList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
canvas {
  width: 100%;
  position: relative;
}
</style>
