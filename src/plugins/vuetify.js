import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import it from 'vuetify/lib/locale/it'
import en from 'vuetify/lib/locale/en'

Vue.use(Vuetify)

export default new Vuetify({
  // Stringhe interne di Vuetify (frecce dei caroselli, paginazione...):
  // le cambia il toggle di lingua insieme a quelle del sito.
  lang: {
    locales: { it, en },
    current: 'it',
  },
  theme: {
    themes: {
      light: {
        primary: '#a1a499',
        secondary: '#a8a599',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
})
