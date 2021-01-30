<template>
  <div class="app">
    <button @click="show = !show">Toggle</button>
    <transition name="slide-left">
      <p v-if="show">{{ message }}</p>
    </transition>
    <hr />
    <button @click="show = !show">Toggle2{{ show }}</button>
    <transition name="slide-right">
      <p v-if="show">{{ message }}</p>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sample',
  layout: 'normal',
  transition(to, from) {
    if (to.name === from?.name) {
      return 'slide-in'
    }
    return 'slide'
  },
  data() {
    return {
      message: 'Click for slide',
      show: true,
    }
  },
})
</script>

<style lang="scss" scoped>
.app {
  /**
  * slide-left
  */
  .slide-left-leave-active,
  .slide-left-enter-active {
    transition: 1s;
  }
  .slide-left-enter {
    transform: translate(100%, 0);
  }
  > .slide-left-leave-to {
    transform: translate(-100%, 0);
  }
  > .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-right-in-enter-active {
    transition: width 0.2s;
  }
  > .slide-right-enter,
  .slide-right-leave-to,
  .slide-right-in-enter,
  .slide-right-in-leave-to {
    width: 0;
  }
}
</style>
