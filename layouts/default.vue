<script setup>
const props = defineProps(['theme']);
</script>

<template>
  <div class="wrapper">
    <Header :theme="props.theme" />
    <slot />
    <Footer />
    <div class="cover"></div>
  </div>
</template>

<style scoped></style>
