<template>
  <div class="container">
    <h1 class="h1title">{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    <input v-model="msg" type="text" />
    <app-button @click="doClick">登録ボタン</app-button>
    <PostComponent :post="post" class="name" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import PostComponent from '~/components/PostComponent.vue'
import AppButton from '~/components/ui/AppButton.vue'

const url = 'https://jsonplaceholder.typicode.com/posts/'

export default Vue.extend({
  components: { PostComponent, AppButton },
  data() {
    return {
      title: 'Axios!',
      msg: '',
      message: 'message',
      post: '', // 初期値を空白
    }
  },
  methods: {
    doClick() {
      axios.get(url + this.msg).then((res) => {
        this.message = 'get ID =' + this.msg
        this.post = res.data
      })
    },
  },
})
</script>

<style type="sass">
.container {
  padding: 5px, 10px;
}
.h1title {
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
