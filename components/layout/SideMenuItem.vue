<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <transition name="slide">
      <div v-show="isOpen" class="opened">
        <div class="label">{{ item.label }}</div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

interface Item {
  label: string
  path: string
  icon: string
  submenus?: Item[]
}

export default Vue.extend({
  name: 'SideMenuItem',
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
    item: {
      type: Object as PropType<Item>,
      required: true,
    },
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
.nuxt-link-active {
  color: red;
}
</style>
