<template>
    <v-content>
        <section id="hero">
            <infographic/>
        </section>  
        <section id="about-me">
            <div class="py-12"></div>
            <about-container/>
            <div class="py-12"></div>
        </section>
        <section
            id="professional_interests"
            class="grey lighten-3"
        >
            <div class="py-12"></div>
            <professional-interests/>
            <div class="py-12"></div>
      </section>
      <section>
          <parallax/>
      </section>
      <section>
          <div class="py-12"></div>
          <projects/>
            <div class="py-12"></div>
      </section>
      <section>
        <v-row>
            <v-col cols=12>
                <codersrank-summary username="moneletizi94" show-avatar="false"></codersrank-summary>
            </v-col>
        </v-row>
      </section>
        <section>
          <div class="py-12"></div>
          <reviews/>
            <div class="py-12"></div>
      </section>        
             
   </v-content>      
</template>

<script>
import AboutComp from '@/components/About'
import HomeInfographicBar from '../components/HomeInfographicBar'
import ProfessionalInterests from '../components/ProfessionalInterestHome'
import Parallax from '../components/ParallaxScrollImage'
import ProjectsSection from '../components/ProjectsHomeSection'
import ReviewsSection from '../components/ReviewsSection'

export default {
    components:{
        'about-container' : AboutComp,
        'infographic' : HomeInfographicBar,
        'professional-interests' : ProfessionalInterests,
        'parallax' : Parallax,
        'projects' : ProjectsSection,
        'reviews' : ReviewsSection
    }
}
</script>
