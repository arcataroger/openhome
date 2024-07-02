<script setup>
import { useWindowSize } from '@vueuse/core';
const props = defineProps(['data', 'id']);
const { width, height } = useWindowSize();
</script>

<template>
  <div class="blog-feature">
    <div class="row details">
      <time>{{ props.data.date }}</time>
      <a href="#" class="tag">Community Project</a>
    </div>

    <h3>{{ props.data.title }}</h3>
    <p>
      {{ props.data.excerpt }}
    </p>
    <div class="thumb-img">
      <img :src="props.data.image" alt="" />
      <div class="thumb-icon">
        <img :src="props.data.icon" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  margin-bottom: 20px;
}
.blog-feature {
  time + .tag {
    margin-left: 50px;
  }
  .thumb-img {
    margin-top: 30px;
    margin-bottom: 0;
    border-radius: 20px;
  }
  h3 + p {
    margin-top: 5px;
  }
  .thumb-icon {
    width: 160px;
    height: 160px;
    border-radius: 20px;
    padding: 12px;
    left: 20px;
    bottom: 20px;
    img {
      border-radius: 18px;
    }
  }
}
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
@media (min-width: 1025px) {
  .thumb-wrap:hover {
    &:after {
      opacity: 1;
    }
  }
}
@media (max-width: 900px) {
  .blog-thumb {
    max-width: none;
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
