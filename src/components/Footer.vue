<template>
   <section id="contact_me"> 
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="" color="black">
        <strong class="subheading">Connettiti con me sui social network<!--Get connected with me on social networks!--></strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="socialAcc in mySocialAccount"
          :key="socialAcc.icon"
          @click="openInNewTab(socialAcc.profileLink)"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ socialAcc.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Made by myself with Vue.js and Vuetify<!--Made by myself with Vue.js and Vuetify--></strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </section>
</template>

<script>
export default {
    data: () => ({
      mySocialAccount: [
        {
            profileLink:'https://www.linkedin.com/in/simone-letizi-056293168/',
            icon:'fab fa-linkedin'
        },
        {
            profileLink:'https://www.instagram.com/moneletizi/',
            icon:'fab fa-instagram'
        }]
    }),
    methods:{
        openMailProgram: function(){

        },
         openInNewTab:function(url) {
          var win = window.open(url, '_blank');
          win.focus();
        }
    }
  }
</script>