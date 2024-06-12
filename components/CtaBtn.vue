<script setup>
const props = defineProps(['href', 'theme', 'size', 'arrow']);
</script>

<template>
  <a :href="props.href" class="cta-btn" :class="props.size && props.size"
    ><slot />
    <div v-if="arrow" class="arrow"><IconArrow /></div>
  </a>
</template>

<style scoped></style>
