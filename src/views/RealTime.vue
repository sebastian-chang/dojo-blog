<template>
  <h1>Real Time Data</h1>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
      <!-- <SinglePost :post="post" /> -->
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
export default {
  setup () {
    const posts = ref([])

    projectFirestore.collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        const docs = snap.docs.map(doc => (
          {
            ...doc.data(),
            id: doc.id,
          }
        ))
        posts.value = docs
      })

    return { posts }
  }
}
</script>

<style>
</style>
