<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { width, height } = useWindowSize();

/* placeholder data */
const card_data = [
  {
    id: '1',
    data: {
      image: 'home-slide1@2x.jpg',
      title: 'Unlock Human-Like Interaction',
      desc: 'With OpenHome, create organic voice AI experiences with instant response times, emotional recognition, conversation paths, and opinions of their own. With OpenHome, create organic voice AI experiences with instant response times, emotional recognition, conversation paths, and opinions of their own.',
    },
  },
  {
    id: '2',
    data: {
      image: 'home-slide2@2x.jpg',
      title: 'Open Source, Unlimited Potential',
      desc: 'Revolutionize your company or product with Voice AI powered by our Open Source Voice SDK. For Startups & Developers - Get started Instantly with our Open Source SDK. For Enterprises. Talk with our team about advanced Enterprise Applications.',
    },
  },
  {
    id: '3',
    data: {
      image: 'home-slide3@2x.jpg',
      title: 'Customize Like Never Before',
      desc: 'Within minutes, you can build AI personalities that are as vibrant and interactive as real humans. Customize their voice, conversation style, capabilities, tone, and much more. Our beginner-friendly UI allows anyone to create a unique Voice AI personality swiftly—no coding required!',
    },
  },
  {
    id: '4',
    data: {
      image: 'home-slide4@2x.jpg',
      title: 'Empathy and Understanding',
      desc: "Our AI doesn't just understand commands; it interprets emotional expressions and generates empathic responses, setting a new standard for natural and engaging AI communication.",
    },
  },
];

let ctx;
const main = ref();

onMounted(() => {
  let el;
  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray('.card');
    cards.forEach((card, i) => {
      gsap.set(card, { position: 'absolute', zIndex: cards.length - i });
    });

    setTimeout(function () {
      gsap.to('.slide-off', {
        yPercent: -100,
        stagger: 0.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: '.cards',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: '.home-slider',
        start: 'top top',
        end: '+=200%',
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
      });
    }, 200);
  }, main.value);
});
</script>

<template>
  <div
    ref="main"
    class="home-slider section-wrapper lt gridlines col-vpad"
    :class="width <= 900 && 'stack'"
  >
    <Gridlines />

    <div class="cards">
      <div class="content-wrapper no-max">
        <div class="grid two-col mx-1600 auto">
          <div class="col pad flex-cn">
            <div class="txt-grp mx-600">
              <h2>Build your ideal smart speaker experience.</h2>
            </div>
          </div>
          <div class="col nopad">
            <HomeCard
              v-for="(card, key) in card_data"
              :data="card.data"
              :class="key < card_data.length - 1 && 'slide-off'"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="slide-nav"></div>
  </div>
</template>

<style scoped>
.cards {
  height: 100vh;
  width: 100%;
  position: relative;
  .content-wrapper,
  .grid {
    height: 100%;
  }
}
/* @media (min-width: 1025px) {
  .home-slider {
    .col.pad {
      padding-top: 5.9375rem;
      padding-bottom: 5.9375rem;
    }
  }
} */
/* @media (min-width: 551px) and (max-width: 1024px) {
  .home-slider {
    .col.pad {
      padding-top: var(--side-marginM);
      padding-bottom: var(--side-marginM);
    }
  }
} */
/* @media (max-width: 768px) {
  .home-slider {
    img {
      width: 70%;
    }
    img + h3 {
      margin-top: 20px;
    }
  }
}
@media (max-width: 550px) {
  .home-slider h2 {
    padding-top: 10px;
  }
} */

/* .card {
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  position: relative;
  left: 0;
  top: 0;
  font-size: 100px;
  color: #fff;
  &:nth-child(1) {
    background-color: red;
  }
  &:nth-child(2) {
    background-color: blue;
  }
  &:nth-child(3) {
    background-color: green;
  }
}

.section {
  position: relative;
  width: 100%;
  height: 100vh;
}
.over-section {
  position: relative;
  z-index: 20;
  margin-top: -100vh;
  .card {
    background-color: purple;
  }
} */
</style>
