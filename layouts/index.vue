<template>
  <div class="pc-layout">
    <side-menu class="side" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      user: {},
    }
  },
})
</script>

<style lang="scss" scoped>
.pc-layout {
  display: flex;
  > .side {
    align-self: stretch;
    z-index: 1;
  }
  > .body {
    width: calc(100vw - #{$side-menu-width} - #{$content-margin-left});
    > .content {
      margin: 20px;
      min-height: calc(100vh - #{$header-height} - #{$footer-height} - 71px);
    }
    > .footer {
      padding-left: $content-margin-left;
      margin-top: 51px;
    }
  }
}
</style>
