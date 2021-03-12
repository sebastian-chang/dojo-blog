<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="onDelete" class='delete'>Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner'
import DeletePost from '../composables/deletePost'

import { useRouter } from 'vue-router'

export default {
  props: ['id'],
  components: { Spinner },
  setup (props) {
    const router = useRouter()
    const { post, error, load } = getPost(props.id)

    load()

    const onDelete = () => {
      const { removePost } = DeletePost()
      removePost(props.id)

      router.push('/')
    }

    return { post, error, onDelete }
  }

}
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete{
  margin: 10px auto;
}
</style>
