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
                    <tags-ball 
                        class="center"
                        v-bind:style='{"border":"0px solid black"}' 
                        :width="500"
                        :height="500"
                        :tags='skillsName'
                        font="30px monaco"
                        :radius="[$vuetify.breakpoint.smAndDown ? 180 : 180]"
                        color="#535354"/>
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
                    <v-row v-for="nr in 8" :key="nr">
                        <v-col
                            align="center"
                            v-for="nc in 3" 
                            :key="nc">
                            <div>
                                <v-img contain :src="skillsChuncked[nr-1][nc-1].logo_url" width='100' height='50'/>
                            </div> 
                        </v-col> 
                        <template v-if="nr === 3">
                            <v-col cols="12" class="text-center my-4">
                                <v-divider></v-divider>
                                Conoscenza accademica e uso in progetti universitari
                                <v-icon class="mx-4">mdi-school</v-icon>
                                <v-divider></v-divider>
                            </v-col>
                        </template>
    
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
                    logo_url:require('../assets/techs/SQL.png'),
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
                },
                {
                    name:"Android",
                    site:"https://developer.android.com/docs",
                    logo_url:require('../assets/techs/android.png'),
                },
                {
                    name:"Scala",
                    site:"",
                    logo_url:require('../assets/techs/scala.png'),
                },
                {
                    name:"Java",
                    site:"",
                    logo_url:require('../assets/techs/java.jpg'),
                },
                {
                    name:"C",
                    site:"",
                    logo_url:require('../assets/techs/c.png'),
                },
                {
                    name:"C#",
                    site:"",
                    logo_url:require('../assets/techs/c_sharp.png'),
                },
                {
                    name:"JavaScript,HTML,CSS",
                    site:"",
                    logo_url:require('../assets/techs/HTML.png'),
                },
                {
                    name:"PHP",
                    site:"",
                    logo_url:require('../assets/techs/php.png'),
                },
                {
                    name:"MEVN Stack",
                    site:"",
                    logo_url:require('../assets/techs/mevn.png'),
                },
                {
                    name:"Firebase",
                    site:"",
                    logo_url:require('../assets/techs/firebase.png'),
                },
                
                {
                    name:"Hadoop",
                    site:"http://hadoop.apache.org",
                    logo_url:require('../assets/techs/hadoop.png'),
                },
                {
                    name:"Spark",
                    site:"",
                    logo_url:require('../assets/techs/spark.png'),
                },
                
                
                {
                    name:"Numpy",
                    site:"",
                    logo_url:require('../assets/techs/numpy.png'),
                },
                
                {
                    name:"Docker",
                    site:"",
                    logo_url:require('../assets/techs/dockers.png'),
                },
                {
                    name:"Kubernetes",
                    site:"",
                    logo_url:require('../assets/techs/kubernetes.png'),
                },
                {
                    name:"Keras",
                    site:"",
                    logo_url:require('../assets/techs/keras.png'),
                },
                {
                    name:"Scikit-learn",
                    site:"",
                    logo_url:require('../assets/techs/scikit.png'),
                },
                {
                    name:"Swagger",
                    site:"",
                    logo_url:require('../assets/techs/swagger.png'),
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
    }
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