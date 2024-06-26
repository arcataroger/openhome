<script setup></script>

<template>
  <nav>
    <ul class="cta-nav">
      <li><CtaBtn href="#" theme="lt" size="sm">developers</CtaBtn></li>
      <li><CtaBtn href="#" theme="lt" size="sm">investors</CtaBtn></li>
    </ul>
  </nav>
</template>

<style scoped>
.cta-nav {
  position: absolute;
  right: 0px;
  top: 30px;
  li {
    display: inline-block;
    + li {
      margin-left: 12px;
    }
  }
}
</style>
