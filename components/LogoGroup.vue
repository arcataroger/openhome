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
  <div class="logo-ticker">
    <div class="logo-group flex-jst mt-100">
      <div class="logo-item" v-for="logo in logos">
        <img :src="logo" alt="brand" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-group {
  padding: 0 75px 40px;
}
@media (max-width: 1200px) {
  .logo-group {
    padding: 0 40px 40px;
  }
}
@media (max-width: 1024px) {
  .logo-group {
    padding: 0 10px 40px;
  }
  .logo-item {
    padding: 0 15px;
  }
}
@media (max-width: 650px) {
  .logo-ticker {
    width: 1000px;
    overflow: hidden;
  }
}
</style>
