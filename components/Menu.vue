<script setup>
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';

const props = defineProps(['theme']);
const { width, height } = useWindowSize();

const menuOpen = ref(false);
const nav = ref(null);
const menu_btn = ref(null);
const menu_wrap = ref(null);
let menu;
let menuBtn;

// menu button click handler
const toggleMenu = (e) => {
  if (!menuOpen.value) {
    document.body.classList.add('freeze');
    gsap.fromTo(
      menu_wrap.value,
      { opacity: 0, xPercent: 100, display: 'block' },
      {
        duration: 0.5,
        xPercent: 0,
        y: 0,
        opacity: 1,
        ease: 'power3.inOut',
      }
    );
    gsap.fromTo(
      '.part',
      { xPercent: 50, y: 0, opacity: 0 },
      {
        delay: 0.1,
        duration: 0.5,
        stagger: 0.1,
        xPercent: 0,
        y: 0,
        opacity: 1,
        ease: 'elastic.out(1.5,2)',
      }
    );
    menu.classList.add('open');
    menu.classList.add('expanded');
    menuBtn.classList.add('open');
    menuOpen.value = true;

    // change menu button
    menu_btn.value.changeMenuBtn(menuOpen.value);
  } else {
    document.body.classList.remove('freeze');
    closeMenu();
  }
};

onMounted(() => {
  // add DOM refs
  menu = document.querySelector('.mobile-menu');
  menuBtn = document.querySelector('.menu-btn');

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
  if (menuOpen.value) {
    gsap.to(menu_wrap.value, {
      duration: 0.35,
      opacity: 0,
      ease: 'power3.inOut',
      onComplete: function () {
        menu.classList.remove('expanded');
        gsap.set(menu_wrap.value, { display: 'none' });
      },
    });

    menu.classList.remove('open');
    menuBtn.classList.remove('open');
    menuOpen.value = false;

    // change menu button
    menu_btn.value.changeMenuBtn(false);
  }
};
</script>

<template>
  <div class="mobile-menu" v-show="width <= 1024">
    <MenuButton @click="toggleMenu" ref="menu_btn" :theme="props.theme" />
    <div class="menu-wrap set-theme dk div-scroll" ref="menu_wrap">
      <div class="menu-contents">
        <div class="gridline v lt"></div>
        <div class="gridline v rt"></div>

        <div class="menu-top hpad part">
          <div class="logo-main">
            <IconLogo />
          </div>
        </div>

        <div class="row h-md part"><Nav></Nav></div>
        <div class="row cta part">
          <div class="cta-group stack">
            <CtaBtn
              href="https://app.openhome.xyz/"
              target="_blank"
              arrow="true"
              >demo</CtaBtn
            >
            <CtaBtn
              href="https://blog.openhome.xyz/introducing-50000-developer-grant-program"
              arrow="true"
              target="_blank"
              >developers</CtaBtn
            >
            <CtaBtn
              href="/downloads/OpenHome_Enterprise_Overview.pdf"
              target="_blank"
              arrow="true"
              >enterprise</CtaBtn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  &.expanded {
    height: 100%;
    z-index: 22;
  }
  .menu-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    display: none;
  }
  .menu-contents {
    width: 100%;
    min-height: 100vh;
    background-color: var(--black);
  }
  .menu-top {
    height: 75px;
  }
  nav,
  ul {
    width: 100%;
  }
  a {
    display: inline-block;
  }
  .gridline {
    &.v {
      top: 75px;
      height: calc(100% - 75px);
    }
  }
  .row {
    border-top: 1px solid var(--dkgray);
    padding: 50px 65px;
    &.cta {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
}

.mobile-menu {
  .logo-main {
    position: absolute;
    margin: 0;
    top: 24px;
    left: -4px;
  }
}

@media (max-width: 768px) {
  .mobile-menu {
    .row {
      padding-left: 43px;
      padding-right: 43px;
    }
  }
}
@media (max-width: 550px) {
  .mobile-menu {
    .row {
      padding-left: 33px;
      padding-right: 33px;
      &.cta {
        padding-top: 18px;
        padding-bottom: 18px;
      }
    }
  }
}
</style>
