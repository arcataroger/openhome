<script setup>
import gsap from 'gsap';
import { vOnClickOutside } from '@vueuse/components';

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
      { yPercent: -100 },
      {
        duration: 0.5,
        yPercent: 0,
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

// add watcher for menu height change
const updateMenuH = () => {
  if (menuOpen) {
    menuH.value = menu.querySelector('.menu-contents').offsetHeight;
  }
};
useEventListener(window, 'resize', updateMenuH);

onMounted(() => {
  // add DOM refs
  menu = document.querySelector('.mobile-menu');

  // add click events
  const nav = menu.querySelectorAll('a');
  nav.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // set toggle for scroll up
  scrollUpToggle('.menu-btn', 'on');
});

// close menu
const closeMenu = () => {
  if (menuOpen) {
    //console.log('close menu');
    gsap.to('.menu-contents', {
      duration: 0.5,
      yPercent: -100,
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
  <div
    class="mobile-menu"
    v-on-click-outside="closeMenu"
    :style="`max-height:${menuH}px`"
  >
    <MenuButton @click="toggleMenu" />
    <div class="menu-wrap">
      <div class="menu-contents">
        <Nav type="mobile" ref="nav" />
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .mobile-menu {
    display: none;
  }
}

.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
  &.expanded {
    height: 100%;
  }
  &.open {
    .menu-btn {
      background-color: #fff;
      .menu-line {
        background-color: #000;
      }
      .menu-line:nth-child(1) {
        transform: rotate(45deg);
      }
      .menu-line:nth-child(2) {
        transform: scaleX(0);
      }
      .menu-line:nth-child(3) {
        transform: rotate(-45deg);
      }
    }
  }
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
    background-color: rgba(0, 0, 0, 0.8);
    /*     border-bottom: 1px solid var(--ltgray);
 */
    padding: 20px 0;
  }

  nav,
  ul {
    width: 100%;
  }

  /* move to nav component */
  nav {
    ul {
      display: block;
      padding: 0 25px;
    }
    .icon-wrap {
      width: 50px !important;
      height: 50px !important;
      padding: 10px !important;
      margin: 0 !important;
      border: 1px solid #fff !important;
    }
    li a {
      display: grid;
      grid-template-columns: 60px 1fr;
      justify-items: start;
      align-items: center;
      padding: 12px 0;
      p {
        font-size: 32px;
        font-weight: 300;
        color: #fff !important;
        margin-left: 15px;
      }
    }
    li + li {
      border-top: 1px solid var(--ltgray);
    }
  }
}
</style>
