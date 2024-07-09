<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image as DatocmsImage } from 'vue-datocms';
import { StructuredText as DatocmsStructuredText } from 'vue-datocms';
import { useWindowSize } from '@vueuse/core';

gsap.registerPlugin(ScrollTrigger);
const { width, height } = useWindowSize();
const route = useRoute();
const slug = route.params.slug;
const main = ref();
let ctx;

/* DatoCMS */
const QUERY = /* GraphQL */ `
  query {
    post(filter: { slug: { eq: "${slug}" } }) {
      title
      slug
      publishDate
      image {
        responsiveImage(imgixParams: { fit: fillmax, w: 1800, h: 1000 }) {
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
      content {
        value
        blocks {
          __typename
          ... on RecordInterface {
            __typename
          }
          ... on QuoteRecord {
            id
            __typename
            quoteText
          }
        }
      }
    }
  }
`;

const { data, error } = await useGraphqlQuery({ query: QUERY });
const page_data = toRaw(data.value).post;
//console.log('data: ' + page_data.content.value);

onMounted(() => {
  // setup share menu pin
  ctx = gsap.context((self) => {
    setTimeout(() => {
      pinMenu('.side-menu', 1025);
    }, 200);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});

// Structured Text: block renderer
const renderBlock = ({ record }) => {
  if (record.__typename === 'QuoteRecord') {
    return h('div', {}, [h('blockquote', { class: 'h-md' }, record.quoteText)]);
  }
};
</script>

<template>
  <div ref="main">
    <!-- article hero -->
    <div class="hero blog post section-wrapper lt">
      <div class="row gridlines page-top np-bot">
        <Gridlines bot="false" />
        <div class="content-wrapper no-max">
          <div class="feature col pad">
            <BlogFeature :data="page_data" loc="post" />
          </div>
        </div>
      </div>
    </div>

    <!-- article -->
    <div class="article section-wrapper lt">
      <BlogShare class="start-pin" :title="page_data.title" />
      <!-- space -->

      <!-- bodycopy block -->
      <div class="content-block text gridlines np-top first">
        <Gridlines top="false" bot="false" />

        <div class="content-wrapper post">
          <!-- basic text as placeholder
          <div v-html="page_data.contentBasic"></div> -->

          <DatocmsStructuredText
            :data="page_data.content"
            :renderBlock="renderBlock"
          />
        </div>
      </div>

      <!-- quote block -->
      <!--       <div class="content-block quote gridlines np-top np-bot">
        <Gridlines bot="true" pad="nopad" />
        <div class="quotemark lt">
          <img src="/public/icons/quotes.svg" alt="" />
        </div>
        <div class="quotemark rt">
          <img src="/public/icons/quotes.svg" alt="" />
        </div>
        <div class="content-wrapper p-max">
          <blockquote class="h-lg">
            It’s a dynamic agent tailored to you designed to make you feel like
            you’re actually in a simulation.
          </blockquote>
        </div>
      </div> -->

      <div class="end-pin"></div>
    </div>

    <!-- call to action -->
    <div class="cta-row section-wrapper lt gridlines np-top np-bot">
      <Gridlines />
      <div class="content-wrapper no-max">
        <div class="grid two-col" :class="width <= 900 && 'stack'">
          <div class="col pad">
            <div class="txt-grp mx-600 auto">
              <div class="list-icon bg-orange">
                <img src="/public/icons/blog-build.svg" alt="" />
              </div>
              <h2>Build</h2>
              <h3>with OpenHome</h3>
              <p>
                OpenHome is an open-source AI smart speaker. From creating novel
                personalities to building useful capabilities, our voice
                operating system enables developers to build epic voice-first
                experiences.
              </p>
              <p>
                Join the vibrant open-source community today and explore the
                future of voice AI. Start building everything from custom
                personalities, to truly intelligent smart home assistants, to
                voice enabled apps.
              </p>
              <div
                class="cta-group"
                :class="width <= 550 && 'grid two-col gap'"
              >
                <CtaBtn href="#" target="_blank" arrow="true"
                  >Join Our Discord</CtaBtn
                >
                <CtaBtn href="#" target="_blank" arrow="true"
                  >Access to Github</CtaBtn
                >
              </div>
            </div>
          </div>
          <div class="col pad">
            <div class="txt-grp mx-600 auto">
              <div class="list-icon bg-purple">
                <img src="/public/icons/blog-apply.svg" alt="" />
              </div>
              <h2>Apply</h2>
              <h3>for a grant</h3>
              <p>
                Apply for a $10,000 grant to build an app! Lorem Ipsum es
                simplemente el texto de relleno de las imprentas y archivos de
                texto. Lorem Ipsum ha sido el texto de relleno estándar de las
                industrias desde el año 1500. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>
              <div
                class="cta-group"
                :class="width <= 550 && 'grid two-col gap'"
              >
                <CtaBtn href="#" target="_blank" arrow="true"
                  >apply for a grant</CtaBtn
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.article {
  * + ul,
  ul + * {
    margin-top: 35px;
  }
  * + h3 {
    margin-top: 4rem;
  }
  * + h4 {
    margin-top: 2.5rem;
  }
  .post a {
    text-decoration: underline;
  }
}
.content-block.gridlines,
.cta-row .col.pad {
  padding-top: 100px;
  padding-bottom: 100px;
}
.content-block {
  &.quote {
    blockquote {
      margin: 0;
      color: var(--orange);
    }
  }
  &.first {
    padding-top: 50px;
  }
}
.quotemark {
  width: 50px;
  position: absolute;
  top: 45px;
  &.lt {
    left: 25px;
  }
  &.rt {
    right: 20px;
    transform: scale(-1);
  }
}
.hero {
  .feature {
    padding-top: 25px;
  }
}
.cta-row {
  .list-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
    img {
      object-fit: cover;
    }
  }
  .cta-group {
    margin-top: 30px;
  }
}

@media (pointer: fine) {
  .article a:hover {
    color: var(--orange);
  }
}
@media (max-width: 1440px) {
  .content-wrapper.post {
    padding-left: 200px;
    padding-right: 200px;
    max-width: none;
  }
  .hero .feature {
    padding-bottom: 0;
  }
  .content-block.gridlines,
  .cta-row .col.pad {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .content-block.quote {
    blockquote {
      font-size: 90px;
    }
  }
}
@media (max-width: 1200px) {
  .content-block.quote {
    padding-top: 100px;
    padding-bottom: 80px;
    blockquote {
      font-size: 70px;
    }
    .quotemark {
      &.lt {
        top: 35px;
        left: 65px;
      }
      &.rt {
        top: auto;
        bottom: 35px;
        right: 65px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .content-wrapper.post {
    padding-left: var(--side-marginM);
    padding-right: var(--side-marginM);
  }
  .content-block.text,
  .cta-row .col.pad {
    padding-top: 25px;
    padding-bottom: 25px;
  }
}
@media (max-width: 768px) {
  .content-block.quote {
    blockquote {
      font-size: 50px;
    }
    .quotemark {
      &.lt {
        left: 35px;
      }
      &.rt {
        top: auto;
        right: 35px;
      }
    }
  }
}
@media (max-width: 550px) {
  .content-wrapper.post {
    padding-left: 15px;
    padding-right: 15px;
  }
  .content-block.text,
  .cta-row .col.pad {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .cta-row {
    padding-bottom: 25px;
  }
  .article {
    * + h3,
    * + ul,
    ul + * {
      margin-top: 20px;
    }
  }
}
</style>
