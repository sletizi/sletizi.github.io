import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router.js'
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";
import VueCustomElement from 'vue-custom-element';
import CodersrankSummary from '@codersrank/summary'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.config.ignoredElements = [
  'codersrank-summary'
];

Vue.use(VueCustomElement)

// register web component as <codersrank-summary> element
Vue.customElement('codersrank-summary', CodersrankSummary)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router, 
  render: h => h(App)
}).$mount('#app')




