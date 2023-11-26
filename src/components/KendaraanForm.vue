<template>
  <v-select label="Type" v-model="kendaraan.tipe" :items="['Motor', 'Mobil']"></v-select>
  <v-text-field v-model="kendaraan.kode" clearable hide-details="auto" label="Kode"></v-text-field>
  <v-text-field v-model="kendaraan.cc" clearable hide-details="auto" label="CC"></v-text-field>
  <v-text-field
    v-model="kendaraan.hargaBeli"
    clearable
    hide-details="auto"
    type="number"
    label="Harga Beli"
  ></v-text-field>
  <v-text-field
    v-model="kendaraan.keuntungan"
    clearable
    hide-details="auto"
    type="number"
    label="Keuntungan %"
  ></v-text-field>
  <v-col cols="auto">
    <v-btn @click="setSubmit()">Submit</v-btn>
  </v-col>
  <v-alert v-if="isSubmitted" type="success" title="Berhasil disimpan">
    Harga Jual : {{ hargaJual }}
  </v-alert>
</template>

<script lang="ts">
import { Kendaraan } from '@/model/kendaraan'

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.

  data() {
    return {
      ppn: 10,
      ppnBn: 10,
      hargaJual: 0,
      hargaBeli: 0,
      isSubmitted: false,
      kendaraan: new Kendaraan('Motor', '', 0, 0, 0)
    }
  },

  computed: {},

  watch: {},

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    setSubmit() {
      let beli: number = parseFloat(`${this.kendaraan.hargaBeli}`)
      let totalPpn: number = (beli * this.ppn) / 100
      let totalPpnBn: number = (beli * this.getPpnBn()) / 100
      let total: number = beli + totalPpn + totalPpnBn
      let totalKeuntungan: number = this.kendaraan.keuntungan / 100
      this.hargaJual = total + totalKeuntungan
      this.isSubmitted = true
    },

    getPpnBn(): number {
      let ppnBn = 0
      let currentCC = this.kendaraan.cc

      switch (this.kendaraan.tipe) {
        case 'Mobil':
          if (currentCC > 1500 && currentCC < 2000) {
            ppnBn = 20
          } else if (currentCC >= 1500) {
            ppnBn = 50
          }
          break
        case 'Motor':
          if (currentCC > 250 && currentCC < 500) {
            ppnBn = 20
          } else if (currentCC >= 500 && currentCC < 1000) {
            ppnBn = 30
          } else if (currentCC >= 1000) {
            ppnBn = 50
          }
          break
      }

      return ppnBn
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {}
}
</script>
