import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

// Rotte secondarie caricate on demand: tengono fuori dal bundle iniziale
// dipendenze pesanti come il viewer PDF della pagina progetti.
const About = () => import(/* webpackChunkName: "about" */ "./views/About.vue");
const Contacts = () => import(/* webpackChunkName: "contact" */ "./views/Contact.vue");
const Projects = () => import(/* webpackChunkName: "projects" */ "./views/Projects.vue");

Vue.use(VueRouter);


export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: 'Simone Letizi personal website - Home page',
        metaTags: [
          {
            name: 'description',
            content: 'Experiences, Skills, CV'
          },
          {
            property: 'og:description',
            content: 'Experiences, Skills, CV'
          },
          {
            name: 'og:image',
            content: '@/assets/logos/logo.png'
          }
        ]
      },
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contacts
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    }
  ], scrollBehavior(_to, _from, _savedPosition) {
    // Riporta sempre in cima alla pagina
    return { x: 0, y: 0 };
  }
});
