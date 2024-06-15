<script setup></script>

<template>
  <div class="card pad flex-cn bg-cream">
    <div class="txt-grp mx-600">
      <img src="~/assets/img/home-slide1@2x.png" alt="" class="slide-img" />
      <h3>Unlock Human-Like Interaction</h3>
      <p>
        With OpenHome, create organic voice AI experiences with instant response
        times, emotional recognition, conversation paths, and opinions of their
        own. With OpenHome, create organic voice AI experiences with instant
        response times, emotional recognition, conversation paths, and opinions
        of their own.
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  /* background-color: var(--cream); */
  padding-top: var(--grid-margin);
  padding-bottom: var(--grid-margin);
  img {
    border-radius: 10px;
    max-width: 315px;
  }
  img + h3 {
    margin-top: 30px;
  }
  h3 + p {
    margin-top: 10px;
  }
}
@media (max-width: 768px) {
  .card {
    img {
      width: 70%;
    }
    img + h3 {
      margin-top: 20px;
    }
  }
}
@media (max-width: 550px) {
  .card h2 {
    padding-top: 10px;
  }
}
</style>
