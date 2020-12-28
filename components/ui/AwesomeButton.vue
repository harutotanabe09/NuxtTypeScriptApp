<template>
  <button :style="{ backgroundColor: color }">
    {{ label }}
  </button>
</template>

<script type="sass">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: 'Awesome Button'
    },
    color: {
      type: String,
      default: '#f0f0f0'
    }
  }
})
</script>

<style scoped>
button {
  border: none;
  padding: 10px;
}
</style>
