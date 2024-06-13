<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
</script>

<template>
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
        <div
          class="cta-group mt-20"
          :class="width <= 550 && 'grid two-col gap'"
        >
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
</template>

<style scoped>
.home-slider {
  img {
    border-radius: 10px;
  }
  img + h3 {
    margin-top: 30px;
  }
  h3 + p {
    margin-top: 10px;
  }
}
.slide-img {
  max-width: 315px;
}
@media (min-width: 1025px) {
  .home-slider {
    .col.pad {
      padding-top: 5.9375rem;
      padding-bottom: 5.9375rem;
    }
  }
}
@media (min-width: 551px) and (max-width: 1024px) {
  .home-slider {
    .col.pad {
      padding-top: var(--side-marginM);
      padding-bottom: var(--side-marginM);
    }
  }
}
@media (max-width: 768px) {
  .home-slider {
    img {
      width: 70%;
    }
    img + h3 {
      margin-top: 20px;
    }
  }
}
@media (max-width: 550px) {
  .home-slider h2 {
    padding-top: 10px;
  }
}
</style>
