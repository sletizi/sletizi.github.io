import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
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
