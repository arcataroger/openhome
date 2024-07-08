<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
const props = defineProps(['posts']);
</script>

<template>
  <div class="blog-grid row gridlines np-bot">
    <Gridlines />
    <div class="content-wrapper no-max">
      <div class="grid three-col">
        <BlogThumb v-for="(post, key) in props.posts" :data="post" :id="key" />
        <div v-if="width > 768" class="blog-grid-spacer"></div>
        <div v-if="width > 1440" class="blog-grid-spacer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
