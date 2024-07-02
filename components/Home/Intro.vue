<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
</script>

<template>
  <div class="intro section-wrapper lt gridlines np-bot">
    <Gridlines />
    <div class="content-wrapper p-max pt-65 pb-65 txt-cn">
      <header>
        <Headline theme="lt" auto="false"
          ><h2>Welcome to a New Era <br />of Interaction.</h2></Headline
        >
      </header>
      <div class="img-ph intro-wave mt-65 auto">
        <!--         <img src="~/assets/img/welcome-wave.png" />
 -->
      </div>
      <div class="txt-grp mt-65 mx-1100 auto">
        <h3>Bring AI to Life, Everywhere!</h3>
        <p>
          OpenHome is not a piece of smart technology, it's the core of an
          intelligent companionship that evolves with you. Our AI personalities
          engage, learn your voice, sense your feelings, empathize, and
          anticipate your needs.
        </p>
        <p>
          Craft your ideal companion. Customize the voice, tone, style, and even
          the sense of humor of your AI. With OpenHome, you create more than a
          smart speaker; you bring to life an entity that is uniquely yours.
        </p>
      </div>
      <div
        class="cta-group grid two-col gap mt-65"
        :class="width > 550 && 'nobr'"
      >
        <CtaBtn
          href="https://blog.openhome.xyz/introducing-50000-developer-grant-program"
          arrow="true"
          target="_blank"
          >developers</CtaBtn
        >
        <CtaBtn
          href="/downloads/OpenHome_Enterprise_Overview.pdf"
          target="_blank"
          arrow="true"
          >enterprise</CtaBtn
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  .intro-wave {
    max-width: 1400px;
    border-radius: 365px;
    overflow: hidden;
    aspect-ratio: 3.45 / 1;
  }
}
</style>
