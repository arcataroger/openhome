<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const main = ref(null);
const links = [
  {
    name: 'X',
    url: 'https://x.com/OpenHomeAI',
    icon: '/icons/twitter.svg',
  },
  {
    name: 'FB',
    url: 'https://www.facebook.com/',
    icon: '/icons/facebook.svg',
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
  <div
    class="share-sticky"
    :class="width <= 1024 && 'gridlines np-top np-bot'"
    ref="main"
  >
    <Gridlines v-if="width <= 1024" bot="true" pad="nopad" />
    <div class="content-wrapper no-max">
      <div class="side-menu set-theme dk">
        <nav>
          <ul :class="width <= 1024 && 'grid-auto-col'">
            <li class="title">Share</li>
            <li v-for="link in links" class="social-btn h-md">
              <div class="hover-icon"><img :src="link.icon" alt="" /></div>
              <a :href="link.url"
                ><span class="txt">{{ link.name }}</span></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.share-sticky {
  position: relative;
  z-index: 21;
  height: 0;
  padding-left: var(--grid-margin);
  padding-right: var(--grid-margin);
}
.side-menu {
  position: absolute;
  left: 50px;
  top: 50px;
  width: 100px;
  border-radius: 10px;
  background-color: var(--black);
  text-align: center;
}
li {
  font-size: 30px;
  padding: 10px;
  position: relative;
  &.title {
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
  }
  + li {
    border-top: 1px solid var(--cream);
  }
}
.social-btn {
  overflow: hidden;
  .hover-icon {
    left: 50%;
    margin-left: -21px;
  }
}
@media (max-width: 1200px) {
  .share-sticky {
    padding-left: var(--grid-marginM);
    padding-right: var(--grid-marginM);
  }
}
@media (max-width: 1024px) {
  .share-sticky {
    height: auto;
    padding-left: calc(var(--grid-marginM) + var(--side-marginM));
    padding-right: calc(var(--grid-marginM) + var(--side-marginM));
    .content-wrapper {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
  .side-menu {
    position: relative;
    width: 100%;
    left: auto;
    top: auto;
    border-radius: 0;
    li + li {
      border-top: none;
      border-left: 1px solid var(--cream);
    }
    .title {
      place-content: center;
    }
  }
}
@media (max-width: 768px) {
  .share-sticky {
    padding-left: var(--grid-marginM);
    padding-right: var(--grid-marginM);
  }
}
@media (max-width: 550px) {
  .share-sticky {
    padding-left: 33px;
    padding-right: 33px;
    .content-wrapper {
      padding-top: 15px;
      padding-bottom: 15px;
    }
  }
}
</style>
