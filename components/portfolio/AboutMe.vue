<template>
  <lazy-div id="aboutheader">
    <p v-if="$fetchState.pending">Loading...</p>
    <div v-else class="out">
      <h2 class="subsection">About Me</h2>
      <ul class="info">
        <li v-for="(value, name) in aboutMe" :key="value.id" class="list">
          <span class="name">{{ name }}</span
          >:
          <span class="value">{{ value }}</span>
        </li>
      </ul>
    </div>
  </lazy-div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AboutMe',
  fetchDelay: 3000,
  props: {
    aboutMe: {
      type: Object,
      required: true,
    },
  },
  async fetch() {},
})
</script>

<style lang="scss" scoped>
#aboutheader {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 1.5rem !important;
  .info {
    font-size: 16px;
    .list {
      list-style: none;
      margin-bottom: 10px;
      .name {
        font-weight: 600;
        color: #000;
        width: 130px;
      }
      .value {
        font-size: 16px;
        line-height: 1.8;
        font-weight: 400;
        color: #999;
      }
    }
  }
}
</style>
