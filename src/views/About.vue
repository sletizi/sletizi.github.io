<template>
    <v-content align="center">
          <personal-info class="mb-4"/>
          <custom-button class="ma-4" link="/cv" buttonText="VAI AL MIO CV"/>
          <career/>
          <tech-skills/>  
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

export default{
    components : {
        'personal-info' : PersonalInfo,
        'tech-skills' : TechSkills,
        'career' : ExperiencesTimeLIne,
        'my-life' : MyLife,
        'professional-interests' : ProfessionalInterests,
        'custom-button': CustomButton
    }
}
</script>
