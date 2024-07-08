<script setup>
const props = defineProps(['data', 'loc']);
const blog_url = useState('blog_url');
const cat_url = useState('cat_url');
</script>

<template>
  <ul class="tags">
    <li v-if="loc == 'filter'">
      <a :href="blog_url.value" class="tag selected">All</a>
    </li>
    <li v-for="(item, key) in props.data">
      <a :href="cat_url + item.slug" :data-id="item.tag" class="tag">{{
        item.tag
      }}</a>
    </li>
  </ul>
</template>

<style scoped></style>
