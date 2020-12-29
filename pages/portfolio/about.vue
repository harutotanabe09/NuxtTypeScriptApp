<template>
  <div id="about" class="section">
    <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
      <h1 class="big">About</h1>
      <h2 class="mb-4">About Me</h2>
      <p>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia.
      </p>
      <ul class="about-info mt-4 px-md-0 px-2">
        <li class="d-flex">
          <span>Name:</span> <span>{{ portfolio.name }}</span>
        </li>
        <li class="d-flex">
          <span>Date of birth:</span> <span>November 28, 1989</span>
        </li>
        <li class="d-flex">
          <span>Address:</span> <span>San Francisco CA 97987 USA</span>
        </li>
        <li class="d-flex"><span>Zip code:</span> <span>1000</span></li>
        <li class="d-flex">
          <span>Email:</span> <span>ronaldo@gmail.com</span>
        </li>
        <li class="d-flex">
          <span>Phone: </span> <span>+1-2234-5678-9-0</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      portfolio: [{ name: 'Haruto Tanabe' }],
    }
  },
})
</script>

<style type="sass">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
