<template>
     <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3"> Referenze </h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          
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
                src: 'logo_fuoriclasse.png',
                title: 'FuoriClasse',
                text: 'L’applicazione FuoriClasse è legata al settore scolastico e ha l’obiettivo principale di migliorare l’efficienza delle comunicazioni tra studenti e docenti accompagnatori di una gita scolastica.',
                scope: 'Tecnologie e ambito principale: Mobile Android App'
            },
            {
                src: 'logo_scanbage.png',
                title: 'Scanbage',
                text: 'Scanbage è un’app al servizio del cittadino, con l’idea di supportarlo in una raccolta differenziata più responsabile.<br> Sviluppata insieme a: <br> Andrea Petreti, Gianluca Aguzzi, Marta Luffarelli' ,
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