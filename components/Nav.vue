<script setup>
const props = defineProps(['type']);
</script>

<template>
  <nav :class="type">
    <ul class="main-nav">
      <li><a href="#">Discord</a></li>
      <li><a href="#">Resources</a></li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  position: relative;
  padding-bottom: 5px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: var(--cream);
    transform: scaleX(0);
    transition: var(--ease-out);
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
}
</style>
