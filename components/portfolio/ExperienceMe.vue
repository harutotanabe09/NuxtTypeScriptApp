<template>
  <div id="exprericenceheader">
    <p v-if="$fetchState.pending" class="loading">Loading...</p>
    <div v-else class="loaded">
      <h2 class="heading">Experience</h2>
      <div v-for="item in experienceMe" :key="item.id" class="resume-wrap">
        <div class="icon d-flex align-items-center justify-content-center">
          <span class="flaticon-ideas"></span>
        </div>
        <div class="text">
          <div class="date">{{ item.date }}</div>
          <h2 class="contents">{{ item.contents }}</h2>
          <div class="position">{{ item.position }}</div>
          <p class="message">
            {{ item.message }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ExperienceMe',
  fetchDelay: 5000,
  props: {
    experienceMe: {
      type: Array,
      required: true,
    },
  },
  async fetch() {},
})
</script>

<style lang="scss" scoped>
#exprericenceheader {
  font-size: 50px;
  font-weight: 700;
  > .loaded {
    > .heading {
      font-weight: 800;
      font-size: 30px;
      margin-bottom: 30px;
      color: #3e64ff;
    }
    > .resume-wrap {
      width: 100%;
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 10px;
      > .text {
        > .date {
          font-weight: 700;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.6);
          color: #3e64ff;
        }
        > .title {
          font-size: 24px;
          font-weight: 700;
        }
        > .position {
          font-size: 18px;
          font-weight: 700;
          color: #000;
        }
        > .message {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 16px;
          color: #999;
        }
      }
    }
  }
}
</style>
