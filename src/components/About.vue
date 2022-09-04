<template>
        <v-container class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">SU DI ME<!--ABOUT ME--></h2>

            <v-responsive
                class="mx-auto mb-8"
                width="56"
            >
                <v-divider class="mb-1"></v-divider>

                <v-divider></v-divider>
            </v-responsive>

            <v-responsive
                class="mx-auto title font-weight-light mb-8"
                max-width="720"
            >
                Dopo aver conseguito la laurea triennale in Ingegneria Informatica, con l’avvento dell’Intelligenza Artificiale ho basato il mio percorso di studi magistrale sulla Data Science e Data Engineering.
                Da qualche anno nutro un forte interesse verso la didattica perché trovo stimolante e avvincente prendersi cura con passione della formazione di coloro che saranno la nuova generazione di innovatori, oltre che cittadini del mondo.
                Ritengo che il sistema scolastico giochi un ruolo fondamentale soprattutto nello stimolare l’interesse degli studenti verso le discipline informatiche, i cui strumenti permeano la vita quotidiana.
                Tuttavia, oltre ad essere presente sempre di più nella vita di ognuno di noi, l’informatica è una meta-competenza e il suo studio diventa uno strumento concettuale e pratico per creare, ragionare e apprendere dinamiche che caratterizzano la maggior parte dei domini reali.
            </v-responsive>

            <v-avatar
                class="elevation-12 mb-12"
                size="150"
            >
                <v-img src="../assets/me.jpeg"></v-img>
            </v-avatar>

            <div></div>

            <v-btn
                color="grey"
                to="/about"
                outlined
                large
            >
                <span class="grey--text text--darken-1 font-weight-bold pulse">
                Scopri di più
                </span>
            </v-btn>
        </v-container>
</template>

<style scoped>
.pulse {
  box-shadow: 0 0 0 rgba(192,192,192, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(192,192,192, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(192,192,192, 0.4);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(192,192,192, 0.4);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(192,192,192, 0.4);
    box-shadow: 0 0 0 0 rgba(192,192,192, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(192,192,192, 0.4);
      box-shadow: 0 0 0 10px rgba(192,192,192, 0.4);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(192,192,192, 0.4);
      box-shadow: 0 0 0 0 rgba(192,192,192, 0.4);
  }
}
</style>