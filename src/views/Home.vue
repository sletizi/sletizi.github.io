<template>
    <v-content>
        <section id="hero">
            <infographic/>
        </section>  
        <section id="about-me">
            <about-container/>
        </section>
        <section
            id="professional_interests"
            class="grey lighten-3"
        >
            <professional-interests/>
      </section>
      <section>
          <parallax/>
      </section>
      <section>
          <projects/>
      </section>    
             
   </v-content>      
</template>

<script>
import AboutComp from '@/components/About'
import HomeInfographicBar from '../components/HomeInfographicBar'
import ProfessionalInterests from '../components/ProfessionalInterestHome'
import Parallax from '../components/ParallaxScrollImage'
import ProjectsSection from '../components/ProjectsHomeSection'

export default {
    components:{
        'about-container' : AboutComp,
        'infographic' : HomeInfographicBar,
        'professional-interests' : ProfessionalInterests,
        'parallax' : Parallax,
        'projects' : ProjectsSection,
    }
}
</script>
