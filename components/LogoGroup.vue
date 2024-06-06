<script setup>
/* placeholder data */
const logos = [
  '/logos/apple-music.svg',
  '/logos/g-nest.svg',
  '/logos/hue.svg',
  '/logos/chat-gpt.svg',
  '/logos/spotify.svg',
  '/logos/uber.svg',
];
</script>

<template>
  <div class="logo-group flex-jst mt-100">
    <div class="logo-item" v-for="logo in logos">
      <img :src="logo" alt="brand" />
    </div>
  </div>
</template>

<style scoped>
.logo-group {
  padding: 0 75px 40px;
}
</style>
