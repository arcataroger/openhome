<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();

/* DatoCMS */
const QUERY = /* GraphQL */ `
  query {
    allPosts(orderBy: [publishDate_DESC]) {
      title
      slug
      publishDate
      image {
        responsiveImage(imgixParams: { auto: format }) {
          src
          width
          height
          alt
          bgColor
        }
      }
      icon {
        responsiveImage {
          src
          width
          height
          alt
          bgColor
        }
      }
      categories {
        tag
        slug
      }
      contentBasic
    }
  }
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });
const posts = toRaw(data.value).allPosts;
//console.log(posts);
let show_posts = posts.filter((post, i) => i > 0);

// pagination
let totPages = 4;
</script>

<template>
  <div class="hero blog section-wrapper lt">
    <!-- header -->
    <BlogHeader />

    <!-- featured post -->
    <div class="feature-wrap row gridlines np-bot">
      <Gridlines />
      <div class="content-wrapper no-max thumb-wrap">
        <div class="feature col pad">
          <BlogFeature :data="posts[0]" loc="blog" />
        </div>

        <!-- category filter -->
        <BlogFilter />
      </div>
    </div>

    <!-- grid -->
    <div class="blog-grid row gridlines np-bot">
      <Gridlines />
      <div class="content-wrapper no-max">
        <div class="grid three-col">
          <BlogThumb v-for="(post, key) in show_posts" :data="post" :id="key" />
          <div v-if="width > 768" class="blog-grid-spacer"></div>
          <div v-if="width > 1440" class="blog-grid-spacer"></div>
        </div>
      </div>
    </div>

    <!-- pagination -->
    <div class="pagination row gridlines np-bot">
      <Gridlines />
      <div class="content-wrapper no-max">
        <ul>
          <li v-for="n in totPages">
            <a href="#" :class="n == 1 && 'on'">{{ n }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-wrap {
  position: relative;
  z-index: 21;
}
.feature {
  padding-top: 25px;
  padding-bottom: 15px;
  .tags {
    margin-top: 30px;
  }
}
.pagination {
  text-align: center;
  .content-wrapper {
    padding: 25px;
  }
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
    + li {
      margin-left: 5px;
    }
  }
  a {
    font-family: 'FT Activica', sans-serif;
    font-size: 35px;
    color: var(--gray);
    display: inline-block;
    width: 40px;
    text-align: center;
    &.on {
      color: var(--orange);
    }
  }
}
@media (pointer: fine) {
  .pagination a:hover {
    color: var(--orange);
  }
}
@media (max-width: 768px) {
  .hero {
    .side-ornament {
      margin-top: -18px;
    }
  }
}
</style>
