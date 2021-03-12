import { projectFirestore } from "../firebase/config"

const deletePost = () => {
  const removePost = async postId => {
    const res = await projectFirestore.collection('posts').doc(postId).delete()
  }

  return { removePost }
}

export default deletePost
