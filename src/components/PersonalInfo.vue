<template>
    <v-container fluid >
        <v-row>
            <v-col 
            cols="12"
            md="6"
            xs="12"
            :style="personalInfoStyle">  
            <!--<transition
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false"
            >-->
                <v-container fill-height>                  
                    <v-row align="center" justify="center"> <h1 class="personalInfoText" v-html="'Simone <br> Letizi'"></h1> </v-row>
                </v-container>
            <!--</transition>-->
            </v-col> 
            <v-col
            cols="12"
            md="6"
            xs="12"
            class="no_padding">
                <div>
                    <v-img src="../assets/me_b&w.jpg"/>
                </div>
                <!--<div :style="{'background-image': '../assets/me_b&w.jpg'}"/>-->
            </v-col>   
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            show: false,
            personalInfoStyle:{
                backgroundColor:'#DAD6CC',
            } 
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather');
.no_padding {
    padding: 0;
}
.personalInfoText{
    font-family: 'Merriweather', serif;
    font-size: 4.5vw;
}
.personalInfoContainer{
    vertical-align: middle;
}

</style>