import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = postId => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('posts').doc(postId).get()

      if (!res.exists) {
        throw Error('This post does not exists')
      }

      post.value = {
        ...res.data(),
        id: res.id
      }
    }
    catch (err) {
      error.value = err.message
      console.log(err.message)
    }
  }

  return { post, error, load }
}

export default getPost
