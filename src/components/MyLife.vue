<template>
<v-container fluid class="pr-6 ps-6 me-6">
    <h2 class="display-2 font-weight-bold mb-3">LA MIA VITA <!--MY LIFE --></h2>
    <h3 class="mb-3"> Non solo programmazione<!--Not only coding--> </h3>
        <v-responsive
        class="mx-auto mb-6"
        width="56"
        >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
        </v-responsive>
        
        <v-row v-for="nr in 5" :key="nr" >
            <v-col  
            v-for="nc in 4" 
            :key="nc"
            md="3"
            sm="6"
            xs="6"
            align="center"> 
                <v-card 
                outlined
                img="https://static.vecteezy.com/system/resources/previews/000/152/826/non_2x/vector-old-vintage-paper-texture.jpg"
                raised 
                class="polaroid d-inline-block mx-auto text-center me-10" 
                elevation="22">
                    <v-container>
                        <v-img 
                        contain 
                        :src="require(`../assets/postcard/${picturesChuncked[nr-1][nc-1].name}`)" 
                        width='100%' 
                        height='100%'/>
                    </v-container>
                    <v-card-title v-html="picturesChuncked[nr-1][nc-1].title" class="justify-center"></v-card-title>
                    <v-card-title v-html="picturesChuncked[nr-1][nc-1].place + ' - ' + picturesChuncked[nr-1][nc-1].date" class="justify-center"></v-card-title>
                </v-card>               
            </v-col>      
        </v-row>

</v-container>      
</template>

<script>
import imported_pictures from '@/data/picture.json';
export default {
    methods: {
        subArrays: function (size, array) {
            const chunked_arr = [];
            let index = 0;
            while (index < array.length) {
                chunked_arr.push(array.slice(index, size + index));
                index += size;
            }
            return chunked_arr;
        }
    },
    computed:{
        picturesChuncked(){
            var split = this.subArrays(4,imported_pictures)
            return split
        } 
    }
};
</script>

<style>
.polaroid{
    font-family: 'Indie Flower', 'cursive';
}
</style>
