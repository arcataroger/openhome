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
          //console.log(pct);
          scrollY.value = pct;
        },
      });
    }, 200);
  }, main.value);
});
onUnmounted(() => {
  riveEco.cleanup();
  ctx.revert();
});
</script>

<template>
  <div class="api section-wrapper dk pt pb-160">
    <Static />
    <div class="content-wrapper p-max">
      <header>
        <Headline theme="dk"
          ><h2>Powerful APIs for <br />Developers & Enterprises</h2></Headline
        >
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
          <CtaBtn href="https://app.openhome.xyz/" target="_blank" arrow="true"
            >Try a Demo</CtaBtn
          >
          <CtaBtn
            href="https://openhome.xyz/ecosystem-2/"
            target="_blank"
            arrow="true"
            >Explore Ecosystem</CtaBtn
          >
        </div>
      </header>
    </div>

    <!-- wave animation -->
    <div class="anim-wrap grid-cn img-ph mt-65" ref="main">
      <canvas id="rive-eco" width="1800" height="1460"></canvas>
    </div>

    <!-- capabilities -->
    <div class="content-wrapper p-max">
      <div class="capabilities">
        <!-- content row 2 col -->
        <div class="grid two-col pt">
          <div class="col pr" :class="width > 900 && 'pt-20'">
            <div class="txt-goup mx-600">
              <Headline theme="dk"><h2>Powerful Capabilities</h2></Headline>
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
