import { Mahasiswa } from '@/model/mahasiswa'
import { defineStore } from 'pinia'

export const useMhsStore = defineStore('mhsStore', {
  state: () => {
    return {
      mhs: new Mahasiswa('', '', 0)
    }
  }
})
