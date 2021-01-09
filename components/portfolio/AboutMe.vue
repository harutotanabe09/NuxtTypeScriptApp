<template>
  <div id="aboutheader">
    <img :src="image" class="image" />
    <div class="out">
      <span class="subsection">About Me</span>
      <div class="container">
        <nuxt-link to="/other">MOVE</nuxt-link>
      </div>
      <transition name="fade">
        <span v-if="show">/////</span>
      </transition>
      <ul class="info">
        <li v-for="(value, name) in aboutMe" :key="value.id" class="list">
          <span class="name">{{ name }}</span
          >:
          <span class="value">{{ value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AboutMe',
  transition: {
    name: 'fade',
  },
  props: {
    aboutMe: {
      type: Object,
      required: true,
    },
  },
  data(): {} {
    return {
      show: false,
      image: '/img/animal_fukurou.png',
    }
  },
})
</script>

<style lang="scss" scoped>
#aboutheader {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 1.5rem !important;
  > .image {
    display: inline;
    width: 250px;
    height: auto;
  }
  > .out {
    padding: 3rem !important;
    display: inline-block;
    > .fade-enter {
      opacity: 0;
    }
    > .fade-enter-active {
      transition: opacity 0.7s;
    }
    > .info {
      font-size: 16px;
      > .list {
        list-style: none;
        margin-bottom: 10px;
        > .name {
          font-weight: 600;
          color: #000;
          width: 130px;
        }
        > .value {
          font-size: 16px;
          line-height: 1.8;
          font-weight: 400;
          color: #999;
        }
      }
    }
  }
}
</style>
