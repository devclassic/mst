import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTabbar = defineStore('tabbar', () => {
  const current = ref(0)
  const setCurrent = i => {
    current.value = i
  }
  return { current, setCurrent }
})
