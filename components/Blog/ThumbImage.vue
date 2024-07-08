<script setup>
const props = defineProps(['thumb', 'icon']);
import { Image as DatocmsImage } from 'vue-datocms';
</script>

<template>
  <div class="thumb-img">
    <DatocmsImage :data="props.thumb" />
    <div class="thumb-icon">
      <DatocmsImage :data="props.icon" />
    </div>
  </div>
</template>

<style scoped></style>
