<script setup>
const links = [
  { name: 'X', url: 'https://twitter.com' },
  { name: 'LinkedIn', url: 'https://LinkedIn.com' },
  { name: 'Discord', url: 'https://Discord.com' },
];
</script>

<template>
  <ul>
    <li v-for="link in links" class="h-md">
      <a :href="link.url">{{ link.name }}</a>
    </li>
    <li class="cta"><CtaBtn href="#" arrow="true">Contact</CtaBtn></li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
li + li {
  margin-top: 16px;
  &.cta {
    margin-top: 60px;
  }
}
</style>
