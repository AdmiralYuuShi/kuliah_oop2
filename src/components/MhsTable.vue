<template>
  <v-container class="py-5">
    <div class="d-flex justify-space-between">
      <v-sheet class="ma-2 pa-2">
        <h1>Daftar Mahasiswa</h1>
      </v-sheet>
      <v-sheet class="ma-2 pa-2">
        <router-link to="/mahasiswa_form">
          <v-btn class="text-none text-subtitle-1" color="success" variant="flat">
            Tambah Mahasiswa
          </v-btn>
        </router-link>
      </v-sheet>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">NPM</th>
          <th class="text-left">Nama</th>
          <th class="text-left">IPK</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mhs in mahasiswa" :key="mhs.npm ?? ''">
          <td>{{ mhs.npm }}</td>
          <td>{{ mhs.nama }}</td>
          <td>{{ mhs.ipk }}</td>
          <td>
            <router-link to="/mahasiswa_form">
              <v-btn class="text-none text-subtitle-1" color="primary" variant="flat"> Edit </v-btn>
            </router-link> | 
            <router-link to="/mahasiswa_form">
              <v-btn class="text-none text-subtitle-1" color="red" variant="flat"> Delete </v-btn>
            </router-link>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts">
import { Mahasiswa } from '@/model/mahasiswa'

export default {
  data() {
    return {
      mahasiswa: [
        new Mahasiswa('123', 'Ran', 27.4),
        new Mahasiswa('124', 'Rin', 29.9),
        new Mahasiswa('125', 'Ren', 32.4),
        new Mahasiswa('126', 'Ron', 36.1),
        new Mahasiswa('127', 'Len', 31.8),
        new Mahasiswa('128', 'Lan', 26.2)
      ]
    }
  }
}
</script>
