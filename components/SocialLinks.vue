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
  </ul>
</template>

<style scoped>
li + li {
  margin-top: 16px;
}
@media (max-width: 768px) {
  li + li {
    margin-top: 5px;
  }
}
</style>
