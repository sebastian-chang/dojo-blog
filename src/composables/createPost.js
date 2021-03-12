import { projectFirestore } from "../firebase/config"

const createPost = () => {
  const create = async post => {
    const res = await projectFirestore.collection('posts').add(post)
  }

  return { create }
}

export default createPost
