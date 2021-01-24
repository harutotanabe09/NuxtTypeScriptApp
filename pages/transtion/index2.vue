<template>
  <div class="app">
    <button @click="show = !show">Toggle</button>
    <transition name="slide">
      <p v-if="show">{{ message }}</p>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sample',
  layout: 'normal',
  data() {
    return {
      message: 'Click for slide',
      show: true,
    }
  },
})
</script>

<style lang="scss" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
