<script setup>
const props = defineProps(['data', 'id']);
</script>

<template>
  <div class="card flex-cn pad">
    <div class="txt-grp mx-600">
      <div class="slide-img anim-part">
        <img :src="props.data.image" alt="" />
      </div>
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
  .slide-img + h3 {
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
@media (min-width: 1201px) {
  .card {
    &.pad {
      padding-top: 5.9375rem;
      padding-bottom: 5.9375rem;
    }
  }
}
@media (max-width: 1200px) {
  .card {
    &.pad {
      padding: var(--grid-marginM) 65px;
    }
  }
}
@media (min-width: 901px) and (max-width: 1024px) {
  .card {
    &.pad {
      padding: var(--grid-marginM) 25px;
    }
  }
}
@media (max-width: 1024px) {
  .card {
    img {
      width: 70%;
    }
  }
}
@media (max-width: 900px) {
  .card {
    &.pad {
      padding: 20px 65px;
    }
  }
}
@media (max-width: 768px) {
  .card {
    &.pad {
      padding: 20px 43px;
    }
    .slide-img + h3 {
      margin-top: 20px;
    }
  }
}
@media (max-width: 550px) {
  .card {
    &.pad {
      padding: 15px 33px 33px;
    }
    h2 {
      padding-top: 10px;
    }
  }
}
</style>
