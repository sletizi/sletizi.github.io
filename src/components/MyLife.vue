<template>
    <v-container fluid class="pr-6 ps-6 me-6">
      <h2 class="display-2 font-weight-bold mb-3">LA MIA VITA</h2>
      <h3 class="mb-3">Non solo programmazione</h3>
  
      <v-responsive class="mx-auto mb-6" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>
  
      <v-row>
        <v-col
          v-for="(pic, index) in imported_pictures"
          :key="index"
          md="3"
          sm="6"
          xs="6"
          align="center"
        >
          <v-card
            outlined
            raised
            class="polaroid d-inline-block mx-auto text-center me-10"
            elevation="22"
            img="https://static.vecteezy.com/system/resources/previews/000/152/826/non_2x/vector-old-vintage-paper-texture.jpg"
          >
            <v-container>
              <v-img
                contain
                :src="require(`../assets/postcard/${pic.name}`)"
                width="100%"
                height="100%"
              />
            </v-container>
            <v-card-title v-html="pic.title" class="justify-center"></v-card-title>
            <v-card-title v-html="pic.place + ' - ' + pic.date" class="justify-center"></v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import imported_pictures from '@/data/picture.json';
  
  export default {
    data() {
      return {
        imported_pictures
      };
    }
  };
  </script>
  
  <style>
  .polaroid {
    font-family: 'Indie Flower', cursive;
  }
  </style>
  