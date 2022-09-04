<template>
 <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">INTERESSI PROFESSIONALI<!--PROFESSIONAL INTERESTS --></h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, text, title }, i) in interests"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="icon"
                class="mb-4"
                height="275"
                max-width="100%"
              ></v-img>

              <h3
                class="font-weight-black mb-4 text-uppercase"
                v-html="title"
                align="center"
              ></h3>
              <!--
              <div
                class="title font-weight-light mb-5"
                v-text="text"
              ></div>

              <v-btn
                class="ml-n4 font-weight-black"
                text
              >
                Continue Reading
              </v-btn>-->
            </v-col>
          </v-row>
        </v-container>
   
</template>

<script>
export default {
    data() {
        return {
            interests: [
            {
                icon: 'https://faithandleadership.com/sites/default/files/field/image/DavidSmith-teaching_m.png',
                title: 'Insegnamento<br/> & <br/> didattica',
                text: 'Da riempire',
            },
            {
                icon: 'https://img.deusm.com/informationweek/November19/datascience-pdusit-stock.jpg',
                title: 'Data <br/> Science',
                text: 'Da riempire',
            },
            {
                icon: 'https://rntechltd.files.wordpress.com/2015/02/scala-code.png',
                title: 'AI <br/> & <br/> programmazione',
                text: 'Da riempire',
            }]
        }      
    }
}
</script>