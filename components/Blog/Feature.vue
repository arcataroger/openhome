<script setup>
import { useWindowSize } from '@vueuse/core';
import { useDateFormat } from '@vueuse/core';
import { Image as DatocmsImage } from 'vue-datocms';
const props = defineProps(['data', 'id', 'loc']);
const { width, height } = useWindowSize();

//console.log(props.data.image);
const excerpt =
  'We are thrilled to spotlight this creative community project from OpenHome community member Tracy Tao! Red pill or blue pill? Enter the matrix in the comfort of your own home with the Matrix Phone Booth voice experience.';
const formattedDate = useDateFormat(props.data.publishDate, 'MMM DD, YYYY');
</script>

<template>
  <div class="blog-feature">
    <div class="row details" :class="width <= 550 && 'flex-jst'">
      <time>{{ formattedDate }}</time>
      <a
        v-if="props.data.category.tag"
        :href="props.data.category.slug"
        class="tag"
        >{{ props.data.category.tag }}</a
      >
    </div>

    <h3>{{ props.data.title }}</h3>
    <p>
      {{ createExcerpt(excerpt, 30) }}
    </p>
    <div class="thumb-img">
      <DatocmsImage :data="props.data.image.responsiveImage" />
      <div class="thumb-icon">
        <DatocmsImage :data="props.data.icon.responsiveImage" />
      </div>
    </div>
    <a
      :href="props.data.slug"
      class="full"
      target="_blank"
      v-if="props.loc == 'blog'"
    ></a>
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
    width: 100%;
    max-height: 740px;
    img {
      object-fit: cover;
    }
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
  transform-origin: left bottom;
  img {
    border: 1px solid var(--black);
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;
  }
}
@media (pointer: fine) {
  .thumb-wrap:hover {
    &:after {
      opacity: 1;
    }
  }
}
@media (max-width: 1440px) {
  .thumb-icon {
    transform: scale(0.75);
  }
}
@media (max-width: 1200px) {
  .blog-feature time {
    font-size: 16px;
  }
  .thumb-icon {
    transform: scale(0.5);
  }
}
@media (max-width: 900px) {
  .blog-thumb {
    max-width: none;
  }
}
@media (max-width: 550px) {
  .blog-feature {
    .thumb-img {
      border-radius: 10px;
      margin-top: 15px;
    }
    .thumb-icon {
      transform: scale(0.28);
      left: 8px;
      bottom: 8px;
    }
    time + .tag {
      margin-left: 0;
    }
  }
  .details {
    margin-bottom: 10px;
  }
}
</style>
