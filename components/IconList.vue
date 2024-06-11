<script setup>
const items = [
  { icon: 'icons/capability-icon.svg', text: 'Instant Translation' },
  { icon: 'icons/capability-icon.svg', text: 'Emotion Detection' },
  { icon: 'icons/capability-icon.svg', text: 'Calendar and Scheduling' },
  { icon: 'icons/capability-icon.svg', text: 'Music and Media Control' },
  { icon: 'icons/capability-icon.svg', text: 'Natural Conversation Handling' },
  { icon: 'icons/capability-icon.svg', text: 'Educational Modules' },
  { icon: 'icons/capability-icon.svg', text: 'Personality Builder' },
];
</script>

<template>
  <div class="icon-list">
    <div v-for="(item, key) in items" class="icon-list-item auto">
      <div class="list-icon">
        <img :src="item.icon" alt="" />
      </div>
      <h4>{{ item.text }}</h4>
    </div>
  </div>
</template>

<style scoped>
.icon-list {
  border-radius: 20px;
  background-color: #0a0100;
  /*   border: 1px solid rgba(255, 255, 255, 0.2);
 */
  padding: 0 10px;
}
.icon-list-item {
  width: 100%;
  padding: 12px 0;
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: center;
  .list-icon {
    border-radius: 7px;
    overflow: hidden;
    width: 60px;
  }
  + .icon-list-item {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }
  &:nth-child(3n + 1) {
    .list-icon {
      background-color: var(--purple);
    }
  }
  &:nth-child(3n + 2) {
    .list-icon {
      background-color: var(--orange);
    }
  }
  &:nth-child(3n + 3) {
    .list-icon {
      background-color: var(--aqua);
    }
  }
}
@media (min-width: 900px) {
  .icon-list-item {
    max-width: 525px;
  }
}
</style>
