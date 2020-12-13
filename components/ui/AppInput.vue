<template>
  <div class="app-input">
    <input
      ref="input"
      :type="type"
      :value="value"
      v-bind="$attrs"
      class="input"
      @change="onChange"
      @input="onInput"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
    <span v-if="suffix" class="suffix">{{ suffix }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    suffix: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    onChange(event: Event) {
      this.$emit('change', (event.target as HTMLInputElement).value)
    },
    onInput(event: Event) {
      this.$emit('input', (event.target as HTMLInputElement).value)
    },
    focus() {
      ;(this.$refs.input as HTMLInputElement).focus()
    },
  },
})
</script>

<style lang="scss" scoped>
.app-input {
  display: inline-block;
  border-radius: $input-border-radius;
  border: $input-border;
  background-color: $input-bg;
  padding: $input-padding;
  max-width: 100%;
  > .input {
    line-height: $input-line-height;
    border: none;
    outline: none;
    width: 100%;
    max-width: 100%;
  }
}
</style>
