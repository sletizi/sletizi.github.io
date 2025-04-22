<template>
  <nav>
    <v-app-bar>
      <v-toolbar-title>
        <v-avatar
          class="mr-3 ma-2"
          color="grey lighten-5"
          size="60"
          style="overflow: hidden;aspect-ratio: 1/1;"
        >
          <v-img
            cover
            src="../assets/logos/logo.png"
            @click="goHome"
            style="max-height: 50px;"
          ></v-img>
        </v-avatar>

      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items  class="hidden-sm-and-down">
        <v-btn v-for="item in navItems" :key="item.icon" :href="item.href" text>
          <v-icon left> {{item.icon}} </v-icon> {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-menu
        v-if="onMobile"
        class="hidden-md-and-up"
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in navItems" :key="item.icon" :href="item.href">
              <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>          
    </v-app-bar>
  </nav>
</template>

<script>
import '@/router.js'
export default {
  data() {
    return{
      navItems: [
        { icon: "mdi-home", title: "Home", to: () => this.$router.push('/') , href: "/"},
        { icon: "mdi-account", title: "Su di me", to: ()=> this.$router.push('/about') , href: "/about"},
        { icon: "mdi-brush", title: "Progetti",to: ()=> this.$router.push('/projects'), href: "/projects"},
        { icon: "mdi-file-account", title: "CV",to: ()=> this.$vuetify.goTo('/cv'), href: "/cv"},
        { icon: "mdi-email", title: "Contatti",to: ()=> this.$vuetify.goTo('#contact_me'), href: "#contact_me"}
      ]
    }
  },
  components:{
    
  },
  computed:{
    onMobile(){
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods:{
    goHome: function(){
      //TODO ADD ROTATION
      this.$router.replace('/');
    }
  }
}
</script>
