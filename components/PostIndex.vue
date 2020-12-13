<template>
  <div class="table">
    <div v-for="post in posts" :key="post.id" class="row">
      <div class="userId">{{ post.userId }}</div>
      <div class="title">{{ post.title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Post from '@/types/Post'

export default Vue.extend({
  name: 'PostIndex',
  props: {
    posts: {
      required: true,
      type: Array as PropType<Post[]>,
    },
  },
})
</script>

<style lang="scss" scoped>
.table {
  background: #fff;
  > .row {
    display: flex;
    border-bottom: solid 2px gray;
    padding: 10px 0;
    > .title {
      font-size: 15px;
      color: #000;
      width: 30%;
    }
  }
}
</style>
