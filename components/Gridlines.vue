<script setup>
const props = defineProps(['bot', 'pad']);
</script>

<template>
  <div class="gridline h top"></div>
  <div class="gridline v lt"></div>
  <div class="gridline v rt"></div>
  <div v-if="bot" :class="`gridline h bot ${props.pad}`"></div>
</template>

<style>
.gridlines {
  position: relative;
  padding: var(--grid-margin);
  + .gridlines,
  + .pin-spacer {
    padding-top: 0;
    .gridline.top {
      top: 0px;
    }
  }
  &.col-vpad {
    padding-top: 0;
    padding-bottom: 0;
    .col:not(.nopad) {
      padding-top: var(--grid-margin);
      padding-bottom: var(--grid-margin);
    }
  }
  &.np-bot {
    padding-bottom: 0;
  }
  &.stack {
    padding-left: 0;
    padding-right: 0;
    .col.pad {
      padding-left: 65px;
      padding-right: 65px;
      + .col {
        margin-top: 0;
      }
    }
  }
}
.gridline {
  position: absolute;
  z-index: 20;
  pointer-events: none;

  &.h {
    top: var(--grid-margin);
    left: 0px;
    width: 100%;
    height: 1px;
  }
  &.v {
    width: 1px;
    height: 100%;
    top: 0px;
  }
  &.lt {
    left: var(--grid-margin);
  }
  &.rt {
    right: var(--grid-margin);
  }

  &.bot {
    top: auto;
    &.pad {
      bottom: var(--grid-margin);
    }
    &.nopad {
      bottom: 0px;
    }
  }
}
@media (max-width: 1200px) {
  .gridlines {
    padding: var(--grid-marginM);
    &.col-vpad {
      .col:not(.nopad) {
        padding-top: var(--grid-marginM);
        padding-bottom: var(--grid-marginM);
      }
    }
  }
  .gridline {
    &.h:not(.bot) {
      top: var(--grid-marginM);
    }
    &.lt {
      left: var(--grid-marginM);
    }
    &.rt {
      right: var(--grid-marginM);
    }
    &.bot {
      &.pad {
        bottom: var(--grid-marginM);
      }
    }
  }
}
@media (max-width: 768px) {
  .gridlines {
    padding: var(--grid-marginM2);
    &.col-vpad {
      .col:not(.nopad) {
        padding-top: var(--grid-marginM2);
        padding-bottom: var(--grid-marginM2);
      }
    }
    &.stack {
      .col.pad {
        padding: 20px 43px;
      }
    }
  }
  .gridline {
    &.h:not(.bot) {
      top: var(--grid-marginM2);
    }
    &.lt {
      left: var(--grid-marginM2);
    }
    &.rt {
      right: var(--grid-marginM2);
    }
    &.bot {
      &.pad {
        bottom: var(--grid-marginM2);
      }
    }
  }
}
@media (max-width: 550px) {
  .gridlines {
    &.stack {
      .col.pad {
        padding: 15px 33px;
      }
    }
  }
}
</style>
