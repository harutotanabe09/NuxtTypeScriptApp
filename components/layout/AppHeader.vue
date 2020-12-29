<template>
  <header class="app-header"></header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppHeader',
})
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
}
</style>
