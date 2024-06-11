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

/* placeholder data */
const posts = [
  {
    id: '1',
    data: {
      image: 'news-thumb1@2x.jpg',
      icon: 'news-icon1@2x.png',
      data: 'April 02, 2024',
      title: 'Introducing MetaCap: Live Emotional Insights Come to OpenHome',
      excerpt:
        "We're thrilled to showcase a community project built by members of the OpenHome developer community! At the heart of OpenHome's",
      url: '#',
    },
  },
  {
    id: '2',
    data: {
      image: 'news-thumb2@2x.jpg',
      icon: 'news-icon2@2x.png',
      data: 'March 01, 2024',
      title: 'MAtrix Phone Booth: Immersive Experiences in Openhome',
      excerpt:
        'We are thrilled to spotlight this creative community project from OpenHome community member Tracy Tao!',
      url: '#',
    },
  },
];
</script>

<template>
  <div>
    <!-- hero -->
    <div class="hero section-wrapper dk bgtexture">
      <div class="content-wrapper p-max has-br">
        <header :class="width <= 650 && 'txt-lt'">
          <h1>Your Own AI Smart Speaker</h1>
          <p>
            OpenHome’s open-source Voice SDK empowers you to launch your
            personalized <br />AI-powered smart speaker on any platform or
            custom hardware in minutes.
          </p>
        </header>
      </div>

      <!-- wave animation -->
      <div class="anim-wrap img-ph grid-cn">
        <img src="~/assets/img/home-hero-ph.png" />
      </div>

      <!-- logos -->
      <LogoGroup />
    </div>

    <!-- intro -->
    <div class="intro section-wrapper lt gridlines np-bot">
      <Gridlines />
      <div class="content-wrapper p-max pt-65 pb-65 txt-cn">
        <header>
          <h2>Welcome to a New Era <br />of Interaction.</h2>
        </header>
        <div class="img-ph intro-wave mt-65 auto">
          <img src="~/assets/img/welcome-wave.png" />
        </div>
        <div class="txt-grp mt-65 mx-1100 auto">
          <h3>Bring AI to Life, Everywhere!</h3>
          <p>
            OpenHome is not a piece of smart technology, it's the core of an
            intelligent companionship that evolves with you. Our AI
            personalities engage, learn your voice, sense your feelings,
            empathize, and anticipate your needs.
          </p>
          <p>
            Craft your ideal companion. Customize the voice, tone, style, and
            even the sense of humor of your AI. With OpenHome, you create more
            than a smart speaker; you bring to life an entity that is uniquely
            yours.
          </p>
        </div>
        <div class="cta-group grid two-col nobr gap mt-65">
          <CtaBtn href="#" arrow="true">developers</CtaBtn>
          <CtaBtn href="#" arrow="true">investors</CtaBtn>
        </div>
      </div>
    </div>

    <!-- slider -->
    <div
      class="home-slider section-wrapper lt gridlines col-vpad"
      :class="width <= 900 && 'stack'"
    >
      <Gridlines />
      <div class="content-wrapper no-max">
        <div class="grid two-col mx-1600 auto">
          <div class="col pad flex-cn">
            <div class="txt-grp mx-600">
              <h2>Build your ideal smart speaker experience.</h2>
            </div>
          </div>
          <div class="col pad flex-cn">
            <div class="txt-grp mx-600">
              <img
                src="~/assets/img/home-slide1@2x.png"
                alt=""
                class="slide-img"
              />
              <h3>Unlock Human-Like Interaction</h3>
              <p>
                With OpenHome, create organic voice AI experiences with instant
                response times, emotional recognition, conversation paths, and
                opinions of their own. With OpenHome, create organic voice AI
                experiences with instant response times, emotional recognition,
                conversation paths, and opinions of their own.
              </p>
            </div>
          </div>
        </div>
        <div class="slide-nav"></div>
      </div>
    </div>

    <!-- api -->
    <div class="api section-wrapper bgtexture dk pt pb-160">
      <div class="content-wrapper p-max">
        <header>
          <h2>Powerful APIs for <br />Developers & Enterprises</h2>
          <p class="mx-1100 auto">
            Easy to use, powerful tools for complex tasks. Our platform includes
            comprehensive APIs for speech-to-text, text-to-speech, and language
            understanding. Whether it's for medical transcription or creating
            autonomous agents, OpenHome is the trusted choice for developers
            looking to push the boundaries of what voice AI can do.
          </p>
          <div class="cta-group mt-20">
            <CtaBtn href="#" arrow="true">Try a Demo</CtaBtn>
            <CtaBtn href="#" arrow="true">Explore Ecosystem</CtaBtn>
          </div>
        </header>
      </div>
      <!-- wave animation -->
      <div class="anim-wrap grid-cn img-ph mt-65">
        <img src="~/assets/img/home-api-ph.png" />
      </div>

      <!-- capabilities -->
      <div class="content-wrapper p-max">
        <div class="capabilities pt">
          <!-- giant text -->
          <div class="callout-txt-lg">500+</div>

          <!-- content row 2 col -->
          <div class="grid two-col pt">
            <div class="col pr" :class="width > 900 && 'pt-65'">
              <div class="txt-goup mx-600">
                <h2>Powerful Capabilities</h2>
                <p>
                  With over 500 +With features that support a wide range of
                  applications—from medical transcription to smart home
                  integration—OpenHome sets the stage for a future where AI is
                  seamlessly integrated into everyday life.
                </p>
                <CtaBtn href="#" arrow="true">Browse more Capabilities</CtaBtn>
              </div>
            </div>
            <div class="col pl">
              <IconList />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- resources -->
    <div class="resources section-wrapper lt">
      <div class="row gridlines np-bot">
        <Gridlines />
        <div class="side-ornament lt"><div class="circ"></div></div>
        <div class="side-ornament rt">
          <img src="/public/icons/logo-halfcircs.svg" alt="" />
        </div>

        <div class="content-wrapper p-max pt-65">
          <header>
            <h2 class="alt">
              Res<span class="pix">o</span>u<span class="pix">r</span>c<span
                class="pix"
                >e</span
              >s
            </h2>
          </header>
        </div>
      </div>
      <div class="row gridlines np-bot">
        <Gridlines bot="true" pad="nopad" />
        <div class="content-wrapper no-max">
          <div class="grid two-col">
            <div class="col pad" v-for="post in posts">
              <BlogThumb :data="post.data" />
            </div>
          </div>
          <div class="cta-row txt-cn">
            <div class="inner">
              <CtaBtn href="#" arrow="true">View All</CtaBtn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- community -->
    <div class="community section-wrapper lt pt">
      <div class="content-wrapper p-max">
        <header>
          <h2>Join the OpenHome Community</h2>
          <p>
            Ready to redefine the boundaries of voice AI? Join OpenHome today
            and be part of the <br />community that’s setting the tone for
            tomorrow's AI innovations. Where will your <br />imagination take
            you? Let OpenHome be the launchpad for your voice AI journey.
          </p>
          <CtaBtn href="#" arrow="true">Join the Community</CtaBtn>
        </header>
      </div>

      <!-- shapes animation -->
      <div class="anim-wrap img-ph mt-65 grid-cn">
        <img src="~/assets/img/home-community-ph@2x.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.anim-wrap {
  width: 100%;
}
.hero {
  .anim-wrap {
    margin-top: 125px;
  }
}
@media (max-width: 1400px) {
  .hero {
    .anim-wrap {
      margin-top: 50px;
    }
  }
}

.home-slider {
  img + h3 {
    margin-top: 30px;
  }
  h3 + p {
    margin-top: 10px;
  }
  .col.pad {
    padding-top: 5.9375rem;
    padding-bottom: 5.9375rem;
  }
}
@media (max-width: 1024px) {
  .home-slider {
    .col.pad {
      padding-top: var(--side-marginM);
      padding-bottom: var(--side-marginM);
    }
  }
}

.intro {
  .intro-wave {
    max-width: 1400px;
    border-radius: 365px;
    overflow: hidden;
  }
}
.slide-img {
  max-width: 315px;
}

.resources {
  header {
    padding-bottom: 3.75rem;
  }
  .grid .col {
    padding-top: 3.75rem;
    padding-bottom: 8.125rem;
  }
  .blog-thumb {
    max-width: 630px;
    margin: 0 auto;
  }
  .cta-row {
    position: absolute;
    width: 100%;
    height: 100px;
    left: 0;
    bottom: 3px;
    pointer-events: none;
    .cta-btn {
      pointer-events: all;
    }
    .inner {
      display: inline-block;
      padding: 20px 20px 15px;
    }
  }
  .side-ornament {
    position: absolute;
    top: 10.9375rem;
    width: 100px;
    height: 105px;
    display: grid;
    place-items: center;
    background-color: var(--cream);
    &.lt {
      left: var(--grid-margin);
      margin-left: -50px;
    }
    &.rt {
      right: var(--grid-margin);
      margin-right: -50px;
    }
    img {
      width: 40px;
    }
    .circ {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: var(--black);
    }
  }
}
.community {
  .anim-wrap {
    margin-top: 55px;
  }
}
</style>
