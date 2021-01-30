<template>
  <div class="app-tabs" :class="`-${type}`">
    <transition-group class="slide">
      <div
        v-for="item in items"
        :key="item.label"
        class="item"
        :class="{ '-active': value === item.label }"
        @click="handleClick(item.label)"
      >
        {{ item.name }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { AppTab } from '~/types/appTab'
export default Vue.extend({
  name: 'AppTabs',
  props: {
    value: {
      type: String,
      required: true,
    },
    items: {
      type: Array as PropType<AppTab[]>,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'default',
    },
  },
  methods: {
    handleClick(tab: String) {
      this.$emit('change', tab)
      this.$emit('input', tab)
    },
  },
})
</script>

<style lang="scss" scoped>
.app-tabs {
  display: flex;
  > .slide {
    display: flex;
    > .item {
      padding: 22px 10px;
      margin: 0 18px;
      text-align: center;
      transition-timing-function: ease-out;
      transition-duration: 1s;
      &.-active {
        color: $text-app-tab;
        border-bottom: $border-style 3px $border-app-tab;
        box-shadow: $box-shadow-app-tab;
      }
    }
    &.-block {
      height: $app-tab-block-height;
      background-color: $bg-app-tab-block;
      border-radius: $app-tab-block-height / 2;
      box-shadow: $box-shadow-app-tab-block;
      > .item {
        width: 140px;
        padding: 12px 0;
        margin: 0;
        line-height: $lh-12;
        &.-active {
          color: $text-app-button-primary;
          background: $bg-app-button-primary;
          border-radius: $app-tab-block-height / 2;
          box-shadow: $box-shadow-app-tab;
        }
      }
    }
  }
}
</style>
