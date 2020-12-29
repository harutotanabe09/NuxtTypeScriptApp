<template>
  <div id="about" class="section">
    <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
      <h2 class="mb-4">About Me</h2>
      <p>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia.
      </p>
      <ul>
        <li v-for="(value, name) in object" :key="value.id">
          <span class="name">{{ name }}</span
          >:
          <span class="value">{{ value }}</span>
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
      object: {
        Name: 'Haruto Tanabe',
        Birth: '1989/1/11',
        Address: 'Tokyo',
        Email: 'tana167@yahoo.co.jp',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.pc-layout {
  display: flex;
}
</style>
