<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const main = ref();

const links = [
  {
    name: 'X',
    url: 'https://x.com/OpenHomeAI',
    icon: '/icons/twitter.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/openhome-ai/',
    icon: '/icons/linkedin.svg',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/YFTvffFMzv',
    icon: '/icons/discord.svg',
  },
];

onMounted(() => {
  // attach hovers
  const items = main.value.querySelectorAll('.social-btn');
  items.forEach((item) => {
    item.addEventListener('mouseenter', hoverOnSocial);
    item.addEventListener('mouseleave', hoverOffSocial);
  });
});

onUnmounted(() => {
  const items = main.value.querySelectorAll('.social-btn');
  items.forEach((item) => {
    item.removeEventListener('mouseenter', hoverOnSocial);
    item.removeEventListener('mouseleave', hoverOffSocial);
  });
});
</script>

<template>
  <ul ref="main">
    <li v-for="link in links" class="social-btn h-md">
      <div class="hover-icon"><img :src="link.icon" alt="" /></div>
      <a :href="link.url"
        ><span class="txt">{{ link.name }}</span></a
      >
    </li>
  </ul>
</template>

<style scoped>
li {
  position: relative;
}
li + li {
  margin-top: 16px;
}
@media (max-width: 768px) {
  li + li {
    margin-top: 5px;
  }
}
</style>
