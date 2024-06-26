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
let tl;
let nav;
let items;
const main = ref();

onMounted(() => {
  nav = document.querySelector('.slide-nav');
  items = nav.querySelectorAll('a');

  ctx = gsap.context((self) => {
    // prep cards to stack
    const cards = gsap.utils.toArray(self.selector('.card'));
    cards.forEach((card, i) => {
      gsap.set(card, { position: 'absolute', zIndex: i });
    });

    setTimeout(function () {
      // setup controller to play slider timeline
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cards',
          start: 'top 20%',
          end: () => 'bottom+=' + height.value,
          scrub: true,
        },
      });

      // add card animations to timeline
      const sliders = gsap.utils.toArray(self.selector('.slide-on'));
      sliders.forEach((slider, i) => {
        // update nav
        tl.call(updateNav, [i]);

        // animate on
        const parts = slider.querySelectorAll('.anim-part');
        tl.fromTo(
          parts,
          {
            opacity: 1,
            y: 100,
            xPercent: 120,
            rotation: 30,
            visibility: 'hidden',
          },
          {
            duration: 1,
            stagger: 0.05,
            opacity: 1,
            visibility: 'visible',
            y: 0,
            xPercent: 0,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            ease: 'power3.out',
          }
        );

        // place label when card is in place for jump to button
        tl.addLabel('stop' + i, '>');

        // animate off
        if (i < sliders.length - 1) {
          tl.to(parts, {
            duration: 0.5,
            stagger: 0.1,
            opacity: 0,
            xPercent: -100,
            y: -100,
            rotation: -30,
            ease: 'power3.in',
          });
        }

        // update nav in reverse
        tl.call(updateNav, [i]);
      });

      // lock in place, set for next section cover up
      ScrollTrigger.create({
        trigger: '.home-slider',
        start: 'top top',
        end: () => 'bottom+=' + height.value * 2,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: true,
      });
    }, 200);
  }, main.value);
});
onUnmounted(() => {
  ctx.revert();
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
  //console.log('change ' + id);
  let scrollPos = labelToScroll(tl, 'stop' + id);
  gsap.to(window, { duration: 2, scrollTo: scrollPos, ease: 'power3.out' });
};
</script>

<template>
  <div
    ref="main"
    class="home-slider section-wrapper lt gridlines col-vpad np-top"
    :class="width <= 900 && 'stack'"
  >
    <Gridlines />

    <div class="cards">
      <div class="content-wrapper no-max">
        <div class="grid two-col mx-1600 auto">
          <div class="col pad flex-cn">
            <div class="txt-grp mx-600">
              <Headline
                ><h2>Build your ideal smart speaker experience.</h2></Headline
              >
            </div>
          </div>
          <div class="col nopad" :class="width > 900 && 'hid'">
            <HomeCard
              v-for="(card, key) in card_data"
              :data="card.data"
              :data-num="key"
              :class="key >= 0 && 'slide-on'"
            />
            <div v-if="width <= 900" class="slide-nav h-md mobile">
              <ul>
                <li v-for="(card, key) in card_data">
                  <a href="#" @click.prevent="changeSlider(key)">{{
                    key + 1
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div v-if="width > 900" class="slide-nav h-md">
        <ul>
          <li v-for="(card, key) in card_data">
            <a href="#" @click.prevent="changeSlider(key)">{{ key + 1 }}</a>
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
  top: 5.9375rem;
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
@media (min-width: 1301px) and (max-width: 1500px) {
  h2 {
    font-size: 100px;
  }
}
@media (min-width: 1101px) and (max-width: 1300px) {
  h2 {
    font-size: 90px;
  }
}
@media (min-width: 1025px) and (max-width: 1100px) {
  h2 {
    font-size: 70px;
  }
}
@media (max-width: 1200px) {
  .slide-nav {
    top: var(--grid-marginM);
    right: 65px;
    li + li {
      margin-top: 5px;
    }
  }
}
@media (max-width: 1024px) {
  .slide-nav {
    right: 33px;
  }
}
@media (max-width: 900px) {
  .cards {
    .grid {
      display: block;
    }
    h2 {
      padding-right: 35px;
    }
  }
  .slide-nav {
    top: 15px;
    right: 65px;
  }
}
@media (max-width: 768px) {
  .slide-nav {
    right: 43px;
  }
}
@media (max-width: 550px) {
  .slide-nav {
    right: 33px;
  }
}
@media (max-width: 450px) {
  .cards {
    h2 {
      font-size: 45px;
    }
  }
}
</style>
