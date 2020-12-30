<template>
  <div id="qualificationheader">
    <h2 class="heading">Qualification</h2>
    <div v-for="item in qualificationMe" :key="item.id" class="row">
      <transition name="home">
        <div class="col">
          <img :src="item.image_uri" class="image" />
          <span class="name">{{ item.name }}</span>
          <div class="detail">{{ item.detail }}</div>
          <div class="date">{{ item.getDate }}</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'QualificationMe',
  props: {
    qualificationMe: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
#qualificationheader {
  .heading {
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 30px;
    color: #3e64ff;
  }
  .col {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    img {
      display: inline;
      width: 50px;
      height: auto;
      .name {
        margin-block-start: 1em;
        margin-block-end: 1em;
      }
      .detail {
        color: #006dcc;
        text-decoration: none;
        transition: color 0.1s linear;
      }
      .date {
        font-weight: bold;
        font-weight: 700;
      }
    }
  }
}
</style>
