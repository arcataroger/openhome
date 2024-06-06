<script setup>
const props = defineProps(['type']);
</script>

<template>
  <nav :class="type">
    <ul class="main-nav">
      <li><a href="#">Discord</a></li>
      <li><a href="#">Resources</a></li>
    </ul>
  </nav>
</template>

<style scoped></style>
