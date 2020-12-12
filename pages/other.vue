<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: 'Other!',
      message: 'Message',
    }
  },
})
</script>

<style type="sass">
.container {
  padding: 5px, 10px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 60pt;
  color: #345980;
}
.pre {
  padding: 10px;
  font-size: 18px;
  background-color: #efefef;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
