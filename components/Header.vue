<script setup></script>

<template>
  <header class="main hpad">
    <div class="content-wrapper">
      <div class="logo-main pos-ct">
        <IconLogo />
      </div>
      <Nav></Nav>
      <CtaNav></CtaNav>
    </div>
  </header>
</template>

<style>
header.main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
}
.main-nav {
  position: absolute;
  top: 45px;
  width: 100%;
  text-align: left;
  font-size: 18px;
  li {
    display: inline-block;
    + li {
      margin-left: 30px;
    }
  }
}
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
.logo-main {
  position: relative;
  top: 20px;
}
</style>
