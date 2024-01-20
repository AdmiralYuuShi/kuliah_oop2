<template>
  <v-container>
    <h1>Input Mahasiswa</h1>
    <v-row>
      <v-text-field
        class="px-3 pt-3"
        v-model="mhs.npm"
        clearable
        hide-details="auto"
        label="NPM"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field
        class="px-3 pt-2"
        v-model="mhs.nama"
        clearable
        hide-details="auto"
        label="Nama"
      ></v-text-field>
    </v-row>
    <v-row>
      <v-text-field
        class="px-3 pt-2"
        v-model="mhs.ipk"
        clearable
        hide-details="auto"
        label="IPK"
      ></v-text-field>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { useMhsStore } from '@/stores/mahasiswa';
import { mapWritableState } from 'pinia';

export default {
  data: () => ({
    count: 0,
  }),

  methods: {
    increment() {
      this.count++;
    }
  },

  computed: {
    ...mapWritableState(useMhsStore, ['mhs']),
  },
}
</script>
