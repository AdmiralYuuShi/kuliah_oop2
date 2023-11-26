import { createRouter, createWebHistory } from 'vue-router'
import MhsView from '../views/MahasiswaView.vue'
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
      path: '/matkul_entry',
      name: 'matkul',
      component: MatkulView
    },
    {
      path: '/dosen_entry',
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
