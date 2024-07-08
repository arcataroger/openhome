<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';

const props = defineProps(['theme']);

const { width, height } = useWindowSize();
let ctx;
const main = ref(null);
const logo_main = ref(null);

let pad;
if (props.theme == 'lt') {
  pad = 'wide';
}

onMounted(() => {
  startPageOpen();
});

const startPageOpen = () => {
  // setup logo and header parts for open animation
  let logoX = 0;
  if (width.value <= 1024) {
    logoX = width.value / 2 - 50;
  }
  const header = document.querySelector('header.main');
  gsap.set(header.querySelectorAll('.header-part'), { opacity: 0, y: 20 });

  logo_main.value.classList.add('dk');
  gsap.set(logo_main.value, {
    x: logoX,
    y: () => height.value / 2 - 40,
  });
};
</script>

<template>
  <Guidelines />
  <div id="logo-main" class="logo-main set-theme dk" ref="logo_main">
    <IconLogo />
  </div>
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
.logo-main {
  position: absolute;
  left: 50%;
  margin-left: -55px;
  top: 24px;
  z-index: 22;
  &.sticky {
    top: 35px;
    width: 68px;
    margin-left: -34px;
  }
  &.fixed {
    position: fixed;
  }
}
@media (max-width: 1024px) {
  header.main {
    padding-left: var(--side-marginM2);
    padding-right: var(--side-marginM2);
  }
  .logo-main {
    margin: 0;
    left: 0px;
  }
}
</style>
