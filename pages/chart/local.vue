<template>
  <div class="small">
    <pie-chart class="chart" :data="chartdata" :height="300" :width="300" />
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
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

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
