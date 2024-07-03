<script setup>
import { useWindowSize } from '@vueuse/core';
const props = defineProps(['data', 'id', 'loc']);
const { width, height } = useWindowSize();

const pixels = ref();

const hoverOn = () => {
  pixels.value.hoverOn();
};
const hoverOff = () => {
  pixels.value.hoverOff();
};
</script>

<template>
  <div
    class="thumb-wrap col pad"
    :class="
      (props.id == 0 && width > 900 ? 'a-rt' : '',
      props.loc != 'home' && 'has-arrow')
    "
  >
    <div class="blog-thumb">
      <div class="thumb-img">
        <img :src="props.data.image" alt="" />
        <div class="thumb-icon">
          <img :src="props.data.icon" alt="" />
        </div>
      </div>
      <time v-if="props.loc == 'home'">{{ props.data.date }}</time>
      <div v-else class="row details flex-jst">
        <time>{{ props.data.date }}</time>
        <a href="#" class="tag sm">Community Project</a>
      </div>
      <h3>{{ props.data.title }}</h3>
      <p>
        {{ props.data.excerpt }}
      </p>
      <div v-if="props.loc != 'home'" class="arrow mt-25">
        <IconArrow ref="pixels" />
      </div>
    </div>
    <a
      :href="props.data.url"
      class="full"
      target="_blank"
      v-on="{
        mouseenter: props.loc != 'home' ? hoverOn : null,
        mouseleave: props.loc != 'home' ? hoverOff : null,
      }"
    ></a>
  </div>
</template>

<style scoped>
.thumb-wrap {
  position: relative;
  &.has-arrow {
    padding-bottom: 75px;
  }
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--brown);
    opacity: 0;
    transition: var(--linear);
  }
}
.blog-thumb {
  max-width: 630px;
}
.arrow {
  position: absolute;
  bottom: 50px;
}

@media (pointer: fine) {
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
</style>
