import { action } from '@storybook/addon-actions'

export default {
  title: 'AppInput',
}

export const MyInputButton = ({ label }) => ({
  template:
    '<AppInput @click.native="clickme" :label="label" :color="color" />',
  props: {
    label: {
      default: label,
    },
    color: {
      default: '#f6bfbc',
    },
  },
  methods: {
    clickme() {
      action('button-click')()
    },
  },
})

MyInputButton.argTypes = {
  label: {
    type: { name: 'string' },
    defaultValue: 'Input button',
  },
  color: { control: 'color' },
  value: 'test',
}
