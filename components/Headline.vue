<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const props = defineProps(['type', 'theme']);

let rgb;
let hex;
if (props.theme == 'dk') {
  rgb = '255, 252, 247';
  hex = '#fffcf7';
} else {
  rgb = '14,14,21';
  hex = '#0e0e15';
}

const splitHeadline = (el) => {
  const spl = new SplitText(el, {
    type: 'words, chars',
    wordsClass: 'word',
    charsClass: 'letter',
  });
  const letters = el.querySelectorAll('.letter');
  gsap.set(letters, {
    opacity: 0,
    color: `rgba(${rgb},0)`,
    textShadow: `0 0 30px ${hex}`,
  });
};

// animate each character on
const animSplitHeadline = (el) => {
  const letters = gsap.utils.toArray(el.querySelectorAll('.letter'));
  gsap.utils.shuffle(letters);
  gsap.to(letters, {
    duration: 0.5,
    opacity: 1,
    color: `rgba(${rgb},1)`,
    textShadow: `0 0 0px ${hex}`,
    ease: 'quad.in',
    stagger: 0.02,
  });
};

let ctx;
const main = ref();
let played = false;

onMounted(() => {
  // split headline into letters
  splitHeadline(main.value);

  // add animation context
  ctx = gsap.context((self) => {
    // hero headline, play after page open
    if (props.type == 'hero') {
      setTimeout(function () {
        animSplitHeadline(main.value);
      }, 1200);

      // scroll to headline to play
    } else {
      setTimeout(function () {
        const anim = ScrollTrigger.create({
          trigger: main.value,
          start: 'top 65%',
          onEnter: () => {
            //console.log('play headline anim');
            animSplitHeadline(main.value);
            anim.kill(); // play once, then remove
          },
        });
      }, 200);
    }
  }, main.value);
});
onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <span class="hl-anim" ref="main"><slot /></span>
</template>

<style scoped></style>
