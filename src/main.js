import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router.js'
import VueMeta from 'vue-meta'
import i18n from './i18n'

Vue.use(VueMeta)

Vue.config.productionTip = false

// Al primo avvio Vuetify parte dalla lingua salvata dall'utente (di default
// l'italiano): senza questo le sue stringhe interne resterebbero in italiano
// anche riaprendo il sito dopo aver scelto l'inglese.
vuetify.framework.lang.current = i18n.locale

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
