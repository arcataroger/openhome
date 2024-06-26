<script setup>
const props = defineProps(['sticky']);
</script>

<template>
  <div class="content-wrapper">
    <div class="logo-main" :class="props.sticky && 'sticky'">
      <IconLogo v-if="!props.sticky" />
      <IconLogoShape v-else />
    </div>
    <Nav type="main" class="header-part"></Nav>
    <CtaNav class="header-part"></CtaNav>
  </div>
</template>

<style scoped>
.logo-main {
  position: absolute;
  left: 50%;
  margin-left: -55px;
  top: 24px;
  z-index: 21;
  &.sticky {
    top: 35px;
    width: 68px;
    margin-left: -34px;
  }
}

@media (max-width: 1024px) {
  nav {
    display: none;
  }
  .logo-main {
    margin: 0;
    left: -27px;
  }
}
</style>
