<template>
  <div id="about" class="section">
    <about-me class="about" :about-me="aboutRes"></about-me>
    <experience-me
      class="experience"
      :experience-me="experienceRes"
    ></experience-me>
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
      experienceRes: [
        {
          date: '2018-2019',
          contents: 'Tester',
          position: 'Member',
          message:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        },
        {
          date: '2017-2013',
          contents: 'Salesfroce Enginner',
          position: 'Member',
          message:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        },
      ],
    }
  },
})
</script>
<style lang="scss" scoped>
.section {
  padding-left: 3rem !important;
  width: 100%;
}
</style>
