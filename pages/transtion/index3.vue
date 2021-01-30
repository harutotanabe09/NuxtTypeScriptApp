<template>
  <div class="container">
    <app-tab v-model="currentTab" :items="tabs" class="tabs" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { AppTab } from '~/types/appTab'

export default Vue.extend({
  data(): {
    tabs: AppTab[]
    currentTab: String
  } {
    return {
      currentTab: 'basic',
      tabs: [
        {
          name: 'タブ1',
          label: 'tab1',
        },
        {
          name: 'タブ2',
          label: 'tab2',
        },
        {
          name: 'タブ3',
          label: 'tab3',
        },
      ],
    }
  },
})
</script>

<style type="scss" scoped>
.container {
  padding: 5px, 10px;
  background: burlywood;
}

.animation-leave-active,
.animation-enter-active {
  transition: 1s;
}
</style>
