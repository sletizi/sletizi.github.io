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
                icon: 'https://www.projest.com/wp-content/uploads/2024/09/Software-di-business-intelligence-1024x683.jpg',
                title: 'Business <br/> Intelligence',
                text: 'Da riempire',
            },
            {
                icon: 'https://files.oaiusercontent.com/file-FyJ1J4ZAdBz5DbnvYfXu19?se=2025-02-01T18%3A51%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D07d24255-4e87-4ee4-a215-ac67ba6a282c.webp&sig=W47IXsRVbY/LR%2BfYM6ONIXBaeUcq8EKBTh/efvhFtpI%3D',
                title: 'Data <br/> Engineering',
                text: 'Da riempire',
            },
            {
                icon: 'https://faithandleadership.com/sites/default/files/field/image/DavidSmith-teaching_m.png',
                title: 'Insegnamento<br/> & <br/> didattica',
                text: 'Da riempire',
            },
          ]
        }      
    }
}
</script>