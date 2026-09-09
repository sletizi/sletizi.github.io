<template>
    <v-content align="center">
          <personal-info class="mb-4"/>
          <custom-button class="ma-4" link="https://sletizi.github.io/cv.pdf" :buttonText="$t('about.cvButton')"/>
          <career/>
          <tech-skills/> 
          <certifications/>   
          <professional-interests/>
          <my-life />
    </v-content>  
</template>

<script>
import PersonalInfo from '../components/PersonalInfo'
import TechSkills from '../components/TechSkills'
import ExperiencesTimeLIne from '../components/ExperiencesTimeLine'
import MyLife from '../components/MyLife'
import ProfessionalInterests from '../components/ProfessionalInterestsAbout'
import CustomButton from '../components/CustomButton'
import Certifications from '../components/Certifications'

export default{
    metaInfo() {
        return {
            title: this.$t('meta.about.title'),
            meta: [{
                vmid: 'description',
                name: 'description',
                content: this.$t('meta.about.description')
            }]
        }
    },
    components : {
        'personal-info' : PersonalInfo,
        'tech-skills' : TechSkills,
        'career' : ExperiencesTimeLIne,
        'my-life' : MyLife,
        'professional-interests' : ProfessionalInterests,
        'custom-button': CustomButton,
        'certifications':Certifications
    }
}
</script>
