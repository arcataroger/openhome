<script setup>
import { useWindowSize } from '@vueuse/core';
const props = defineProps(['data', 'id', 'loc']);
const { width, height } = useWindowSize();
const blog_url = useState('blog_url');

const pixels = ref();

const hoverOn = () => {
  pixels.value.hoverOn();
};
const hoverOff = () => {
  pixels.value.hoverOff();
};

const formattedDate = useDateFormat(props.data.publishDate, 'MMM DD, YYYY');
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
      <BlogThumbImage
        :thumb="props.data.image.responsiveImage"
        :icon="props.data.icon != null && props.data.icon.responsiveImage"
      />

      <time v-if="props.loc == 'home'">{{ formattedDate }}</time>
      <div v-else class="row details flex-jst">
        <time>{{ formattedDate }}</time>
        <BlogTags :data="props.data.categories" loc="thumb" />
      </div>
      <h3>{{ props.data.title }}</h3>
      <p>
        {{ createExcerpt(props.data.contentBasic, 30) }}
      </p>
      <div v-if="props.loc != 'home'" class="arrow mt-25">
        <IconArrow ref="pixels" />
      </div>
      <NuxtLink
        :to="`/blog/${props.data.slug}`"
        class="full"
        v-on="{
          mouseenter: props.loc != 'home' ? hoverOn : null,
          mouseleave: props.loc != 'home' ? hoverOff : null,
        }"
      ></NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.blog-thumb {
  max-width: 630px;
}
.arrow {
  position: absolute;
  bottom: 50px;
}

@media (max-width: 900px) {
  .blog-thumb {
    max-width: none;
  }
}
</style>
