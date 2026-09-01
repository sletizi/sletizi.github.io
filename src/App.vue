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

export default {
  name: 'App',
  // og:image, description & co. stanno in public/index.html: devono essere
  // statici per i crawler social. Qui resta solo il titolo del tab.
  metaInfo: {
      // Ogni view dichiara il proprio titolo; la home non ne dichiara nessuno
      // e ricade sul solo nome.
      titleTemplate: (chunk) => (chunk ? chunk + ' · Simone Letizi' : 'Simone Letizi'),
      meta: [{
          vmid: 'description',
          name: 'description',
          content: "Il sito personale di Simone Letizi: i progetti su cui lavoro, il percorso fra dati e insegnamento, e un po' di vita fuori dallo schermo."
      }]
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
