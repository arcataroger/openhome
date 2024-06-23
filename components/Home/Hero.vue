<script setup>
import { useWindowSize } from '@vueuse/core';
import * as rive from '@rive-app/canvas';
import gsap from 'gsap';

const { width, height } = useWindowSize();
const main = ref(null);
let ctx;
let riveHero;

onMounted(() => {
  let layout = new rive.Layout({
    fit: rive.Fit.Contain,
    alignment: rive.Alignment.TopCenter,
  });

  riveHero = new rive.Rive({
    src: '/riv/mouths.riv',
    canvas: document.getElementById('rive-hero'),
    artboard: 'voice-all',
    stateMachines: 'voice-all',
    layout: layout,
    autoplay: false,
    onLoad: (_) => {
      riveHero.resizeDrawingSurfaceToCanvas();
    },
  });

  // trigger animation when in viewport
  ctx = gsap.context((self) => {
    let el = self.selector('.anim-wrap');
    setTimeout(() => {
      playInView(el, '', toggleRive);
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  riveHero.cleanup();
  ctx.revert();
});

const toggleRive = (ev) => {
  if (ev == 'enter') {
    riveHero.play();
  } else {
    riveHero.pause();
  }
};
</script>

<template>
  <div class="hero section-wrapper dk bgtexture" ref="main">
    <!-- <Fuzz /> -->
    <PixelBg />

    <div class="content-wrapper p-max has-br">
      <header :class="width <= 650 && 'txt-lt'">
        <Headline type="hero" theme="dk"
          ><h1>Your Own AI Smart Speaker</h1></Headline
        >
        <p>
          OpenHome’s open-source Voice SDK empowers you to launch your
          personalized <br />AI-powered smart speaker on any platform or custom
          hardware in minutes.
        </p>
      </header>
    </div>

    <!-- wave animation -->
    <div class="anim-wrap img-ph grid-cn">
      <canvas id="rive-hero" width="1800" height="1000"></canvas>
    </div>

    <!-- logos -->
    <LogoGroup />
  </div>
</template>

<style scoped>
canvas {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate3d(-50%, -50%, 0);
}
.hero {
  .anim-wrap {
    aspect-ratio: 4.5 / 1;
    margin-top: 125px;
    margin-top: 4%;
    z-index: 0;
  }
}
.content-wrapper {
  z-index: 1;
}
@media (max-width: 1400px) {
  .hero {
    .anim-wrap {
      margin-top: 50px;
    }
  }
}
</style>
