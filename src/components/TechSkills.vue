<template>
    <v-container fluid>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">{{ $t('techSkills.title') }}</h2>

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

            <!-- SINISTRA: loghi delle tecnologie, e sotto la sfera dei tag -->
            <v-col
                cols="12"
                md="6"
                xs="12">
                <v-container>
                    <v-row justify="center">
                        <v-col
                            align="center"
                            cols="4"
                            v-for="skill in tech_skills"
                            :key="skill.name">
                            <a
                                :href="skill.site"
                                :title="skill.name"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="tech-logo">
                                <v-img contain :src="skill.logo_url" :alt="skill.name" width='100' height='50'/>
                            </a>
                        </v-col>
                    </v-row>

                    <div class="tagcloud-wrapper">
                        <span ref="cloud" class="tagcloud"></span>
                    </div>
                </v-container>
            </v-col>

            <!-- DESTRA: immagine -->
            <v-col
                cols="12"
                md="6"
                xs="12">
                <v-img
                    src="@/assets/google_cite.webp"
                    :alt="$t('techSkills.quoteAlt')"
                    width="auto"
                    height="auto"
                    style="opacity: 0.8;"
                ></v-img>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
// https://github.com/cong-min/TagCloud - sfera 3D in CSS transform, zero dipendenze
import TagCloud from 'TagCloud'

export default {
    data() {
        return {
            cloud: null,
            tech_skills: [
                {
                    name:"PowerBI",
                    site:"https://powerbi.microsoft.com/",
                    logo_url:require('../assets/techs/powerbi.png'),
                },
                {
                    name:"Git",
                    site:"https://git-scm.com/",
                    logo_url:require('../assets/techs/git.png'),
                },
                {
                    name:"SQL",
                    site:"https://it.wikipedia.org/wiki/SQL",
                    logo_url:require('../assets/techs/sql.png'),
                },
                {
                    name:"GCP",
                    site:"https://cloud.google.com/",
                    logo_url:require('../assets/techs/GCP.png'),
                },
                {
                    name:"dbt",
                    site:"https://www.getdbt.com/",
                    logo_url:require('../assets/techs/dbt.png'),
                },
                {
                    name:"Databricks",
                    site:"https://www.databricks.com/",
                    logo_url:require('../assets/techs/databricks.svg'),
                },
                {
                    name:"AWS",
                    site:"https://aws.amazon.com/",
                    logo_url:require('../assets/techs/AWS.png'),
                },
                {
                    name:"Tableau",
                    site:"https://www.tableau.com/",
                    logo_url:require('../assets/techs/tableau.svg'),
                },
                {
                    name:"Python",
                    site:"https://www.python.org/",
                    logo_url:require('../assets/techs/python.png'),
                }]


        }
    },
    computed:{
        // i tag della sfera sono link veri: TagCloud li inserisce come HTML
        // (useHTML), e le stringhe sono tutte definite qui sopra
        cloudTags () {
            return this.tech_skills.map(t =>
                `<a href="${t.site}" target="_blank" rel="noopener noreferrer">${t.name}</a>`
            )
        }
    },
    mounted() {
        this.cloud = TagCloud(this.$refs.cloud, this.cloudTags, {
            radius: this.$vuetify.breakpoint.smAndDown ? 110 : 150,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: true,
            useHTML: true
        })

        // maxSpeed accetta solo 'slow' | 'normal' | 'fast' (0.5 | 1 | 2):
        // 'fast' era il doppio, qui la alzo solo del 40%
        this.cloud.maxSpeed = 1.4
    },
    beforeDestroy() {
        if (this.cloud) {
            this.cloud.destroy()
        }
    },
}
</script>
<style scoped>
.tech-logo {
    display: inline-block;
    opacity: 0.85;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.tech-logo:hover,
.tech-logo:focus-visible {
    opacity: 1;
    transform: translateY(-3px);
}

.tech-logo:focus-visible {
    outline: 2px solid #5B879B;
    outline-offset: 6px;
    border-radius: 4px;
}

.tagcloud-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    /* riservo lo spazio della sfera: senza, il contenuto sotto sobbalza
       quando TagCloud finisce di montare */
    min-height: 320px;
}

@media (max-width: 960px) {
    .tech-logo {
    display: inline-block;
    opacity: 0.85;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.tech-logo:hover,
.tech-logo:focus-visible {
    opacity: 1;
    transform: translateY(-3px);
}

.tech-logo:focus-visible {
    outline: 2px solid #5B879B;
    outline-offset: 6px;
    border-radius: 4px;
}

.tagcloud-wrapper {
        min-height: 240px;
        margin-top: 24px;
    }
}
</style>

<style>
/* non scoped: gli span li crea TagCloud a runtime, fuori dallo scope del componente */
.tagcloud {
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #4A4F4C;
}

@media (max-width: 960px) {
    .tagcloud {
        font-size: 15px;
    }
}

.tagcloud--item a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
}

.tagcloud--item a:hover,
.tagcloud--item a:focus-visible {
    color: #5B879B;
    text-decoration: underline;
}
</style>
