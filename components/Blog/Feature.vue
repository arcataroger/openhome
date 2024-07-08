<script setup>
import { useWindowSize } from '@vueuse/core';
import { useDateFormat } from '@vueuse/core';
import { Image as DatocmsImage } from 'vue-datocms';

const props = defineProps(['data', 'id', 'loc']);
const { width, height } = useWindowSize();
const blog_url = useState('blog_url');
const formattedDate = useDateFormat(props.data.publishDate, 'MMM DD, YYYY');
</script>

<template>
  <div class="blog-feature">
    <div class="row details" :class="width <= 550 && 'flex-jst'">
      <time>{{ formattedDate }}</time>
      <BlogTags :data="props.data.categories" />
    </div>

    <h3>{{ props.data.title }}</h3>
    <p>
      {{ createExcerpt(props.data.contentBasic, 30) }}
    </p>
    <BlogThumbImage
      :thumb="props.data.image.responsiveImage"
      :icon="props.data.icon.responsiveImage"
      loc="feature"
    />
    <a
      :href="blog_url + props.data.slug"
      class="full"
      v-if="props.loc == 'blog'"
    ></a>
  </div>
</template>

<style>
.details {
  margin-bottom: 20px;
}
.blog-feature {
  time + .tags {
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
