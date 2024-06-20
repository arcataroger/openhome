<script setup>
import * as rive from '@rive-app/canvas';

let main = ref();
const mouths = 3;
let mouthObjs = {};

onMounted(() => {
  let layout = new rive.Layout({
    fit: rive.Fit.Contain,
    alignment: rive.Alignment.TopCenter,
  });

  for (let i = 0; i < mouths; i++) {
    mouthObjs['mouth' + i] = new rive.Rive({
      src: '/riv/mouths.riv',
      canvas: main.value.querySelector('.rive-mouth' + (i + 1)),
      artboard: 'voice-' + (i + 1),
      stateMachines: 'voice-' + (i + 1),
      layout: layout,
      autoplay: false,
      onLoad: (_) => {
        mouthObjs['mouth' + i].resizeDrawingSurfaceToCanvas();
      },
    });
  }
});
onUnmounted(() => {
  for (let i = 0; i < mouths; i++) {
    mouthObjs['mouth' + i].cleanup();
  }
});

const togglePlay = (ev) => {
  if (ev == 'enter') {
    for (let i = 0; i < mouths; i++) {
      mouthObjs['mouth' + i].play();
    }
  } else {
    for (let i = 0; i < mouths; i++) {
      mouthObjs['mouth' + i].pause();
    }
  }
};
defineExpose({ togglePlay });
</script>

<template>
  <div class="scrolling-part" style="width: 2170px" ref="main">
    <template v-for="n in mouths">
      <div class="shape circle">
        <canvas :class="`rive-mouth${n}`" width="1800" height="1000"></canvas>
      </div>
      <div class="shape halfcirc">
        <div class="half"></div>
        <div class="half flipX"></div>
      </div>
    </template>
  </div>
</template>

<style scoped>
img {
  position: absolute;
  left: 0;
  top: 0;
  width: 2150px;
  opacity: 0.2;
}

canvas {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150%;
  transform: translate3d(-50%, -50%, 0);
}
.scrolling-part {
  --width: 370px;
  --half: calc(var(--width) / 2);
  display: flex;
  justify-content: flex-start;
  .shape {
    width: var(--width);
    height: var(--width);
    position: relative;
    z-index: 2;
    &.circle {
      background-color: var(--black);
      border-radius: 50%;
      overflow: hidden;
    }
    &.halfcirc {
      width: calc(var(--width) - 20px);
    }
  }
  .half {
    width: var(--half);
    height: var(--width);
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0 var(--half) var(--half) 0;
    background-color: var(--black);
    + .half {
      left: 50%;
      margin-left: -10px;
    }
  }
}
</style>
