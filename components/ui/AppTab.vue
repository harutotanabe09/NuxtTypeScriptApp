<template>
  <div class="app-tabs" :class="`-${type}`">
    <div
      v-for="(item, index) in items"
      :key="item.label"
      ref="tab"
      class="item"
      :class="{ '-active': value === item.label }"
      @click="handleClick(index, item.label)"
    >
      {{ item.name }}
    </div>
    <div class="slider" :style="slide.style"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import consola from 'consola'
import { AppTab } from '~/types/appTab'
export default Vue.extend({
  name: 'AppTabs',
  data(): {} {
    return {
      activetab: 0,
      tabwidth: 100,
      slide: {
        style: {
          width: 0,
          transform: 0,
        },
      },
    }
  },
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
  mounted() {
    this.$data.slide.style.width = this.$refs.tab[0].clientWidth + 20 + 'px'
    consola.info(this.$data.slide.style.width)
  },
  methods: {
    handleClick(index: number, tab: String) {
      this.$emit('change', tab)
      this.$emit('input', tab)
      this.$data.slide.style.transform =
        'translateX(' + index * this.$data.tabwidth + 'px)'
    },
  },
})
</script>

<style lang="scss" scoped>
.app-tabs {
  display: flex;
  position: relative;
  > .item {
    padding: 22px 10px;
    margin: 0 18px;
    text-align: center;
    &.-active {
      color: $text-app-tab;
      border-bottom: $border-style 3px $border-app-tab;
      box-shadow: $box-shadow-app-tab;
    }
  }
  > .slider {
    transition: 0.5s ease;
    position: absolute;
    bottom: 0;
    height: 100%;
    // TODO 高さが直打ちになる
    background: #38b48b70;
  }
}
</style>
