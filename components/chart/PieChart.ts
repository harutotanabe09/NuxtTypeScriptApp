import Vue from 'vue'
import { generateChart } from 'vue-chartjs'

export const PieChart = generateChart('pie-chart', 'doughnut')

export default Vue.extend({
  name: 'PieChart',
  extends: PieChart,
  props: {
    data: {
      required: true,
      type: Object,
    },
    options: {
      required: false,
      type: Object,
    },
  },

  mounted() {
    ;(this as InstanceType<typeof PieChart>).renderChart(
      this.data,
      this.options
    )
  },

  methods: {
    regenerateChart() {
      ;(this as InstanceType<typeof PieChart>).renderChart(
        this.data,
        this.options
      )
    },
  },
})