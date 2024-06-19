<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
let ctx;
const main = ref();

onMounted(() => {
  let el;
  let logoX = 0;
  if (width.value <= 1024) {
    logoX = width.value / 2 - 50;
  }
  gsap.set('.header-part', { opacity: 0, y: 20 });
  gsap.set('.logo-main', { x: logoX, y: () => height.value / 2 - 40 });
});
</script>

<template>
  <Guidelines />
  <header class="main dk hpad" ref="main">
    <div class="content-wrapper">
      <div class="logo-main">
        <IconLogo />
      </div>
      <Nav type="main" class="header-part"></Nav>
      <CtaNav class="header-part"></CtaNav>
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
  .logo-main {
    position: absolute;
    left: 50%;
    margin-left: -55px;
    top: 24px;
    z-index: 21;
  }
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

@media (max-width: 1024px) {
  header.main {
    nav {
      display: none;
    }
    .logo-main {
      /*       width: 150px;
      height: 30px; */
      margin: 0;
      left: -27px;
    }
  }
}
</style>
