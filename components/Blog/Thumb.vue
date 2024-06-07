<script setup></script>

<template>
  <div class="blog-thumb col pad">
    <div class="thumb-img">
      <img src="~assets/img/news-thumb1@2x.jpg" alt="" />
      <div class="thumb-icon">
        <img src="~assets/img/news-icon1@2x.png" alt="" />
      </div>
    </div>
    <time>April 02, 2024</time>
    <h3>Introducing MetaCap: Live Emotional Insights Come to OpenHome</h3>
    <p>
      We’re thrilled to showcase a community project built by members of the
      OpenHome developer community! At the heart of OpenHome’s
    </p>
  </div>
</template>

<style scoped>
.thumb-img {
  aspect-ratio: 2/1;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 25px;
  position: relative;
  img {
    object-fit: cover;
  }
}
.thumb-icon {
  width: 90px;
  height: 90px;
  border-radius: 10px;
  padding: 8px;
  background-color: var(--cream);
  position: absolute;
  left: 12px;
  bottom: 14px;
  img {
    border: 1px solid var(--black);
    border-radius: 8px;
    overflow: hidden;
    object-fit: cover;
  }
}
</style>
