<script setup>
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();
const route = useRoute();
const category = route.path.split('/category/')[1];

/* DatoCMS */

// find tag ID
const QUERYCat = /* GraphQL */ `
  query {
    allTags {
      slug
      id
    }
  }
`;
const { data: allTags, error: tagsError } = await useGraphqlQuery({
  query: QUERYCat,
});
const tags = toRaw(allTags.value).allTags;
const catID = tags.filter((tag) => tag.slug == category)[0].id;

// get posts from tag ID
const QUERY = /* GraphQL */ `
  query {
    allPosts(filter: { categories: { anyIn: ["${catID}"] } }) {
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

// pagination
let totPages = 4;
</script>

<template>
  <div class="hero blog section-wrapper lt">
    <!-- header -->
    <BlogHeader />

    <!-- filter -->
    <div class="feature-wrap row gridlines np-bot">
      <Gridlines />
      <div class="content-wrapper tags no-max">
        <BlogFilter />
      </div>
    </div>

    <!-- grid -->
    <BlogGrid :posts="posts" />
  </div>
</template>

<style scoped>
.tags {
  padding-top: 20px;
}
</style>
