<script setup>
const props = defineProps(['data', 'loc']);
let tags = props.data;
const route = useRoute();
const blog_url = useState('blog_url');
const category = route.path.split('/category/')[1];
/* const cat_url = useState('cat_url'); */

if (props.loc == 'thumb') {
  tags = props.data.filter((tag, i) => i == 0);
}
//console.log('cat ' + category);
</script>

<template>
  <ul class="tags">
    <li v-if="props.loc == 'filter'">
      <a
        :href="blog_url.value"
        class="tag"
        :class="category === undefined && 'selected'"
        >All</a
      >
    </li>
    <li v-for="(item, key) in tags">
      <NuxtLink
        :href="`/blog/category/${item.slug}`"
        :data-id="item.tag"
        class="tag"
        :class="[
          props.loc == 'thumb' && 'sm',
          props.loc != 'thumb' && item.slug == category ? 'selected' : null,
        ]"
        >{{ item.tag }}</NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped></style>
