<script setup>
const props = defineProps(['bot', 'pad']);
</script>

<template>
  <div class="gridline h top"></div>
  <div class="gridline v lt"></div>
  <div class="gridline v rt"></div>
  <div v-if="bot" :class="`gridline h bot ${props.pad}`"></div>
</template>

<style>
.gridlines {
  position: relative;
  padding: var(--grid-margin);
  + .gridlines {
    padding-top: 0;
    .gridline.top {
      top: 0px;
    }
  }
  &.col-vpad {
    padding-top: 0;
    padding-bottom: 0;
    .col {
      padding-top: var(--grid-margin);
      padding-bottom: var(--grid-margin);
    }
  }
  &.np-bot {
    padding-bottom: 0;
  }
}
.gridline {
  position: absolute;

  &.h {
    top: var(--grid-margin);
    left: 0px;
    width: 100%;
    height: 1px;
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

  &.bot {
    top: auto;
    &.pad {
      bottom: var(--grid-margin);
    }
    &.nopad {
      bottom: 0px;
    }
  }
}
</style>
