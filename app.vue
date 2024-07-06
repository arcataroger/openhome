<script setup>
// imports
import gsap from 'gsap';
const route = useRoute();

// initial states
const page_title = useState('page_title', () => 'index');

// init global meta data if entry point is a tier page
if (route.path != '/') {
  //initSiteMeta();
}

// set theme for page / make dynamic
let page_theme = 'dk';
if (route.name == 'blog' || route.name == 'blog-slug') {
  page_theme = 'lt';
}

// open site after initial load
onMounted(() => {
  setTimeout(function () {
    openPage(route.fullPath, route.name);
  }, 500);
});
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
          gsap.fromTo(
            '.cover',
            { opacity: 0 },
            {
              duration: 0.5,
              opacity: 1,
              ease: 'power3.inOut',
              onComplete: done,
            }
          );
        },
        onEnter: () => {
          //openPage(route.fullPath, route.name);
        },
      }"
    />
  </NuxtLayout>
</template>

<style scoped></style>
