<script setup>
import gsap from 'gsap';

const props = defineProps(['theme']);

const xpos = [4, 4, -4, -4];
const ypos = [3.5, -3.5, 3.5, -3.5];
const main = ref();

const changeMenuBtn = (open) => {
  const items = gsap.utils.toArray('.px', main.value);
  if (open) {
    items.forEach((item, i) => {
      gsap.to(item, {
        duration: 0.75,
        x: xpos[i],
        y: ypos[i],
        ease: 'elastic.out(4,3)',
      });
    });
  } else {
    items.forEach((item, i) => {
      gsap.to(item, {
        duration: 0.75,
        x: 0,
        y: 0,
        ease: 'elastic.out(4,3)',
      });
    });
  }
};

defineExpose({
  changeMenuBtn,
});
</script>

<template>
  <div
    class="menu-btn set-theme grid-cn"
    :class="props.theme"
    ref="main"
    @click="toggleMenuBtn"
  >
    <svg width="22" height="19" viewBox="0 0 20 17.5" class="start use-theme">
      <rect />
      <rect class="px pix1" x="8" />
      <rect x="16" />

      <rect class="px pix4" y="7" />
      <rect x="8" y="7" />
      <rect class="px pix2" x="16" y="7" />

      <rect y="14" />
      <rect class="px pix3" x="8" y="14" />
      <rect x="16" y="14" />
    </svg>
  </div>
</template>

<style scoped>
.menu-btn {
  position: absolute;
  right: 17px;
  top: 15px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  z-index: 10;
  transition: var(--ease-out);
  border-width: 1px;
  border-style: solid;
  svg {
    overflow: visible;
  }
  rect {
    width: 4px;
    height: 3.5px;
    transition: color 0.25s linear;
  }
  &.dk.on {
    background-color: var(--black);
  }
  &.lt.on {
    background-color: var(--cream);
  }
  &.open {
    &.lt.on {
      background-color: var(--black);
    }
    border-color: var(--cream);
    rect {
      fill: var(--cream);
    }
  }
}
</style>
