<template>
 <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">{{ $t('interests.title') }}</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, alt }, i) in interests"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="icon"
                :alt="alt"
                class="mb-4"
                height="275"
                max-width="100%"
              ></v-img>

              <h3
                class="font-weight-black mb-4 text-uppercase"
                v-html="sanitizeHtml(title)"
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
import { sanitizeHtml } from '@/utils/sanitizeHtml';

// Illustrazioni originali, disegnate a mano in SVG: stessa palette del sito,
// stessa griglia (contenuto dentro x 230-980 / y 140-460, che e' la zona che
// sopravvive a entrambi i ritagli di v-img) e nessun testo, cosi' non c'e'
// nulla da tradurre al cambio di lingua. Niente materiale di terzi, quindi
// niente questioni di licenza.
const IMAGES = {
    businessIntelligence: require('@/assets/interests/business-intelligence.svg'),
    dataEngineering: require('@/assets/interests/data-engineering.svg'),
    teaching: require('@/assets/interests/teaching.svg'),
}

export default {
    computed: {
        // computed e non data: i titoli devono seguire il toggle di lingua
        interests() {
            return [
                {
                    icon: IMAGES.businessIntelligence,
                    title: this.$t('interests.businessIntelligence'),
                    alt: this.$t('interests.alt.businessIntelligence'),
                },
                {
                    icon: IMAGES.dataEngineering,
                    title: this.$t('interests.dataEngineering'),
                    alt: this.$t('interests.alt.dataEngineering'),
                },
                {
                    icon: IMAGES.teaching,
                    title: this.$t('interests.teaching'),
                    alt: this.$t('interests.alt.teaching'),
                },
            ]
        }
    },
    methods: {
        sanitizeHtml,
    }
}
</script>
