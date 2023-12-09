import { createRouter, createWebHistory } from 'vue-router'
import MhsView from '../views/MahasiswaView.vue'
import MhsFormView from '../views/MahasiswaFormView.vue'
import MatkulView from '../views/MatkulView.vue'
import DosenView from '../views/DosenView.vue'
import KendaraanView from '../views/KendaraanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MhsView
    },
    {
      path: '/mahasiswa',
      name: 'Mahasiswa',
      component: MhsView
    },
    {
      path: '/mahasiswa_form',
      name: 'Form Mahasiswa',
      component: MhsFormView
    },
    {
      path: '/matkul',
      name: 'matkul',
      component: MatkulView
    },
    {
      path: '/dosen',
      name: 'Dosen',
      component: DosenView
    },
    {
      path: '/kendaraan',
      name: 'Kendaraan',
      component: KendaraanView
    }
  ]
})

export default router
