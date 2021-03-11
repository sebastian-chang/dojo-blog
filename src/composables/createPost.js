const createPost = () => {
  const load = async post => {
    try {
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      })
    }
    catch (err) {
      console.error(err)
    }
  }

  return { load }
}

export default createPost
