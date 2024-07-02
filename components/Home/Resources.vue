<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();

/* placeholder data */
const posts = [
  {
    id: '1',
    data: {
      image: 'news-thumb1@2x.jpg',
      icon: 'news-icon1@2x.png',
      date: 'April 02, 2024',
      title: 'Introducing MetaCap: Live Emotional Insights Come to OpenHome',
      excerpt:
        "We're thrilled to showcase a community project built by members of the OpenHome developer community! At the heart of OpenHome's",
      url: 'https://blog.openhome.xyz/introducing-metacap-live-emotional-insights-are-coming-to-openhome/',
    },
  },
  {
    id: '2',
    data: {
      image: 'news-thumb2@2x.jpg',
      icon: 'news-icon2@2x.png',
      date: 'March 01, 2024',
      title: 'Matrix Phone Booth: Immersive Experiences in Openhome',
      excerpt:
        'We are thrilled to spotlight this creative community project from OpenHome community member Tracy Tao!',
      url: 'https://blog.openhome.xyz/matrix-phone-booth-what-would-you-choose/',
    },
  },
];
</script>

<template>
  <div class="resources section-wrapper lt">
    <div class="row gridlines np-bot">
      <Gridlines />
      <div class="side-ornament lt"><div class="circ"></div></div>
      <div class="side-ornament rt">
        <img src="/public/icons/logo-halfcircs.svg" alt="" />
      </div>

      <div class="content-wrapper header p-max pt-65">
        <header>
          <Headline>
            <h2 class="alt">
              Res<span class="pix">o</span>u<span class="pix">r</span>c<span
                class="pix"
                >e</span
              >s
            </h2>
          </Headline>
        </header>
      </div>
    </div>
    <div class="row gridlines np-bot" :class="width <= 900 && 'stack'">
      <Gridlines bot="true" pad="nopad" />
      <div class="content-wrapper no-max">
        <div class="grid two-col">
          <BlogThumb
            v-for="(post, key) in posts"
            :data="post.data"
            :id="key"
            loc="home"
          />
        </div>
        <div class="cta-row txt-cn has-bdr">
          <div class="inner">
            <CtaBtn
              href="https://blog.openhome.xyz/blog/"
              target="_blank"
              arrow="true"
              >View All</CtaBtn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1025px) {
  .resources .grid .col {
    padding-top: 3.75rem;
  }
}
@media (min-width: 901px) {
  .resources .grid .col {
    padding-bottom: 130px;
  }
}
@media (max-width: 900px) {
  .resources {
    .cta-row {
      position: relative;
      border-top-width: 1px;
      border-style: solid;
      height: auto;
      bottom: 0;
      .inner {
        padding: 15px 55px;
      }
      .inner,
      a {
        width: 100%;
      }
    }
  }
}
@media (max-width: 768px) {
  .resources {
    .cta-row {
      .inner {
        padding: 15px 33px;
      }
    }
  }
}
</style>
