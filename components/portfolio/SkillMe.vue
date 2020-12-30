<template>
  <div id="skillheader">
    <h2 class="heading">Skills</h2>
    <div v-for="item in skillMe" :key="item.id" class="row">
      <transition name="home">
        <div class="col">
          <div class="round">
            <h2 class="item">{{ item.name }}</h2>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SkillMe',
  props: {
    skillMe: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.transition-enter-active,
.transition-leave-active {
  transition: opacity 0.5s;
}
.transition-enter,
.transition-leave-active {
  opacity: 0;
}
#skillheader {
  .heading {
    font-weight: 800;
    font-size: 30px;
    margin-bottom: 30px;
    color: #3e64ff;
    .item {
      font-weight: 800;
      font-size: 30px;
      margin-bottom: 30px;
      color: #3e64ff;
    }
  }
}
</style>
