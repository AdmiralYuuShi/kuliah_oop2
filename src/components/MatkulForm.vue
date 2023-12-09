<template>
  <h1>Input Mata Kuliah</h1>
  <v-text-field v-model="kode" clearable hide-details="auto" label="Kode Matkul"></v-text-field>
  <v-text-field v-model="nama" clearable hide-details="auto" label="Nama Matkul"></v-text-field>
</template>

<script lang="ts">
import { Matkul } from '@/model/matkul'

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      kode: '',
      nama: '',
      mk_1: new Matkul('001', 'Object 2'),
      mk_2: new Matkul('002', 'Algo 1')
    }
  },

  computed: {},

  watch: {
    kode(newData) {
      console.log(newData)
      switch (newData) {
        case '001':
          this.nama = this.mk_1.nama
          break
        case '002':
          this.nama = this.mk_2.nama
          break

        default:
          break
      }
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {},

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {}
}
</script>
