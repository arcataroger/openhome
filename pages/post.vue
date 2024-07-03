<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();

/* placeholder data */
const post = {
  id: '1',
  data: {
    image: '/blog/feature-matrix@2x.jpg',
    icon: '/blog/icon-matrix@2x.jpg',
    date: 'March 01, 2024',
    title: 'Matrix Phone Booth: Immersive Experiences in Openhome',
    excerpt:
      'We are thrilled to spotlight this creative community project from OpenHome community member Tracy Tao!',
    url: 'https://openhome.xyz/matrix-phone-booth-what-would-you-choose/',
  },
};
</script>

<template>
  <div class="main-contents">
    <!-- article hero -->
    <div class="hero section-wrapper lt">
      <div class="row gridlines page-top np-bot">
        <Gridlines />
        <div class="content-wrapper no-max">
          <div class="feature col pad">
            <BlogFeature :data="post.data" />
          </div>
        </div>
      </div>
    </div>

    <!-- article -->
    <div class="article section-wrapper lt">
      <!-- bodycopy block -->
      <div class="content-block text gridlines np-top">
        <Gridlines top="false" bot="false" />

        <div class="content-wrapper post">
          <p>
            We are thrilled to spotlight this creative community project from
            OpenHome community member Tracy Tao!
          </p>
          <p>
            Red pill or blue pill? Enter the matrix in the comfort of your own
            home with the Matrix Phone Booth voice experience.
          </p>
          <p>
            Matrix Phone Booth showcases the immersive and delightful experience
            made possible through just a voice and sound effects. It’s a dynamic
            agent tailored to you designed to make you feel like you’re actually
            in a simulation.
          </p>
          <h3>About the Developer</h3>
          <p>
            Tracy Tao studied Computer Science at the University of Southern
            California. She has a passion for interaction design and loves to
            make fun personalities on OpenHome.
          </p>
          <p>
            “It is more of a fun setting for people to examine daily life. Voice
            applications provide immersive, customized, and more natural way of
            patting our own desires and needs,” said Tracy.
          </p>
        </div>
      </div>

      <!-- quote block -->
      <div class="content-block quote gridlines np-top np-bot">
        <Gridlines bot="true" />
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
      </div>

      <!-- bodycopy block -->
      <div class="content-block text gridlines np-top">
        <Gridlines top="false" bot="false" />

        <div class="content-wrapper post">
          <p>
            We are thrilled to spotlight this creative community project from
            OpenHome community member Tracy Tao!
          </p>
          <p>
            Red pill or blue pill? Enter the matrix in the comfort of your own
            home with the Matrix Phone Booth voice experience.
          </p>
          <p>
            Matrix Phone Booth showcases the immersive and delightful experience
            made possible through just a voice and sound effects. It’s a dynamic
            agent tailored to you designed to make you feel like you’re actually
            in a simulation.
          </p>
          <h3>About the Developer</h3>
          <p>
            Tracy Tao studied Computer Science at the University of Southern
            California. She has a passion for interaction design and loves to
            make fun personalities on OpenHome.
          </p>
          <p>
            “It is more of a fun setting for people to examine daily life. Voice
            applications provide immersive, customized, and more natural way of
            patting our own desires and needs,” said Tracy.
          </p>
        </div>
      </div>
    </div>

    <!-- call to action -->
    <div class="cta-row section-wrapper lt gridlines np-top np-bot">
      <Gridlines />
      <div class="content-wrapper no-max">
        <div class="grid two-col">
          <div class="col pad">
            <div class="txt-grp mx-600 auto">
              <div class="list-icon bg-orange">
                <img src="/public/icons/cap-instant.svg" alt="" />
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
                class="cta-group mt-20"
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
                <img src="/public/icons/cap-instant.svg" alt="" />
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
                class="cta-group mt-20"
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
  * + h3 {
    margin-top: 5rem;
  }
}
.content-block {
  position: relative;
  &.quote {
    blockquote {
      margin: 0;
      padding: 80px 0;
      color: var(--orange);
    }
  }
}
.quotemark {
  width: 50px;
  position: absolute;
  top: 50px;
  &.lt {
    left: 25px;
  }
  &.rt {
    right: 20px;
    transform: scale(-1);
  }
}
</style>
