<script setup>
const props = defineProps(['type']);
</script>

<template>
  <nav :class="type">
    <ul class="main-nav">
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped></style>
