<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const menu = ref(null);
const menu_wrap = ref(null);

// Dato CMS Query
const QUERY = /* GraphQL */ `
  query {
    allTags {
      slug
      tag
    }
  }
`;
const { data, error } = await useGraphqlQuery({ query: QUERY });
const tags = toRaw(data.value).allTags;

/* const tags = [
  'All',
  'Community Project',
  'Community Update',
  'Social Impact',
  'Insights',
  'Collaboration',
  'Personality Spotlight',
  'App Spotlight',
]; */

// reset drop menu if coming from mobile
const resetMenu = () => {
  if (width.value > 550) {
    menu.value.style = '';
    menu_wrap.value.classList.remove('open');
  }
};

onMounted(() => {
  // call resize listener
  addEventListener('resize', resetMenu);
});
onUnmounted(() => {
  removeEventListener('resize', resetMenu);
});
</script>

<template>
  <div class="menu-wrap hpad" ref="menu_wrap">
    <div
      v-show="width <= 550"
      class="menu-btn flex-jst"
      @click="toggleDropMenu"
    >
      Categories
      <img src="/public/arrow.svg" alt="" class="icon-arrow" />
    </div>
    <div class="toggle-menu" ref="menu">
      <BlogTags :data="tags" loc="filter" />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1025px) {
  .menu-wrap {
    padding: 15px var(--side-margin) 20px;
  }
}
@media (max-width: 1024px) {
  .menu-wrap {
    padding-top: 10px;
    padding-bottom: var(--side-marginM2);
  }
}
@media (max-width: 550px) {
  .menu-wrap {
    position: relative;
    z-index: 3;
    border-top: 1px solid var(--gray);
    padding: 15px;
    &.open {
      .icon-arrow {
        transform: rotate(90deg);
      }
    }
  }
  .menu-btn {
    background-color: var(--black);
    color: var(--cream);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 15px 12px;
    cursor: pointer;
    .icon-arrow {
      width: 20px;
      transition: var(--ease-out);
    }
  }
  .toggle-menu {
    position: absolute;
    left: 0;
    top: 100%;
    padding: 0 15px;
    margin-top: -10px;
    display: none;
  }
  .tags {
    background-color: var(--black);
    padding: 12px 12px 5px;
  }
  .tag {
    border-color: var(--cream);
    background-color: var(--black);
    color: var(--cream);
  }
}
</style>
