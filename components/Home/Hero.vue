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
let ctx;
let riveHero;
let tl;

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
      playInView(el, '', toggleRive, 500);
    }, 200);
  }, main.value);

  // mask hero wave on scroll
  tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: main.value,
        start: 'top top',
        end: '+=50%',
        scrub: true,
        pin: true,
      },
    })
    .to(main.value, {
      yPercent: 15, // make dynamic
      clipPath: 'inset(28% 11% round 366px)',
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
        yPercent: -40,
      },
      0
    );

  // trigger headline just before mask animation complete
  tl.add(openHL, tl.duration() - 0.25);

  // pin intro section separate
  ScrollTrigger.create({
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
const openHL = () => {
  hl.value.openAnim();
};
</script>

<template>
  <!-- hero -->
  <div class="hero section-wrapper dk" ref="main">
    <!-- <PixelBg /> -->
    <Static offset="500" />

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
    <div class="anim-wrap img-ph grid-cn" ref="wave">
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
        <Headline theme="lt" auto="false" ref="hl"
          ><h2>Welcome to a New Era <br />of Interaction.</h2>
        </Headline>
      </header>
      <div class="img-ph intro-wave mt-65 auto">
        <!--         <img src="~/assets/img/welcome-wave.png" />
 -->
      </div>
      <div class="txt-grp mt-65 mx-1100 auto fade-on">
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
        class="cta-group grid two-col gap mt-65 fade-on"
        :class="width > 550 && 'nobr'"
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
.hero {
  min-height: 100vh;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
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
.intro {
  .intro-wave {
    max-width: 1400px;
    border-radius: 365px;
    overflow: hidden;
    aspect-ratio: 3.45 / 1;
  }
}
@media (max-width: 1400px) {
  .hero {
    .anim-wrap {
      margin-top: 50px;
    }
  }
}
</style>
