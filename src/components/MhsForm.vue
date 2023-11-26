<template>
  <v-row>
    <v-text-field
      v-model="firstName"
      clearable
      hide-details="auto"
      label="Fisrt name"
    ></v-text-field>
  </v-row>
  <v-row>
    <v-text-field v-model="lastName" clearable hide-details="auto" label="Last name"></v-text-field>
  </v-row>
</template>

<script lang="ts">
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
      firstName: 'Hapid',
      lastName: 'Moch'
    }
  },

  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },

  watch: {
    firstName(newData) {
      if (newData == 'Hapid') this.lastName = 'Jamil'
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>
