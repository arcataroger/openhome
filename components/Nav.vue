<script setup>
const props = defineProps(['type']);
</script>

<template>
  <nav :class="type">
    <ul :class="props.type == 'main' ? 'main-nav' : 'mobile-nav'">
      <li>
        <a href="https://discord.com/invite/YFTvffFMzv" target="_blank"
          >Discord</a
        >
      </li>
      <li>
        <a href="https://blog.openhome.xyz/blog/" target="_blank">Resources</a>
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
a {
  position: relative;
  padding-bottom: 5px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: var(--cream);
    transform: scaleX(0);
    transition: var(--ease-out);
  }
}
@media (min-width: 1025px) {
  a:hover {
    &:after {
      transform: scaleX(1);
    }
  }
}
</style>
