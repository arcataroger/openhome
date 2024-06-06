<script setup>
const props = defineProps(['bot']);
</script>

<template>
  <div class="gridline h top"></div>
  <div class="gridline v lt"></div>
  <div class="gridline v rt"></div>
  <div v-if="bot" class="gridline h bot"></div>
</template>

<style>
.gridline {
  position: absolute;

  &.h {
    top: var(--grid-margin);
    left: 0px;
    width: 100%;
    height: 1px;
    &.bot {
      top: auto;
      bottom: var(--grid-margin);
    }
  }
  &.v {
    width: 1px;
    height: 100%;
    top: 0px;
  }
  &.lt {
    left: var(--grid-margin);
  }
  &.rt {
    right: var(--grid-margin);
  }
}
</style>
