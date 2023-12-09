import { Matkul } from '@/model/matkul'
import { defineStore } from 'pinia'

export const useMatkulStore = defineStore('MatkulStore', {
  state: () => {
    return {
      mk: new Matkul('', '')
    }
  }
})
