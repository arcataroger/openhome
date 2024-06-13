<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
</script>

<template>
  <div class="hero section-wrapper dk bgtexture">
    <div class="content-wrapper p-max has-br">
      <header :class="width <= 650 && 'txt-lt'">
        <h1>Your Own AI Smart Speaker</h1>
        <p>
          OpenHome’s open-source Voice SDK empowers you to launch your
          personalized <br />AI-powered smart speaker on any platform or custom
          hardware in minutes.
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
</template>

<style scoped>
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
</style>
