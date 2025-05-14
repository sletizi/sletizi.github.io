<template>
    <v-row no-gutters>
        <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="../assets/room.jpeg"
        >
        <v-theme-provider dark>
            <v-container fill-height >
            <v-row
                align="start"
                justify="start"
                class="white--text"

            >
                <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
                >
                <v-row>
                    <span
                        class="font-weight-light"
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"                   
                    >
                        "Cerco verità nei dati e silenzi tra le vette: entrambi raccontano più di quanto sembri."


                    </span>
                </v-row>
                <br>
                <v-row
                    align="center"
                    justify="center">   
                    <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                    >
                    <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                </v-row>
                </v-col>
            </v-row>
            <v-row
                align="center"
                justify="center">
               
            </v-row>    
            </v-container>
        </v-theme-provider>
        </v-img>
    </v-row>
</template>

<script>
export default {
    components:{
    }
}
</script>