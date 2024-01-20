<template>
  <v-container class="py-5">
    <v-data-table :headers="headers" :items="mahasiswa" :sort-by="[{ key: 'npm', order: 'asc' }]">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Daftar Mahasiswa</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <router-link to="/mahasiswa_form">
                <v-btn
                  class="text-none text-subtitle-1 mr-4"
                  color="success"
                  v-bind="props"
                  variant="flat"
                >
                  Tambah Mahasiswa
                </v-btn>
              </router-link>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.npm" label="NPM"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.nama" label="Nama"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.ipk" label="IPK"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Mahasiswa } from '@/model/mahasiswa'
import axios from 'axios'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { title: 'NPM', key: 'npm' },
      { title: 'Nama', key: 'nama' },
      { title: 'IPK', key: 'ipk' }
    ],
    mahasiswa: [new Mahasiswa('a', 'b', 0.0)],
    editedIndex: -1,
    editedItem: new Mahasiswa('', '', 0.0),
    defaultItem: new Mahasiswa('', '', 0.0)
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Tambah Mahasiswa' : 'Edit Mahasiswa'
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    }
  },

  created() {
    this.initialize()
  },

  methods: {
    async initialize() {
      var mhsData: any = []
      let response = await axios.get('http://localhost:3000/mhs/')

      console.log(response.data.data)
      for (const [key, value] of Object.entries<String>(response.data.data) as any) {
        console.log(`${key}: ${value.nama}`)
        mhsData.push(new Mahasiswa(value.npm, value.nama, value.ipk))
      }

      this.mahasiswa = mhsData
    },

    editItem(mhs: Mahasiswa) {
      this.editedIndex = this.mahasiswa.indexOf(mhs)
      this.editedItem = Object.assign({}, mhs)
      this.dialog = true
    },

    deleteItem(item: Mahasiswa) {
      this.editedIndex = this.mahasiswa.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.mahasiswa.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.mahasiswa[this.editedIndex], this.editedItem)
      } else {
        this.mahasiswa.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
