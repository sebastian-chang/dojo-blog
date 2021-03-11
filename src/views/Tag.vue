<template>
  <h1>{{ tag }}</h1>
  <div class="tag">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filtered" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import TagCloud from '../components/TagCloud'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: ['tag'],
  components: { PostList, Spinner, TagCloud },
  setup (props) {
    const route = useRoute()
    const { posts, error, load } = getPosts()

    load()

    const filtered = computed(() => {
      return posts.value.filter(post => post.tags.includes(props.tag))
    })

    return { posts, error, filtered }
  }
}
</script>

<style>
.tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
