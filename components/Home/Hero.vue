<script setup>
import { useWindowSize } from '@vueuse/core';
import * as rive from '@rive-app/canvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const { width, height } = useWindowSize();
const main = ref(null);
const hl = ref(null);
const hero = ref(null);
const wave = ref(null);
const wave2 = ref(null);
let ctx;
let riveHero;
let riveIntro;
let tl;

let mm = gsap.matchMedia();
const minw = 1025;
const mob_maxw = 1024;

onMounted(() => {
  // rive animation setup
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

  riveIntro = new rive.Rive({
    src: '/riv/mouths.riv',
    canvas: document.getElementById('rive-intro'),
    artboard: 'voice-all',
    stateMachines: 'voice-all',
    layout: layout,
    autoplay: false,
    onLoad: (_) => {
      riveIntro.resizeDrawingSurfaceToCanvas();
    },
  });

  // trigger animation when in viewport
  ctx = gsap.context((self) => {
    // play/pause rive animation
    let hero_el = self.selector('.anim-wrap');
    setTimeout(() => {
      playInView(hero_el, null, toggleRive, 500);

      mm.add('(max-width: ' + mob_maxw + 'px)', () => {
        playInView(wave2.value, null, toggleRive2);
      });
    }, 200);

    // match media wrapper
    setTimeout(() => {
      mm.add('(min-width: ' + minw + 'px)', () => {
        //console.log('morph');
        // morph hero wave on scroll
        tl = gsap
          .timeline({
            scrollTrigger: {
              id: 'hero-morph',
              trigger: main.value,
              start: 'top top',
              end: '+=50%',
              scrub: true,
              pin: true,
            },
          })
          .to(main.value, {
            //yPercent: 15, // make dynamic
            y: () => getShapeOffsetY(),
            clipPath: () => getShapeBounds(),
            ease: 'power3.out',
          })
          .to(
            hero.value,
            {
              duration: 0.2,
              opacity: 0,
            },
            0
          )
          .to(
            wave.value,
            {
              duration: 0.2,
              y: () => getWaveY(),
              scale: 0.85,
            },
            0
          );

        // trigger headline just before mask animation complete
        tl.add(openHL, tl.duration() - 0.25);

        // pin intro section separate
        ScrollTrigger.create({
          id: 'intro-morph',
          trigger: '.intro',
          start: 'top top',
          end: '+=50%',
          scrub: true,
          pin: true,
          onLeave: () => {
            gsap.to('.fade-on', { duration: 1, opacity: 1 });
          },
        });
      });
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  riveHero.cleanup();
  ctx.revert();
});

const toggleRive = (ev) => {
  ev == 'enter' ? riveHero.play() : riveHero.pause();
};
const toggleRive2 = (ev) => {
  ev == 'enter' ? riveIntro.play() : riveIntro.pause();
};
const openHL = () => {
  hl.value.openAnim();
};

const endH = 488;
const getShapeBounds = () => {
  const osH = (height.value - endH) / 2;
  let osW = 70;
  if (width.value > 1200) {
    osW = 120;
  }
  return `inset(${osH}px ${osW}px round 366px)`;
};
const getShapeOffsetY = () => {
  const osH = (height.value - endH) / 2;
  const top = wave2.value.getBoundingClientRect().top;
  const osY = top - osH;
  return osY;
};
const getWaveY = () => {
  const top = wave.value.getBoundingClientRect().top;
  const h = wave.value.offsetHeight;
  const center = height.value / 2 - h / 2;
  const dif = top - center;
  return -dif;
};
</script>

<template>
  <!-- hero -->
  <div class="hero section-wrapper dk" ref="main" @click="toggleRive">
    <div class="content-wrapper p-max has-br" ref="hero">
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
    <div class="anim-wrap grid-cn" ref="wave">
      <canvas id="rive-hero" width="1800" height="1000"></canvas>
    </div>

    <!-- logos -->
    <LogoGroup />
  </div>

  <!-- intro section -->
  <div class="intro section-wrapper lt gridlines np-bot">
    <Gridlines />
    <div class="content-wrapper p-max pt-65 pb-65 txt-cn">
      <header>
        <Headline theme="lt" :auto="width > 1024 && 'false'" ref="hl"
          ><h2>Welcome to a New Era <br />of Interaction.</h2>
        </Headline>
      </header>
      <div class="intro-wave auto boost" ref="wave2">
        <canvas
          v-show="width <= 1024"
          id="rive-intro"
          width="1800"
          height="1000"
        ></canvas>
        <!--         <img src="~/assets/img/welcome-wave.png" style="opacity: 0.5" />
 -->
      </div>
      <div
        class="txt-grp mt-65 mx-1100 auto"
        :class="width > 1024 && 'fade-on'"
      >
        <h3>Bring AI to Life, Everywhere!</h3>
        <p>
          OpenHome is not a piece of smart technology, it's the core of an
          intelligent companionship that evolves with you. Our AI personalities
          engage, learn your voice, sense your feelings, empathize, and
          anticipate your needs.
        </p>
        <p>
          Craft your ideal companion. Customize the voice, tone, style, and even
          the sense of humor of your AI. With OpenHome, you create more than a
          smart speaker; you bring to life an entity that is uniquely yours.
        </p>
      </div>
      <div
        class="cta-group grid two-col gap mt-65"
        :class="(width > 550 && 'nobr', width > 1024 && 'fade-on')"
      >
        <CtaBtn href="#" arrow="true">developers</CtaBtn>
        <CtaBtn href="#" arrow="true">investors</CtaBtn>
      </div>
    </div>
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
@media (min-width: 1025px) {
  .hero {
    min-height: 100vh;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
  }
}
.hero {
  /* opacity: 0.7; */
  .content-wrapper {
    margin-bottom: 50px;
  }
  .anim-wrap {
    aspect-ratio: 4.5 / 1;
    /* margin-top: 50px; */
    z-index: 0;
  }
}
.content-wrapper {
  z-index: 1;
}
.intro {
  header {
    margin-bottom: 60px;
  }
  .intro-wave {
    max-width: 1400px;
    border-radius: 365px;
    overflow: hidden;
    height: 488px;
    /* aspect-ratio: 2.88/1; */
    /* background-color: red; */
  }
}
/* @media (max-width: 1400px) {
  .hero {
    .anim-wrap {
      margin-top: 50px;
    }
  }
} */
@media (max-width: 1200px) {
  .intro {
    header {
      margin-bottom: 40px;
    }
  }
}
@media (max-width: 1024px) {
  .intro {
    .intro-wave {
      background-color: var(--black);
    }
  }
}
</style>
