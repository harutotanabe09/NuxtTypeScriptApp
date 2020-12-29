<template>
  <footer class="app-footer">
    <div class="copyright">
      Copyright © @{{ new Date().getFullYear() }} All rights reserved
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppFooter',
})
</script>

<style lang="scss" scoped>
.app-footer {
  height: $footer-height;
  line-height: $footer-height;
  background-color: $dark-blue-color;
  display: flex;
  justify-content: space-between;
  color: $white-color;
  font-size: $small-font-size;
  > .menu {
    > .item {
      display: inline-block;
      padding: 0 10px;
      border-left: solid 1px $white-color;
    }
  }
}
</style>
