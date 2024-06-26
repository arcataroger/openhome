<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();

// reset to global page meta data
//initSiteMeta();
const page_id = 'homePage';

// pull page from global site data by id
const QUERY = /* GraphQL */ `
  query {
    ${page_id} {
      logo {
        url
        alt
      }
      headline
      photo {
        url
      }
      intro
    }
  }
`;
/* const { data, error } = await useGraphqlQuery({ query: QUERY });
const page_data = toRaw(data.value)[page_id]; */
</script>

<template>
  <div class="main-contents">
    <HomeHero />
    <HomeSlider />
    <HomeCapabilities class="overtop" />
    <HomeResources />
    <HomeCommunity />
    <HomeDemoBtn />
  </div>
</template>

<style scoped></style>
