<template>
  <div id="about" class="section">
    <about-me class="about" :about-me="aboutRes"></about-me>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'index',
  data() {
    return {
      aboutRes: {
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
.section {
  width: 100%;
}
</style>
