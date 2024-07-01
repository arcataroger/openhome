<script setup></script>

<template>
  <nav>
    <ul class="cta-nav">
      <li>
        <CtaBtn
          href="https://openhome.xyz/introducing-50000-developer-grant-program/"
          theme="lt"
          size="sm"
          target="_blank"
          >developers</CtaBtn
        >
      </li>
      <li>
        <CtaBtn
          href="/downloads/OpenHome_Enterprise_Overview.pdf"
          target="_blank"
          theme="lt"
          size="sm"
          >enterprise</CtaBtn
        >
      </li>
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
