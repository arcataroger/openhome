<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';

const props = defineProps(['theme']);

const { width, height } = useWindowSize();
let ctx;
const main = ref(null);

let pad;
if (props.theme == 'lt') {
  pad = 'wide';
}

onMounted(() => {
  // setup logo and header parts for open animation
  let logoX = 0;
  if (width.value <= 1024) {
    logoX = width.value / 2 - 50;
  }
  const header = document.querySelector('header.main');
  gsap.set(header.querySelectorAll('.header-part'), { opacity: 0, y: 20 });
  gsap.set(header.querySelector('.logo-main'), {
    x: logoX,
    y: () => height.value / 2 - 40,
  });
});
</script>

<template>
  <Guidelines />
  <header
    class="main hpad"
    :class="[props.theme, width > 1024 && pad]"
    ref="main"
  >
    <HeaderParts />
  </header>
  <StickyNav v-if="width > 1024" />
  <Menu :theme="props.theme" />
</template>

<style scoped>
header.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
}
@media (max-width: 1024px) {
  header.main {
    padding-left: var(--side-marginM2);
    padding-right: var(--side-marginM2);
  }
}
</style>
