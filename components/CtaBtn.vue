<script setup>
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();
const props = defineProps(['href', 'target', 'theme', 'size', 'arrow']);
const pixels = ref();

const hoverOn = () => {
  pixels.value.hoverOn();
};
const hoverOff = () => {
  pixels.value.hoverOff();
};
</script>

<template>
  <a
    :href="props.href"
    :target="props.target"
    class="cta-btn"
    :class="props.size && props.size"
    v-on="{
      mouseenter: arrow && width > 1024 ? hoverOn : null,
      mouseleave: arrow && width > 1024 ? hoverOff : null,
    }"
    ><slot />
    <div v-if="arrow" class="arrow"><IconArrow ref="pixels" /></div>
  </a>
</template>

<style scoped></style>
