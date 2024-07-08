<script setup></script>

<template>
  <div class="row gridlines page-top np-bot">
    <Gridlines />

    <div class="content-wrapper header no-max">
      <div class="side-ornament lt"><div class="circ"></div></div>
      <div class="side-ornament rt">
        <img src="/public/icons/logo-halfcircs.svg" alt="" />
      </div>

      <header>
        <Headline type="hero">
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
</template>

<style scoped>
header {
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
}
.side-ornament {
  top: 50%;
  margin-top: -50px;
  &.lt {
    left: 0;
  }
  &.rt {
    right: 0;
  }
}
@media (max-width: 768px) {
  .side-ornament {
    margin-top: -18px;
  }
}
</style>
