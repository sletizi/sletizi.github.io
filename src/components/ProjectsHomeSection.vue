<template>
     <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3"> PROGETTI RECENTI </h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({src, title, text, scope}, i) in projects"
              :key="i"
              cols="12"
              md="6"
              fill-height
              align-self="stretch"
            >

              <v-container fill-height>
              <v-card
                height='100%' 
                style="position: relative"
                class="py-12 px-4"
                color="grey lighten-5"
                elevation="12"
                shaped
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                    class="elevation-12 mb-12"
                    size="160"
                    radius="10px">  
                        <v-img
                        contain
                            :src="require(`../assets/projects_logos/${src}`)" 
                            class="white--text align-end"
                            />
                    </v-avatar>    
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-html="title"
                ></v-card-title>

                <v-card-subtitle>
                  {{scope}}
                </v-card-subtitle>

                <v-card-text
                  class="subtitle-1"
                  v-html="text"
                >
                </v-card-text>
              </v-card>
              </v-container>

              

            </v-col>

          </v-row>
          <br>
          <v-btn
                color="grey"
                to="/projects"
                outlined
                large
            >
                <span class="grey--text text--darken-1 font-weight-bold">
                  Visualizza tutti i progetti
                </span>
            </v-btn>
        </v-container>
</template>

<script>
export default {
    data() {
        return {
            projects: [
            {
                src: 'logo_spotistats.png',
                title: 'SpotiStats',
                text: 'SpotiStats è un progetto di data analytics nato con l’obiettivo di analizzare la cronologia di ascolto personale su Spotify, offrendo una panoramica dettagliata e interattiva simile a quella fornita da Spotify Wrapped, ma disponibile in qualsiasi momento dell’anno e personalizzabile.',
                scope: 'Tecnologie e ambito principale: Data Analytics'
            },
            {
                src: 'logo_scanbage.png',
                title: 'Scanbage',
                text: 'Scanbage è un’app al servizio del cittadino, con l’idea di supportarlo in una raccolta differenziata più responsabile.<br> Sviluppata insieme a: <br> Andrea Petreti, Gianluca Aguzzi, Marta Luffarelli ' ,
                scope: 'Tecnologie e ambito principale: Progressive Web App'
            },
            {
                src: 'logo_iserra.png',
                title: 'IntelliSerra',
                text: 'Framework per la realizzazione di un\'infrastruttura a supporto di una serra intelligente (smart greenhouse). <br> Sviluppata insieme a: <br> Ylenia Battistini, Marta Luffarelli, Andrea Petreti <br> Repo disponibile al link: <a href="https://github.com/moneletizi94/IntelliSerra">https://github.com/moneletizi94/IntelliSerra</a>',
                scope: 'Tecnologie e ambito principale: Scala framework'
            },
            {
                src: 'logo_covid_paper_analysis.png',
                title: 'COVID papers analysis',
                text: 'Progetto del corso di Big Data. Analisi di paper inerenti al COVID volta all\'estrazione di parole chiave. <br> Repo disponibile al link: <a href="https://gitlab.com/moneletizi/covid-papers-analysis">https://gitlab.com/moneletizi/covid-papers-analysis</a>' ,
                scope: 'Tecnologie e ambito principale: Big Data -> Spark, Hadooop'
            }]
        }      
    }
}
</script>