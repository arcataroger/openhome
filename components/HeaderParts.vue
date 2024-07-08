<script setup>
const props = defineProps(['sticky']);
</script>

<template>
  <div class="content-wrapper">
    <div class="logo-main sticky" v-if="props.sticky">
      <IconLogoShape />
    </div>
    <Nav type="main" class="header-part"></Nav>
    <CtaNav class="header-part"></CtaNav>
  </div>
</template>

<style scoped>
.logo-main {
  position: absolute;
  left: 50%;
  top: 35px;
  width: 68px;
  margin-left: -34px;
}
@media (max-width: 1024px) {
  nav {
    display: none;
  }
}
</style>
