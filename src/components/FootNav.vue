<template>
  <!-- Footer -->
  <v-footer app inset outlined tile dark>
    <v-col cols="6">
      <v-row>
        <v-btn
          v-for="item in linkFooter"
          :key="item.title as any"
          @click="toMarkdownFooter(item) as any"
          variant="text"
        >
          {{ item.title }}
        </v-btn>
      </v-row>
    </v-col>
    <v-col cols="6">
      <v-row>
        <v-spacer></v-spacer>
        <div class="text-body-1 pt-2 black--text text--darken-2">
          Copyright © {{ new Date().getFullYear() }} — <strong>Sistem perkuliahan</strong>
        </div>
        <v-tooltip location="top" v-for="item in iconsFooter" :key="item.icon">
          <template v-slot:activator="{ props }">
            <v-btn
              class="mx-4"
              @click="goToNewPage(item.link)"
              v-bind="props"
              :color="item.color"
              :icon="item.icon"
            >
            </v-btn>
          </template>
          <span>{{ item.text }}</span>
        </v-tooltip>
      </v-row>
    </v-col>
  </v-footer>
</template>
<script lang="ts">
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      linkFooter : [
      {
        title: 'CONTACT',
        link: '/contact',
        markdownPath: './Markdown/GeneralInfo/contact.md',
        data_cy: 'bottom_item_contact'
      },
      {
        title: 'FAQ',
        link: '/faq',
        markdownPath: './Markdown/GeneralInfo/FAQ.vue',
        data_cy: 'bottom_item_faq'
      },
      {
        title: 'PRIVACY POLICY',
        link: '/privacy-policy',
        markdownPath: './Markdown/GeneralInfo/privacy_policy.md',
        data_cy: 'bottom_item_privacy_policy'
      },
      {
        title: 'TERM OF USE',
        link: '/term-of-use',
        markdownPath: './Markdown/GeneralInfo/term_of_use.md',
        data_cy: 'bottom_item_terms_of_use'
      },
      {
        title: 'GUIDE',
        link: '/guide',
        markdownPath: './Markdown/GeneralInfo/guide.vue',
        data_cy: 'bottom_item_guide'
      }
    ],
    iconsFooter : [
      {
        link: 'https://instagram.com/widyatama',
        icon: 'mdi-instagram',
        text: 'Instagram Gantteng',
        color: 'pink'
      },
      {
        link: 'https://www.linkedin.com/company/widyatama/',
        icon: 'mdi-linkedin',
        text: 'Linkedin',
        color: 'blue'
      }
    ]

    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    toMarkdownFooter(item: any) {},
    goToNewPage(item: string) {}
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    // const mhs = new Mahasiswa('npm', 'nama', 3)
  }
}
</script>