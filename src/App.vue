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
  metaInfo: {
      title: 'Simone Letizi personal website',
      meta:[
        {
          property: 'og:image', content: 'https://www.gelestatic.it/thimg/BFgVJh3VRzyYdT2ZBRwuz5SwvS0=/fit-in/960x540/https%3A//www.lastampa.it/image/contentid/policy%3A1.40042259%3A1616074774/cat-4348355_960_720.jpg%3Ff%3Ddetail_558%26h%3D720%26w%3D1280%26%24p%24f%24h%24w%3Dafbdd83'
        }
      ]      


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
