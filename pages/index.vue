<script setup>
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
  <div>
    <div class="hero section-wrapper hpad bgtexture">
      <div class="content-wrapper">
        <header>
          <h1>Your Own AI Smart Speaker</h1>
          <p>
            OpenHome’s open-source Voice SDK empowers you to launch your
            personalized <br />AI-powered smart speaker on any platform or
            custom hardware in minutes.
          </p>
        </header>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  min-height: 100vh;
}
</style>
