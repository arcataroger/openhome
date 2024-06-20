<script setup>
import { useWindowSize } from '@vueuse/core';
import * as rive from '@rive-app/canvas';
const { width, height } = useWindowSize();

// Rive Animation ******************************

let riveHero;
let rivePlaying = false;

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
    autoplay: true,
    onLoad: (_) => {
      riveHero.resizeDrawingSurfaceToCanvas();
      rivePlaying = true;
    },
  });
});
onUnmounted(() => {
  riveHero.cleanup();
});
const stopRive = () => {
  rivePlaying = !rivePlaying;
  if (rivePlaying) {
    rivePlaying = true;
    riveHero.play();
  } else {
    rivePlaying = false;
    riveHero.pause();
  }
};
</script>

<template>
  <div class="hero section-wrapper dk bgtexture">
    <!-- <Fuzz /> -->
    <!-- <PixelBg /> -->

    <div class="content-wrapper p-max has-br">
      <header :class="width <= 650 && 'txt-lt'">
        <Headline type="hero"><h1>Your Own AI Smart Speaker</h1></Headline>
        <p>
          OpenHome’s open-source Voice SDK empowers you to launch your
          personalized <br />AI-powered smart speaker on any platform or custom
          hardware in minutes.
        </p>
      </header>
    </div>

    <!-- wave animation -->
    <div class="anim-wrap img-ph grid-cn" @click="stopRive">
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
