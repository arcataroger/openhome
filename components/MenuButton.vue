<script setup></script>

<template>
  <div class="menu-btn set-theme dk grid-cn">
    <svg width="22" height="19" viewBox="0 0 22 19" class="use-theme">
      <rect x="0.138672" y="7.349" width="4.3389" height="3.61118" />
      <rect x="8.81836" y="7.349" width="4.3389" height="3.61118" />
      <rect x="17.498" y="7.349" width="4.3389" height="3.61118" />
      <rect x="0.138672" y="0.126625" width="4.3389" height="3.61118" />
      <rect x="8.81836" y="0.126625" width="4.3389" height="3.61118" />
      <rect x="17.498" y="0.126625" width="4.3389" height="3.61118" />
      <rect x="0.138672" y="14.5714" width="4.3389" height="3.61118" />
      <rect x="8.81836" y="14.5714" width="4.3389" height="3.61118" />
      <rect x="17.498" y="14.5714" width="4.3389" height="3.61118" />
    </svg>
  </div>
</template>

<style scoped>
.menu-btn {
  position: absolute;
  right: 15px;
  top: 15px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  z-index: 10;
  transition: var(--linear);
  border-width: 1px;
  border-style: solid;
  &.on {
    background-color: var(--black);
  }
}
</style>
