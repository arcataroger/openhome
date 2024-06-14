<script setup>
const props = defineProps(['href', 'theme', 'size', 'arrow']);
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
    class="cta-btn"
    :class="props.size && props.size"
    v-on="{
      mouseenter: arrow ? hoverOn : null,
      mouseleave: arrow ? hoverOff : null,
    }"
    ><slot />
    <div v-if="arrow" class="arrow"><IconArrow ref="pixels" /></div>
  </a>
</template>

<style scoped></style>
