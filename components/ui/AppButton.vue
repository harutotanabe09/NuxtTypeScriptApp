<template>
  <button
    class="app-button"
    :class="{
      '-default': type === 'default',
      '-primary': type === 'primary',
    }"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
})
</script>

<style lang="scss" scoped>
.app-button {
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  background-color: brown;
}
</style>
