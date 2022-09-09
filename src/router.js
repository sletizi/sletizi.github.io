import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contacts from "./views/Contact.vue";
import Projects from "./views/Projects.vue"

Vue.use(VueRouter);


export default new VueRouter({
  mode: "hash",
  base: process.env.VUE_APP_BASE_URL,
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
    },
    {
      path: "/cv",
      name: "CV",
      meta: {
        title: 'Simone Letizi CV',
        metaTags: [
          {
            name: 'description',
            content: 'Simone Letizi CV'
          },
          {
            property: 'og:description',
            content: 'Simone Letizi CV'
          },
          {
            name: 'og:image',
            content: '@/assets/cv.jpg'
          }
        ]
      },
    }
  ]
});
