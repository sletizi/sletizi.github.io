<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    elevation="9"
    outlined
    shaped
    light
    color="#73a0a8"
  >

    <v-card-title> {{review.description}} </v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="review.rate"
          color="primary"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class=" ml-4">
          {{review.rate}} 
        </div>
      </v-row>

        <div v-if="review.approved" class="my-4 subtitle-2">
          Referenza di : {{review.ReviewerName}}
        </div>

        <div class="my-5 subtitle-1"> {{review.description}} </div>

    </v-card-text>
  </v-card>
</template>

<script>

export default{
  props: {
    review: {
      required: true
    }

  }
}
</script>
