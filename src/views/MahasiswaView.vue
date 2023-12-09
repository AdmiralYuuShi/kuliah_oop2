<template>
  <TopNav></TopNav>
  <LeftNav></LeftNav>
  <MahasiswaTable></MahasiswaTable>
  <FootNav></FootNav>
</template>

<script setup lang="ts">
import { mapWritableState } from 'pinia'
import { useMhsStore } from '../stores/mahasiswa'

import MahasiswaTable from '@/components/MhsTable.vue'
import TopNav from '@/components/TopNav.vue'
import LeftNav from '@/components/LeftNav.vue'
import FootNav from '@/components/FootNav.vue'
</script>

<script lang="ts">
export default {
  computed: {
    ...mapWritableState(useMhsStore, ['mhs']),
  },
}
</script>
