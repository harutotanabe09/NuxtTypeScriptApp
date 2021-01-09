<template>
  <div class="layout">
    <div class="body">
      <app-header />
      <transition name="page" appear>
        <Nuxt class="content" />
      </transition>
      <app-footer />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.body {
  width: 1500px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
