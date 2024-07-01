<script setup>
import { useWindowSize } from '@vueuse/core';
const props = defineProps(['data', 'id']);
const { width, height } = useWindowSize();
</script>

<template>
  <div
    class="thumb-wrap col pad"
    :class="props.id == 0 && width > 900 ? 'a-rt' : ''"
  >
    <div class="blog-thumb">
      <div class="thumb-img">
        <img :src="props.data.image" alt="" />
        <div class="thumb-icon">
          <img :src="props.data.icon" alt="" />
        </div>
      </div>
      <div class="row details flex-jst">
        <time>{{ props.data.date }}</time>
        <a href="#" class="tag sm">Community Project</a>
      </div>
      <h3>{{ props.data.title }}</h3>
      <p>
        {{ props.data.excerpt }}
      </p>
    </div>
    <a :href="props.data.url" class="full" target="_blank"></a>
  </div>
</template>

<style scoped>
.thumb-wrap {
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--brown);
    opacity: 0;
    transition: var(--linear);
  }
}
.blog-thumb {
  max-width: 630px;
}

@media (min-width: 1025px) {
  .thumb-wrap:hover {
    &:after {
      opacity: 1;
    }
  }
}
@media (max-width: 900px) {
  .blog-thumb {
    max-width: none;
  }
}
</style>
