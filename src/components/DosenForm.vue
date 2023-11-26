<template>
  <v-text-field v-model="dosen.nidn" clearable hide-details="auto" label="NIDN"></v-text-field>
  <v-text-field v-model="dosen.nama" clearable hide-details="auto" label="Nama"></v-text-field>
  <v-radio-group v-model="dosen.jenisKelamin" inline label="Jenis Kelamin">
    <v-radio label="Laki-laki" value="true"></v-radio>
    <v-radio label="Perempuan" value="false"></v-radio>
  </v-radio-group>
  <v-col cols="auto">
    <v-btn @click="setSubmit()">Submit</v-btn>
  </v-col>
  <v-alert v-if="isSubmitted" type="success" title="Success">
    Data {{ dosen.nama }} Berhasil Disimpan
  </v-alert>
</template>

<script lang="ts">
import { Dosen } from '@/model/dosen'

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      isSubmitted: false,
      dosen: new Dosen('', '', true)
    }
  },

  computed: {},

  watch: {},

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    setSubmit() {
      this.isSubmitted = true
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {}
}
</script>
