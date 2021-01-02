import { persist as createPersist } from 'zustand/middleware'

// Ignore type validation warnings
export const persist = (store, config) => {
  return createPersist(store, config)
}
