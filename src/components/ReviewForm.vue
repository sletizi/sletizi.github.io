<template>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
          v-model="success_insertion"
        >
        
        <template v-slot:default="success_insertion">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Referenza inviata con successo</v-toolbar>
            <v-card-text>
              <div class="text-h5 pa-12"> Grazie per avere inserito la tua referenza! Entro 24 ore sarà visibile  insieme alle altre referenze</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="success_insertion.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
        <template v-slot:activator="{ on, attrs }">
          <v-btn                
                  color="grey"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  large
              >
                  <span class="grey--text text--darken-1 font-weight-bold">
                    Lascia una referenza o un commento sul sito!
                  </span>
              </v-btn>
          
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">La tua referenza / Il tuo giudizio sul sito</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Titolo"
                      v-model="title"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Nome e cognome"
                      v-model="reviewerName"
                    required
                  ></v-text-field>
                </v-col>
              <v-col cols="12">
                  <v-checkbox
                  v-model="anonimize"
                  label='Rendi noto il tuo nome solo al proprietario del sito e non visualizzarlo nella "recensione" pubblica'
                  ></v-checkbox>
              </v-col>

              
                <v-col cols="12">
                  <v-rating
                  half-increments
                  hover
                  v-model="rate"
                  length="5"
                  size="30"
                  value="0"
                  ></v-rating>

                </v-col>
                <v-col cols="12">
                  <v-textarea
                  v-model="reviewDesc"
                  name="input-7-4"
                  label="Descrizione"
                  value=""
                  auto-grow
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="dialog = false"
            >
              Chiudi
            </v-btn>
            <v-btn
              text
              @click="addReview"
            >
              Invia
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
import { db } from '@/firebase.js'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_W1xuBXOG6uvh8w9gWGUZd");

export default {
    data: () => ({
        success_insertion:false,
        dialog:false,
        reviewerName: "",
        reviewDesc: "",
        rate:0,
        title:"",
        anonimize:false
    }),
    methods: { 
        addReview: function() {
            const createdAt = new Date()
            db.collection('reviews').add({
                "title":this.title,
                "ReviewerName":this.reviewerName, 
                "description":this.reviewDesc, 
                "rate":this.rate, 
                "anonimize":this.anonimize, 
                "createdAt":createdAt,
                "approved":false
            }).then(() => {
                this.success_insertion = true
                console.log("SUCCESS! Document written");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            this.dialog = false
            this.sendEmail()
        },
        sendEmail: function() {
          emailjs.send('service_mrw2c1h', 'template_kh20tqp', {})
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
          }, function(error) {
            console.log('FAILED...', error);
          });
        }
    }
}
</script>
