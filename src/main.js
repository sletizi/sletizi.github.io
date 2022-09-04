import Vue from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify/lib'
import router from './router.js'
import tagsBall from 'vue-tags-ball'
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";
import VueCustomElement from 'vue-custom-element';
import CodersrankSummary from '@codersrank/summary'
import { firestorePlugin } from 'vuefire'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

const vuetify = new Vuetify({
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

Vue.use(firestorePlugin)
Vue.use(Vuetify)

Vue.config.ignoredElements = [
  'codersrank-summary'
];

Vue.use(VueCustomElement)

// register web component as <codersrank-summary> element
Vue.customElement('codersrank-summary', CodersrankSummary)
Vue.config.productionTip = false

new Vue({
  vuetify,
  tagsBall,
  router, 
  render: h => h(App)
}).$mount('#app')




