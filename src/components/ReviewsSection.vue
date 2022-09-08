<template>
  <v-row align="center" justify="center">
    <!--<v-col
      cols="12"
      md="6"
      justify="center"
      align="center"
    >
      <review-form/> 
    </v-col>-->
    <v-col
      cols="12"
      md="6"
      v-if="reviews.length > 0">
      <h2 class="text-center"> Le mie referenze </h2>
      <v-carousel
        cycle
        height="auto"
        interval="20000"
        hide-delimiter-background
        show-arrows-on-hover>
        <v-carousel-item v-for="(review, idx) in this.reviews" :key="idx">
          <review-card v-bind:review="review"/>
        </v-carousel-item>
      </v-carousel> 
    </v-col>
  </v-row>
</template>

<script>
//import ReviewForm from './ReviewForm.vue'
import ReviewCard from './ReviewCard.vue'
//import { db } from '@/firebase.js'

export default {
  created () {
    //this.readReviews()
  },
  methods: { 
      readReviews: function() {
        /*db.collection('reviews').where("approved","==",true).orderBy('createdAt').get().then(snap => {
          snap.forEach(element => {
            this.reviews.push(element.data())
          });
        })*/return null
      }
  },
  firestore: {
    reviews: null//db.collection('reviews').where("approved","==",true).orderBy('createdAt')
  },
  data() {
    return {
      reviews:[]
    }
  },
  components: {
      'review-card':ReviewCard,
      //'review-form':ReviewForm
  }
}
</script>
