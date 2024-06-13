<script setup>
import gsap from 'gsap';
const main = ref();
let ctx;

const links = [
  { name: 'X', url: 'https://twitter.com', icon: '/icons/twitter.svg' },
  {
    name: 'LinkedIn',
    url: 'https://LinkedIn.com',
    icon: '/icons/linkedin.svg',
  },
  { name: 'Discord', url: 'https://Discord.com', icon: '/icons/discord.svg' },
];

onMounted(() => {
  // attach hovers
  ctx = gsap.context((self) => {
    const items = self.selector('.social-btn');
    items.forEach((item) => {
      item.addEventListener('mouseenter', hoverOn);
      item.addEventListener('mouseleave', hoverOff);
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

const hoverOn = (e) => {
  const el = e.target;
  gsap.to(el, {
    duration: 0.5,
    y: -5,
    ease: 'power3.out',
  });
};
const hoverOff = (e) => {
  const el = e.target;
  gsap.to(el, {
    duration: 0.5,
    y: 0,
    ease: 'power3.out',
  });
};
</script>

<template>
  <ul ref="main">
    <li v-for="link in links" class="social-btn h-md">
      <div class="hover-icon"><img :src="link.icon" alt="" /></div>
      <a :href="link.url">{{ link.name }}</a>
    </li>
  </ul>
</template>

<style scoped>
.hover-icon {
  position: absolute;
  left: 0;
  top: 50%;
  width: 42px;
  height: 42px;
  margin-top: -21px;
  border-radius: 50%;
  border: 1.5px solid var(--cream);
  padding: 8px;
  opacity: 0;
  pointer-events: none;
  img {
    object-fit: contain;
  }
}
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
