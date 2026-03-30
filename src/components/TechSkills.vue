<template>
    <v-container fluid>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">COMPETENZE TECNICHE </h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

        <v-row
            align="center"
            justify="center">
            <v-col
            cols="12"
            md="6"
            xs="12">
                <v-layout>
                    <transition name="fade"></transition>
                    <tags-ball v-if="showBall"
                        class="center"
                        v-bind:style='{"border":"0px solid black"}' 
                        :width="500"
                        :height="500"
                        :tags='skillsName'
                        font="30px monaco"
                        :radius="[$vuetify.breakpoint.smAndDown ? 180 : 180]"
                        color="#535354"/>
                        <v-img v-else
                            src="@/assets/google_cite.jpg"
                            width="auto"
                            height="auto"
                            
                            style="opacity: 0.8;"
                        ></v-img> 
                </v-layout>
            </v-col>
            <v-col
                cols="12"
                md="6"
                xs="12"

                >
                <v-container > 
                    <v-divider></v-divider>
                        Utilizzati di recente
                        <v-icon class="mx-4">mdi-star</v-icon>
                    <v-divider></v-divider>
                    <v-row v-for="(skillsRow, nr) in skillsChuncked" :key="nr">
                        <v-col
                            align="center"
                            v-for="(skill, nc) in skillsRow" 
                            :key="nc">
                            <div>
                                <v-img contain :src="skill.logo_url" width='100' height='50'/>
                            </div> 
                        </v-col> 
                    </v-row>
                </v-container>
                
            </v-col>
        </v-row>

    </v-container>    
</template>

<script>
//https://www.npmjs.com/package/vue-tags-ball/v/1.0.0
import TagsBall from 'vue-tags-ball'
export default {
    data() {
        return {
            showBall: true,
            tech_skills: [
                {
                    name:"PowerBI",
                    site:"",
                    logo_url:require('../assets/techs/powerbi.png'),
                },
                {
                    name:"Git",
                    site:"",
                    logo_url:require('../assets/techs/git.png'),
                },
                {
                    name:"SQL",
                    site:"",
                    logo_url:require('../assets/techs/sql.png'),
                },
                {
                    name:"GCP",
                    site:"",
                    logo_url:require('../assets/techs/GCP.png'),
                },
                {
                    name:"dbt",
                    site:"",
                    logo_url:require('../assets/techs/dbt.png'),
                },
                {
                    name:"AWS",
                    site:"",
                    logo_url:require('../assets/techs/AWS.png'),
                },
                {
                    name:"Pandas",
                    site:"",
                    logo_url:require('../assets/techs/pandas.png'),
                },
                {
                    name:"Tableau",
                    site:"",
                    logo_url:require('../assets/techs/tableau.svg'),
                },
                {
                    name:"Python",
                    site:"",
                    logo_url:require('../assets/techs/python.png'),
                }]
                

        }      
    },
    components:{
            "tags-ball":TagsBall
    },
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
        skillsName () {
            return this.tech_skills.map( t => t.name)
        },
        skillsChuncked(){
            var split = this.subArrays(3,this.tech_skills)
            return split
        } 
    }, mounted() {
    setTimeout(() => {
      this.showBall = false;
    }, 5000); // 5 secondi
  },
}
</script>
<style scoped>
.center {
    margin: auto;
    height: 70%;
    width: 70%;
    max-width: 500px;
    max-height: 500px;
}

</style>
