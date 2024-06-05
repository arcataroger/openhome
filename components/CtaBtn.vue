<script setup>
const props = defineProps(['href', 'theme']);
</script>

<template>
  <a :href="props.href" :class="`cta-btn ${props.theme}`"><slot /></a>
</template>

<style scoped></style>
