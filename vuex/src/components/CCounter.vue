<template>
  <div class="card card-body m-4">
    <h3>Composition API + Vuex</h3>
    <h5 class="text-center">{{ counter }} x 2 = {{ times2 }}</h5>
    <button class="btn btn-primary" @click="inc">Increment</button>
  </div>
</template>

<script>
//import { useState, useGetters, useMutations } from '@/helpers'

import {computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()//this.$store 
    const counter = computed(() => store.state.counter)
    const times2 = computed(()=> store.getters.times2)
    const inc = ()=>store.commit('setCounter',counter.value+1)
    // const { counter } = useState(['counter'])
    // const { times2 } = useGetters(['times2'])
    // const { setCounter } = useMutations(['setCounter'])
    // const inc = () => setCounter(counter.value + 1)
    return { inc, counter, times2 }
  }
}
</script>
