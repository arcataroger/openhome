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
  /*{
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
  }, */
];

let ctx;
let tl;
let nav;
let items;
const main = ref();

onMounted(() => {
  nav = document.querySelector('.slide-nav');
  items = nav.querySelectorAll('a');

  let el;
  ctx = gsap.context((self) => {
    const cards = gsap.utils.toArray(self.selector('.card'));
    cards.forEach((card, i) => {
      //gsap.set(card, { position: 'absolute', zIndex: cards.length - i });
      gsap.set(card, { position: 'absolute', zIndex: i });
    });

    // setup controller for slider timeline
    setTimeout(function () {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cards',
          start: 'top top',
          end: 'bottom+=100px' /* add back 0 */,
          scrub: true,
        },
      });

      // add card animations to timeline
      const sliders = gsap.utils.toArray(self.selector('.slide-on'));
      const sp = 0.5;
      const stag = 0.05;
      const dif = 50;
      const easer = 'power3.out';

      sliders.forEach((slider, i) => {
        tl.call(updateNav, [i]);
        const parts = slider.querySelectorAll('.anim-part');
        if (i > 0) {
          tl.fromTo(
            parts,
            { opacity: 0, y: dif },
            {
              duration: sp,
              stagger: stag,
              opacity: 1,
              y: 0,
              ease: easer,
            }
          );
        }
        if (i < sliders.length - 1) {
          tl.to(parts, {
            duration: sp,
            stagger: 0.1,
            opacity: 0,
            y: -dif,
            ease: 'power3.in',
          });
        }
      });

      // lock in place, set for next section cover up
      ScrollTrigger.create({
        trigger: '.home-slider',
        start: 'top top',
        end: 'bottom+=200px' /* add back 0 */,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: true,
      });
    }, 200);
  }, main.value);
});

const updateNav = (id) => {
  items.forEach((item, i) => {
    item.classList.remove('on');
    //console.log(i + '/' + id);
    if (i == id) {
      item.classList.add('on');
    }
  });
};
const changeSlider = (id) => {
  console.log('change ' + id);
};
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
              <Headline>Build your ideal smart speaker experience.</Headline>
            </div>
          </div>
          <div class="col nopad oh">
            <HomeCard
              v-for="(card, key) in card_data"
              :data="card.data"
              :class="key >= 0 && 'slide-on'"
            />
          </div>
        </div>
      </div>

      <div class="slide-nav h-md">
        <ul>
          <li v-for="(card, key) in card_data">
            <a
              href="#"
              :class="key == 0 && 'on'"
              @click.prevent="changeSlider(key + 1)"
              >{{ key + 1 }}</a
            >
          </li>
        </ul>
      </div>
    </div>
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
.slide-nav {
  position: absolute;
  right: 40px;
  top: 95px;
  z-index: 10;
  ul {
    list-style: none;
  }
  li + li {
    margin-top: -5px;
  }
  a {
    font-size: 35px;
    color: var(--gray);
    text-align: center;
    &.on {
      color: var(--black);
    }
  }
}
@media (min-width: 1025px) {
  .slide-nav a:hover {
    color: var(--black);
  }
}
</style>
