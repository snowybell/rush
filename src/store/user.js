import create from 'zustand'
import { persist } from './persist'

const userStore = (set) => ({
  token: null,
  setToken: (token) => set({ token })
})

export const useUserStore = create(
  persist(userStore, {
    name: 'persist:user',
    storage: localStorage
  })
)
