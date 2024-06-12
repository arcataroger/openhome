<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();

let menuOpen = false;
const nav = ref(null);
let menu;
const menuH = ref(0);

// menu button click handler
const toggleMenu = (e) => {
  // set menu height for click outside
  menuH.value = menu.querySelector('.menu-contents').offsetHeight;

  if (!menuOpen) {
    gsap.fromTo(
      '.menu-contents',
      { scaleX: 0.9, scaleY: 0.9, opacity: 0 },
      {
        duration: 0.35,
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        ease: 'power3.out',
      }
    );

    menu.classList.add('open');
    menu.classList.add('expanded');
    menuOpen = true;
  } else {
    closeMenu();
  }
};

onMounted(() => {
  // add DOM refs
  menu = document.querySelector('.mobile-menu');

  // add click events
  /*   const nav = menu.querySelectorAll('a');
  nav.forEach((link) => {
    link.addEventListener('click', closeMenu);
  }); */

  // set toggle for scroll up
  scrollUpToggle('.menu-btn', 'on');
});

// close menu
const closeMenu = () => {
  if (menuOpen) {
    //console.log('close menu');
    gsap.to('.menu-contents', {
      duration: 0.5,
      opacity: 0,
      scaleX: 0.9,
      scaleY: 0.9,
      ease: 'power3.inOut',
      onComplete: function () {
        menu.classList.remove('expanded');
      },
    });

    menu.classList.remove('open');
    menuOpen = false;
  }
};
</script>

<template>
  <div class="mobile-menu" v-show="width <= 1024">
    <MenuButton @click="toggleMenu" />
    <div class="menu-wrap">
      <div class="menu-contents bgtexture"></div>
    </div>
  </div>
</template>

<style>
.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
  &.expanded {
    height: 100%;
  }
  /*   &.open {
  } */
  .menu-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
  }
  .menu-contents {
    width: 100%;
    height: 100vh;
    padding: 20px 0;
  }

  nav,
  ul {
    width: 100%;
  }
}
</style>
