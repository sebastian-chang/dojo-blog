<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click Me</button>
    <button @click="age++">Get Older</button>
    <input type="text" v-model="name" >
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Home',
  setup () {



    console.log('SETUP')
    const name = ref('Sebastian')
    const age = ref(36)

    const p = ref(null)

    const handleClick = () => {
      name.value = 'Imposter'
    }

    return {
      name,
      age,
      handleClick,
      p,
    }
  },
  created () {
    console.log('CREATED')
  },
  mounted () {
    console.log('MOUNTED')
  }
}
</script>
