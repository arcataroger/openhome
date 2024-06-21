<script setup>
const props = defineProps(['data', 'id']);
</script>

<template>
  <div class="card pad flex-cn">
    <div class="txt-grp mx-600">
      <img :src="props.data.image" alt="" class="slide-img anim-part" />
      <h3 class="anim-part">{{ props.data.title }}</h3>
      <p class="anim-part">{{ props.data.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 100vh;
  position: relative;
  left: 0;
  top: 0;
  img {
    border-radius: 10px;
    max-width: 315px;
  }
  img + h3 {
    margin-top: 30px;
  }
  h3 + p {
    margin-top: 10px;
  }
}
.txt-grp {
  position: relative;
  z-index: 2;
}
.anim-part {
  transform-origin: left bottom;
}
@media (min-width: 1025px) {
  .card {
    &.pad {
      padding-top: 5.9375rem;
      padding-bottom: 5.9375rem;
    }
  }
}
@media (min-width: 551px) and (max-width: 1024px) {
  .card {
    &.pad {
      padding-top: var(--side-marginM);
      padding-bottom: var(--side-marginM);
    }
  }
}
@media (max-width: 768px) {
  .card {
    img {
      width: 70%;
    }
    img + h3 {
      margin-top: 20px;
    }
  }
}
@media (max-width: 550px) {
  .card h2 {
    padding-top: 10px;
  }
}
</style>
