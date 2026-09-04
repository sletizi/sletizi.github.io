<template>
  <v-container>
    <h2 class="display-2 font-weight-bold mb-3 mr-7 ml-7 text-uppercase text-center">{{ $t('interests.title') }}</h2>

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
                        v-html="sanitizeHtml(interest.quote)"                  
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
import { sanitizeHtml } from '@/utils/sanitizeHtml';

export default {
    computed: {
        // computed e non data: nomi e citazioni seguono il toggle di lingua
        interests() {
            return [
                {
                    name: this.$t('interests.quotes.biName'),
                    quote: this.$t('interests.quotes.biQuote'),
                    color: '#4A4F4C'
                },
                {
                    name: this.$t('interests.quotes.teachingName'),
                    quote: this.$t('interests.quotes.rodariQuote'),
                    color: '#d4d9d2'
                },
                {
                    name: this.$t('interests.quotes.teachingName'),
                    quote: this.$t('interests.quotes.franceQuote'),
                    color: '#d4d9d2'
                }
            ]
        }
    },
    methods: {
        sanitizeHtml,
    }
}
</script>
