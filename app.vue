<script setup>
// imports
import gsap from 'gsap';
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();
const route = useRoute();
let logo;

// initial states
const page_title = useState('page_title', () => 'index');
const base_url = useState('base_url', () => window.location.origin);
const blog_url = useState('blog_url', () => base_url.value + '/blog/');
const cat_url = useState('cat_url', () => base_url.value + '/blog/category/');

// init global meta data if entry point is a tier page
if (route.path != '/') {
  //initSiteMeta();
}

// set theme for page / make dynamic
const page_theme = useState('page_theme', () => 'dk');
if (
  route.name == 'blog' ||
  route.name == 'blog-slug' ||
  route.name == 'blog-category-id'
) {
  page_theme.value = 'lt';
}

// open site after initial load
onMounted(() => {
  setTimeout(function () {
    openPage(route.fullPath, route.name);
  }, 500);

  logo = document.getElementById('logo-main');
});

const leavePage = () => {
  gsap.to('#logo-main', {
    duration: 0.25,
    opacity: 0,
    ease: 'linear',
    onComplete: function () {
      const ypos = height.value / 2 - 40;
      let xpos = 0;
      if (width <= 1024) {
        xpos = width.value / 2 - 50;
      }
      logo.classList.remove('lt');
      logo.classList.add('dk', 'fixed');
      gsap.fromTo(
        '#logo-main',
        { x: xpos, y: height.value + 40, opacity: 1 },
        { duration: 0.5, y: ypos, ease: 'power3.out' }
      );
    },
  });
};

const refreshPage = () => {
  setTimeout(() => {
    openPage(route.fullPath, route.name);
  }, 200);
};
</script>

<template>
  <NuxtLayout :theme="page_theme">
    <NuxtPage
      :transition="{
        name: 'custom',
        mode: 'out-in',
        css: false,
        onBeforeLeave: () => {
          freezePage('.wrapper');
        },
        onLeave: (el, done) => {
          //console.log('leave');
          leavePage();
          gsap.fromTo(
            '.cover',
            { opacity: 0 },
            {
              duration: 0.5,
              opacity: 1,
              ease: 'linear',
              onComplete: done,
            }
          );
        },
        onEnter: () => {
          console.log('open');
          refreshPage();
        },
      }"
    />
  </NuxtLayout>
</template>

<style scoped></style>
