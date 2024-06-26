<script setup>
import gsap from 'gsap';
const main = ref();
let ctx;

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
  const items = document.querySelectorAll('.social-btn');
  items.forEach((item) => {
    item.addEventListener('mouseenter', hoverOn);
    item.addEventListener('mouseleave', hoverOff);
  });
});

onUnmounted(() => {
  const items = document.querySelectorAll('.social-btn');
  items.forEach((item) => {
    item.removeEventListener('mouseenter', hoverOn);
    item.removeEventListener('mouseleave', hoverOff);
  });
});

const hoverSp = 0.5;
const hoverEase = 'power3.out';

const hoverOn = (e) => {
  const trg = e.target;
  const txt = trg.querySelector('.txt');
  const icon = trg.querySelector('.hover-icon');
  gsap.to(txt, {
    duration: hoverSp,
    yPercent: -100,
    opacity: 0,
    ease: hoverEase,
  });
  gsap.fromTo(
    icon,
    { yPercent: 100 },
    {
      duration: hoverSp,
      yPercent: 0,
      opacity: 1,
      ease: hoverEase,
    }
  );
};
const hoverOff = (e) => {
  const trg = e.target;
  const txt = trg.querySelector('.txt');
  const icon = trg.querySelector('.hover-icon');
  gsap.to(txt, {
    duration: hoverSp,
    yPercent: 0,
    opacity: 1,
    ease: hoverEase,
  });
  gsap.to(icon, {
    duration: hoverSp,
    yPercent: 100,
    opacity: 0,
    ease: hoverEase,
  });
};
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
.social-btn {
  overflow: hidden;
}
.hover-icon {
  position: absolute;
  left: 0;
  top: 50%;
  width: 42px;
  height: 42px;
  margin-top: -21px;
  border-radius: 50%;
  border: 1.5px solid var(--cream);
  padding: 10px;
  opacity: 0;
  pointer-events: none;
  display: grid;
  place-content: center;
  img {
    object-fit: contain;
  }
}
.txt {
  display: block;
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
