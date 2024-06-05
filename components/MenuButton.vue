<script setup></script>

<template>
  <div class="menu-btn">
    <div class="menu-line top"></div>
    <div class="menu-line mid"></div>
    <div class="menu-line bot"></div>
  </div>
</template>

<style scoped>
.menu-btn {
  position: absolute;
  left: 50%;
  top: -40px;
  width: 85px;
  height: 85px;
  transform: translateX(-50%);
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: var(--linear);
  background-color: rgba(0, 0, 0, 0.7);
}
.menu-line {
  width: 30px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 65%;
  margin-left: -15px;
  transition: var(--ease-out);
  &:nth-child(1) {
    transform: translateY(-8px);
  }
  &:nth-child(3) {
    transform: translateY(8px);
  }
}
@media (max-width: 768px) {
  .menu-btn {
    width: 55px;
    height: 55px;
    top: -23px;
    .menu-line {
      width: 20px;
      margin-left: -10px;
    }
  }
}
</style>
