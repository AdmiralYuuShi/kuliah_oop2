import { Dosen } from '@/model/dosen'
import { defineStore } from 'pinia'

export const useDosenStore = defineStore('dosenStore', {
  state: () => {
    return {
      dos: new Dosen('', '', true)
    }
  }
})
