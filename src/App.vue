<template>
  <v-app light>
    <custom_app_bar/>
    <router-view/>
    <customFooter/>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import { bcp47 } from '@/i18n'

export default {
  name: 'App',
  // og:image, description & co. stanno in public/index.html: devono essere
  // statici per i crawler social. Qui restano il titolo del tab, la lingua
  // del documento e la description, che seguono il toggle IT/EN.
  metaInfo() {
      return {
          // Ogni view dichiara il proprio titolo; la home non ne dichiara nessuno
          // e ricade sul solo nome.
          titleTemplate: (chunk) => (chunk ? chunk + ' · Simone Letizi' : 'Simone Letizi'),
          htmlAttrs: {
              lang: bcp47(this.$i18n.locale)
          },
          meta: [{
              vmid: 'description',
              name: 'description',
              content: this.$t('meta.siteDescription')
          }]
      }
  },
  components: {
    'custom_app_bar' : AppBar,
    'customFooter' : Footer
  },
  data: () => ({
    showNav: false,
  }),
};
</script>
