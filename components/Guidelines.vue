<script setup>
const show = 0;
</script>

<template>
  <template v-if="show">
    <div class="guideline lt"></div>
    <div class="guideline ltm"></div>
    <div class="guideline cn"></div>
    <div class="guideline rtm"></div>
    <div class="guideline rt"></div>
  </template>
</template>

<style scoped>
.guideline {
  width: 1px;
  height: 100vh;
  background-color: red;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 50;
  pointer-events: none;
  &.lt {
    margin-left: -900px;
  }
  &.rt {
    margin-left: 900px;
  }
  &.ltm {
    margin-left: -720px;
  }
  &.rtm {
    margin-left: 720px;
  }
}
</style>
