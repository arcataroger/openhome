<script setup>
const props = defineProps(['type']);
</script>

<template>
  <nav :class="type">
    <ul :class="props.type == 'main' ? 'main-nav' : 'mobile-nav'">
      <li>
        <a
          href="https://discord.com/invite/YFTvffFMzv"
          target="_blank"
          class="ul"
          >Discord</a
        >
      </li>
      <li>
        <a href="https://blog.openhome.xyz/blog/" target="_blank" class="ul"
          >Resources</a
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.main-nav {
  position: absolute;
  top: 40px;
  width: 100%;
  text-align: left;
  li {
    /* font-size: 1.125rem; */
    font-size: 18px;
    display: inline-block;
    + li {
      margin-left: 30px;
    }
  }
}
.mobile-nav {
  li {
    font-size: 50px;
    + li {
      margin-top: 12px;
    }
  }
}
</style>
