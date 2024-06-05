<script setup>
// imports
import gsap from 'gsap';
const route = useRoute();

// initial states
const page_title = useState('page_title', () => 'index');

// init global meta data if entry point is a tier page
if (route.path != '/') {
  initSiteMeta();
}

// open site after initial load
onMounted(() => {
  openPage(route.fullPath, route.name);
});
</script>

<template>
  <NuxtLayout>
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
          openPage(route.fullPath, route.name);
        },
      }"
    />
  </NuxtLayout>
</template>

<style scoped></style>
