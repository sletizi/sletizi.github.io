<template>
  <v-container>
    <h2 class="display-2 font-weight-bold mb-3 mr-7 ml-7 text-uppercase text-center">INTERESSI PROFESSIONALI<!--PROFESSIONAL INTERESTS --></h2>

    <v-responsive
      class="mx-auto mb-12"
      width="56"
    >
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>

    <v-carousel
    cycle
    height="auto"
    interval="20000"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(interest, i) in interests"
      :key="i"
    >
      <v-sheet
        :color="interest.color"
        height="100%"
      >
        <v-row
          no-gutters
          class="fill-height"
          align="center"
          justify="center"
        >
            <v-col
                align="center"
                justify="center"
                cols="12"
                >
                <v-row
                align="center"
                justify="center">
                    <span
                        class="font-weight-light mr-5 ml-5 mt-5"
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-3']"                   
                    >
                        {{ interest.name }}
                    </span>
                </v-row>
                <v-row
                justify="center"
                >
                    <span
                        class="font-weight-light ma-5 mb-10 pa-5"
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1.5' : 'display-1']" 
                        v-html="interest.quote_it"                  
                    />
                </v-row>
            </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>  
  </v-container>     
</template>
<script>
export default {
    data(){
        return {
            interests:[
            {
                name: 'Business Intelligence',
                quote_it: 'Potrai avere dati senza informazione, ma mai avere informazioni senza dati. <br> (Daniel Keys Moran Quotes)',
                color:'#4A4F4C'
            },
            {
                name: 'Insegnamento',
                quote_it: "Al bambino noi non possiamo consegnare l'oceano, un secchiello alla volta, pero' gli possiamo insegnare a nuotare nell'oceano e allora andra' fin dove le sue forze lo porteranno, poi inventera' una barca e navighera' con la barca, poi con la nave. Dobbiamo cioe' consegnare degli strumenti culturali.La conoscenza non e' una quantita', e' una ricerca. Non dobbiamo dare ai bambini delle quantita' di sapere, ma degli strumenti per ricercare, degli strumenti culturali perche' lui crei, spinga la sua ricerca fin dove puo'; poi certamente tocchera' sempre a noi spingere piu' in la' e aiutarlo a affinare i suoi strumenti. <br> (Gianni Rodari)",
                color:'#d4d9d2'
            },
            {
                name: 'Insegnamento',
                quote_it: "S'impara soltanto divertendosi. L'arte di insegnare non è altro che l'arte di svegliare la curiosità delle anime giovani per poi soddisfarla, e la curiosità vive solo nelle anime felici. Le cognizioni fatte entrare per forza nella mente la occludono e la soffocano. Per dirigere il sapere bisogna averlo divorato con appetito. <br> (Anatole France)",
                color:'#d4d9d2'
            }]
        }
    }
}
</script>