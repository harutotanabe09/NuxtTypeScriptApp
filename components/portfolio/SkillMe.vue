<template>
  <div class="skillheader">
    <h2 class="heading">Skills</h2>
    <div class="chart">
      <pie-chart class="chart" :data="chartdata" :height="300" :width="300" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SkillMe',
  computed: {
    chartdata() {
      return {
        labels: ['Java', 'PHP', 'Python', 'JavaScript'],
        datasets: [
          {
            data: [50, 30, 10, 10],
            backgroundColor: [
              'rgba(19, 52, 237, 1)',
              'rgba(237, 66, 87, 1)',
              'rgba(31, 237, 75, 1)',
              'rgba(237, 185, 19, 1)',
            ],
            borderWidth: 5,
            hoverBorderWidth: 0,
          },
        ],
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.skillheader {
  margin-bottom: 50px;
  .heading {
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 30px;
    color: #3e64ff;
  }
}
.chart {
  width: 500px;
  height: 500px;
}
</style>
