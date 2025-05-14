<template>
    <div class="about-background">
        <div class="overlay">
            <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">SU DI ME<!--ABOUT ME--></h2>

                <v-responsive class="mx-auto mb-8" width="56">
                    <v-divider class="mb-1"></v-divider>

                    <v-divider></v-divider>
                </v-responsive>

                <v-responsive class="mr-6 ml-6 title font-weight-light mb-8"> <v-icon>mdi-hiking</v-icon>

                    Natura, libertà e avventura: è così che ricarico le energie.
                </v-responsive>
                <v-responsive class="mr-6 ml-6 title font-weight-light mb-8"> 
                    <v-icon left>mdi-lightbulb-on-outline</v-icon>
                    Mi piace dare spazio alla creatività: progettare, costruire, scrivere codice… ogni occasione è buona
                    per creare qualcosa di nuovo.
                </v-responsive>

                <v-responsive class="mr-6 ml-6 title font-weight-light mb-8"> <v-icon left>mdi-chart-line</v-icon>

                    Lavorare con i dati mi appassiona: credo nel loro potere di raccontare la realtà, di smentire le
                    opinioni e fare luce sui fenomeni.
                </v-responsive>

                <v-responsive class="mr-6 ml-6 title font-weight-light mb-8"> <v-icon left>mdi-school</v-icon>

                    Mi affascina il mondo dell’insegnamento e della formazione. Trovo stimolante e avvincente prendersi
                    cura della formazione di coloro che saranno la nuova generazione di innovatori, oltre che cittadini
                    del mondo.
                </v-responsive>

                <v-avatar class="elevation-12 mb-12" size="150">
                    <v-img src="../assets/ME_2024.jpg"></v-img>
                </v-avatar>

                <div></div>

                <v-btn color="grey" to="/about" outlined large>
                    <span class="grey--text text--darken-1 font-weight-bold pulse">
                        Scopri di più
                    </span>
                </v-btn>
            </v-container>
        </div>
    </div>
</template>

<style scoped>
.pulse {
    box-shadow: 0 0 0 rgba(192, 192, 192, 0.4);
    animation: pulse 2s infinite;
}

.pulse:hover {
    animation: none;
}

@-webkit-keyframes pulse {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(192, 192, 192, 0.4);
    }

    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(192, 192, 192, 0.4);
    }

    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(192, 192, 192, 0.4);
    }
}

@keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(192, 192, 192, 0.4);
        box-shadow: 0 0 0 0 rgba(192, 192, 192, 0.4);
    }

    70% {
        -moz-box-shadow: 0 0 0 10px rgba(192, 192, 192, 0.4);
        box-shadow: 0 0 0 10px rgba(192, 192, 192, 0.4);
    }

    100% {
        -moz-box-shadow: 0 0 0 0 rgba(192, 192, 192, 0.4);
        box-shadow: 0 0 0 0 rgba(192, 192, 192, 0.4);
    }
}

.about-background {
    background-image: url('@/assets/landscape.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.overlay {
  background-color: rgba(255, 255, 255, 0.65);
  padding-top: 64px;
  padding-bottom: 64px;
  width: 100%;
}
</style>