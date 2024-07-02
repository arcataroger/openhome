<script setup>
const tags = [
  'All',
  'Community Project',
  'Community Update',
  'Social Impact',
  'Insights',
  'Collaboration',
  'Personality Spotlight',
  'App Spotlight',
];
</script>

<template>
  <ul class="tags">
    <li v-for="(tag, key) in tags">
      <a href="#" :data-id="tag" class="tag" :class="key == 0 && 'selected'">{{
        tag
      }}</a>
    </li>
  </ul>
</template>

<style scoped></style>
