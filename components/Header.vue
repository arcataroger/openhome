<script setup></script>

<template>
  <header class="main">
    <div class="logo-main">
      <NuxtLink to="/"><IconLogo /></NuxtLink>
    </div>
    <Nav></Nav>
    <CtaNav></CtaNav>
  </header>
</template>

<style>
header.main {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
}
.main-nav {
  position: absolute;
  top: 0px;
  width: 100%;
  text-align: center;
  li {
    display: inline-block;
    + li {
      margin-left: 20px;
    }
  }
}
.cta-nav {
  position: absolute;
  right: 0px;
  top: 0px;
}
.logo-main {
  position: relative;
}
</style>
