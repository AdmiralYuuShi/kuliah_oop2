<template>
  <TopNav></TopNav>
  <LeftNav></LeftNav>
  <MahasiswaForm></MahasiswaForm>
  <v-container>
    <h3>Editing : {{ mhs.nama }}</h3>
  </v-container>
  <FootNav></FootNav>
</template>

<script setup lang="ts">
import MahasiswaForm from '@/components/MhsForm.vue'
import TopNav from '@/components/TopNav.vue'
import LeftNav from '@/components/LeftNav.vue'
import FootNav from '@/components/FootNav.vue' 
import { mapState } from 'pinia'
import { useMhsStore } from '@/stores/mahasiswa' 
</script>

<script lang="ts">
export default {
  computed: {
    ...mapState(useMhsStore, ['mhs'])
  }
}
</script>
