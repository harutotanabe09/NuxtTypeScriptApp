<template>
  <div class="layout">
    <div class="body">
      <app-header />
      <Nuxt class="content" />
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
</style>
