<template>
  <v-navigation-drawer
    v-model="sideNav"
    dark
    class="opacity-image"
    fixed
    clipped
    app
    permanent
    :mini-variant="mini"
    v-if="isLogin"
  >
    <v-list data-cy="btn_side_nav">
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        link
        :to="item.link"
      >
        <template v-slot:prepend>
          <v-icon :color="item.color" :icon="item.icon">{{ item.icon }}</v-icon>
        </template>

        <v-list-item-title
          ><span class="text-blue-darken-2">{{ item.title }}</span></v-list-item-title
        >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      sideNav: true,
      mini: false,
      menuItems : [
        {
          icon: 'mdi-monitor-dashboard',
          title: 'Mahasiswa',
          link: '/mahasiswa',
          color: 'orange darken-2'
        },
        {
          icon: 'mdi-api',
          title: 'Mata Kuliah',
          link: '/matkul',
          color: 'green darken-2'
        },
        {
          icon: 'mdi-nature-people',
          title: 'Dosen',
          link: '/dosen',
          color: 'blue darken-2'
        },
      ]

    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  computed: {
    isLogin(){return true}
  },
  methods: {
    test(){
      this.menuItems = [
        {
          icon: 'mdi-monitor-dashboard',
          title: 'Mahasiswa',
          link: '/mahasiswa',
          color: 'orange darken-2'
        }
      ]
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    // const mhs = new Mahasiswa('npm', 'nama', 3)

  }
}
</script>