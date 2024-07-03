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

  ctx = gsap.context((self) => {
    // play/pause rive animation
    let hero_el = self.selector('.anim-wrap');

    setTimeout(() => {
      // trigger hero animation
      playInView(hero_el, null, toggleRive, 500);

      // trigger intro animation for mobile
      mm.add('(max-width: ' + mob_maxw + 'px)', () => {
        playInView(wave2.value, null, toggleRive2);
      });
    }, 200);

    // morph hero wave into pill shape with scroll
    setTimeout(() => {
      mm.add('(min-width: ' + minw + 'px)', () => {
        tl = gsap
          .timeline({
            scrollTrigger: {
              id: 'hero-morph',
              invalidateOnRefresh: true,
              trigger: main.value,
              start: 'top top',
              end: '+=50%',
              scrub: true,
              pin: true,
            },
          })

          // clip from edges, position y to match pill proxy
          .to(main.value, {
            y: () => getShapeOffsetY(),
            clipPath: () => getShapeBounds(),
            ease: 'power3.out',
          })

          // fade out hero contents
          .to(
            hero.value,
            {
              duration: 0.2,
              opacity: 0,
            },
            0
          )

          // move wave to center vertically and scale down
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
            // show intro body contents after in place
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

// animation controllers
const toggleRive = (ev) => {
  ev == 'enter' ? riveHero.play() : riveHero.pause();
};
const toggleRive2 = (ev) => {
  ev == 'enter' ? riveIntro.play() : riveIntro.pause();
};
const openHL = () => {
  hl.value.openAnim();
};

// calculations for hero to morph and resize into pill shape
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
  const wavetop = wave.value.offsetTop;
  const h = wave.value.offsetHeight;
  const center = height.value / 2 - h / 2;
  const dif = wavetop - center;
  return -dif;
};
</script>

<template>
  <!-- hero -->
  <div class="hero section-wrapper dk" ref="main">
    <div class="content-wrapper p-max has-br" ref="hero">
      <header :class="width <= 650 && 'txt-lt'">
        <Headline type="hero" theme="dk"
          ><h1>Your Custom <br />AI Voice Interface</h1></Headline
        >
        <p>
          AI Voice Control for Every Device: Effortlessly Integrate OpenHome’s
          Conversational Voice SDK on Any Platform
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
        <Headline
          theme="lt"
          :auto="width > 1024 && 'false'"
          ref="hl"
          :off="width <= 768 && 'true'"
        >
          <h2>Empowering Seamless AI Driven Dialogue</h2>
        </Headline>
      </header>
      <div class="intro-wave auto boost" ref="wave2">
        <canvas
          v-show="width <= 1024"
          id="rive-intro"
          width="1800"
          height="1000"
        ></canvas>
      </div>
      <div
        class="txt-grp mt-65 mx-1100 auto"
        :class="width > 1024 && 'fade-on'"
      >
        <h3>Bring AI to Life, Everywhere!</h3>
        <p>
          OpenHome is a revolutionary LLM-driven smart speaker that transforms
          how you interact with technology. Our innovative Voice SDK enables any
          device to become smart, allowing you to have natural, seamless
          conversations with your devices. Experience a future where technology
          is more accessible and intuitive, powered by real-time, conversational
          AI.
        </p>
      </div>
      <div
        class="cta-group grid two-col gap mt-65"
        :class="(width > 550 && 'nobr', width > 1024 && 'fade-on')"
      >
        <CtaBtn
          href="https://blog.openhome.xyz/introducing-50000-developer-grant-program"
          arrow="true"
          target="_blank"
          >developers</CtaBtn
        >
        <CtaBtn
          href="/downloads/OpenHome_Enterprise_Overview.pdf"
          target="_blank"
          arrow="true"
          >enterprise</CtaBtn
        >
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
    height: 100vh;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
  }
  .intro {
    .intro-wave {
      height: 488px;
    }
  }
}
.hero {
  padding-top: var(--hero-margintop);
  .content-wrapper {
    margin-bottom: 50px;
  }
  .anim-wrap {
    aspect-ratio: 4.5 / 1;
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
  }
}
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
      aspect-ratio: 3.45 / 1;
    }
  }
}
@media (max-width: 768px) {
  .hero {
    padding-top: var(--hero-margintopM);
  }
}
@media (max-width: 550px) {
  .intro {
    header {
      margin-bottom: 25px;
    }
  }
}

/* short desktop */
@media (min-width: 1201px) and (max-height: 800px) {
  .hero {
    padding-top: 120px;
    h1 {
      font-size: 90px;
    }
  }
}
</style>
