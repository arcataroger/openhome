<script setup>
const props = defineProps(['data']);
</script>

<template>
  <div class="blog-thumb">
    <div class="thumb-img">
      <img :src="props.data.image" alt="" />
      <div class="thumb-icon">
        <img :src="props.data.icon" alt="" />
      </div>
    </div>
    <time>{{ props.data.date }}</time>
    <h3>{{ props.data.title }}</h3>
    <p>
      {{ props.data.excerpt }}
    </p>
    <a :href="props.data.url" class="full"></a>
  </div>
</template>

<style scoped>
.thumb-img {
  aspect-ratio: 2/1;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 25px;
  position: relative;
  img {
    object-fit: cover;
  }
}
.thumb-icon {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  padding: 8px;
  background-color: var(--cream);
  position: absolute;
  left: 12px;
  bottom: 14px;
  img {
    border: 1px solid var(--black);
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;
  }
}
@media (max-width: 550px) {
  .thumb-img {
    margin-bottom: 18px;
  }
  .thumb-icon {
    transform: scale(0.5);
    transform-origin: left bottom;
    left: 8px;
    bottom: 8px;
  }
}
</style>
