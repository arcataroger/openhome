<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
let ctx;
const main = ref();

onMounted(() => {
  let el;
  ctx = gsap.context((self) => {
    gsap.set('nav.main, .cta-nav', { opacity: 0 });
    //gsap.set('.logo-main', { y: () => height.value / 2 - 40 });
  });
});
</script>

<template>
  <Guidelines />
  <header class="main dk hpad" ref="main">
    <div class="content-wrapper">
      <div class="logo-main" :class="width > 1024 && 'pos-ct'">
        <IconLogo v-if="width > 1024" />
        <IconLogoWide v-if="width <= 1024" />
      </div>
      <Nav type="main"></Nav>
      <CtaNav></CtaNav>
    </div>
  </header>
  <Menu />
</template>

<style>
header.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
}
.cta-nav {
  position: absolute;
  right: 0px;
  top: 30px;
  li {
    display: inline-block;
    + li {
      margin-left: 12px;
    }
  }
}
.logo-main {
  position: absolute;
  top: 24px;
  z-index: 21;
}
@media (max-width: 1024px) {
  header.main {
    nav {
      display: none;
    }
  }
  .logo-main {
    width: 150px;
    top: 27px;
  }
}
</style>
