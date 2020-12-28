<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <PostIndex :posts="posts" class="name" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const url = 'https://jsonplaceholder.typicode.com/posts/'

export default Vue.extend({
  async asyncData({ $axios }) {
    const rese = await $axios.get(url)
    return {
      isLoading: false,
      posts: rese.data,
    }
  },
  data() {
    return {
      title: 'Axios!',
      message: 'essage',
    }
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
