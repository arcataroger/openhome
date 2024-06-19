<script setup>
import { useWindowSize } from '@vueuse/core';
import * as rive from '@rive-app/canvas';
const { width, height } = useWindowSize();

// Rive Animation ******************************

/* let layoutCover = new rive.Layout({
  fit: rive.Fit.Cover,
  alignment: rive.Alignment.CenterCenter,
}); */

let riveHero;
let rivePlaying = false;

onMounted(() => {
  let layout = new rive.Layout({
    fit: rive.Fit.Contain,
    alignment: rive.Alignment.TopCenter,
  });

  riveHero = new rive.Rive({
    src: '/riv/mouth_all.riv',
    canvas: document.getElementById('rive-test'),
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
    console.log('play');
    rivePlaying = true;
    riveHero.play();
  } else {
    console.log('stop');
    rivePlaying = false;
    riveHero.pause();
  }
};

/* let cols;
let rows;
let total;
let pixelw = 200;

cols = Math.floor(width.value / pixelw);
rows = Math.floor(width.value / pixelw);
total = (cols + 1) * (rows + 1);
console.log(total); */
</script>

<template>
  <div class="hero section-wrapper dk bgtexture">
    <!-- <Fuzz /> -->
    <!--     <div class="pixel-grid">
      <div class="pixel-gif" v-for="n in total"></div>
    </div> -->

    <div class="content-wrapper p-max has-br">
      <header :class="width <= 650 && 'txt-lt'">
        <h1>Your Own AI Smart Speaker</h1>
        <p>
          OpenHome’s open-source Voice SDK empowers you to launch your
          personalized <br />AI-powered smart speaker on any platform or custom
          hardware in minutes.
        </p>
      </header>
    </div>

    <!-- wave animation -->
    <div class="anim-wrap img-ph grid-cn" @click="stopRive">
      <canvas id="rive-test" width="1800" height="1000"></canvas>
    </div>

    <!-- logos -->
    <LogoGroup />
  </div>
</template>

<style scoped>
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
.pixel-grid {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: start;
  align-items: start;
}
.pixel-gif {
  width: 200px;
  height: 200px;
  background-image: url('/pixel-gif.gif');
  background-size: 200px 200px;
}
</style>
