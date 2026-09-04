<template>
     <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase">{{ $t('projectsSection.title') }}</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row justify="center">
            <v-col
              v-for="project in projects"
              :key="project.name"
              cols="12"
              md="6"
            >
              <v-card
                class="d-flex flex-column mx-auto text-center"
                height="100%"
                max-width="520"
                color="grey lighten-5"
                elevation="12"
                shaped
              >
                <div class="pt-10 pb-4">
                  <v-avatar class="elevation-12" size="160">
                    <v-img
                      contain
                      :src="logoOf(project)"
                      :alt="project.name"
                    />
                  </v-avatar>
                </div>

                <v-card-title class="justify-center font-weight-black text-uppercase">
                  {{ project.name }}
                </v-card-title>

                <v-card-subtitle>
                  {{ $t('projectsSection.techLabel', { tech: $t('projects.' + project.id + '.techDescription') }) }}
                </v-card-subtitle>

                <v-card-text
                  class="subtitle-1 flex-grow-1"
                  v-html="sanitizeHtml($t('projects.' + project.id + '.shortDescription'))"
                ></v-card-text>

                <div
                  v-if="project.collaborators && project.collaborators.length"
                  class="caption grey--text text--darken-1 px-4 pb-3"
                >
                  <v-icon x-small class="mr-1">mdi-account-group</v-icon>
                  {{ $t('projectsSection.collaborators', { names: project.collaborators.join(', ') }) }}
                </div>

                <v-card-actions class="justify-center pb-8">
                  <v-btn
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    outlined
                    color="grey darken-1"
                  >
                    <v-icon left>{{ repoIcon(project.github) }}</v-icon>
                    {{ repoLabel(project.github) }}
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

          </v-row>
          <br>
          <v-btn
                color="grey"
                to="/projects"
                outlined
                large
            >
                <span class="grey--text text--darken-1 font-weight-bold">
                  {{ $t('projectsSection.cta') }}
                </span>
            </v-btn>
        </v-container>
</template>

<script>
import projectsData from '@/data/projects.json';
import { sanitizeHtml } from '@/utils/sanitizeHtml';

// I progetti da mettere in vetrina sulla home: la struttura (logo, repo)
// arriva da projects.json e i testi dalle traduzioni, cosi' restano
// allineati alla pagina Progetti.
const IN_VETRINA = ['spotistats', 'scanbage'];

export default {
    computed: {
        projects() {
            return IN_VETRINA
                .map(id => projectsData.find(project => project.id === id))
                .filter(Boolean)
        }
    },
    methods: {
        sanitizeHtml,
        logoOf(project) {
            return require(`../assets/projects_logos/${project.logo_file}`)
        },
        isGitlab(url) {
            return url.includes('gitlab')
        },
        repoIcon(url) {
            return this.isGitlab(url) ? 'mdi-gitlab' : 'mdi-github'
        },
        repoLabel(url) {
            return this.isGitlab(url)
                ? this.$t('projectsSection.viewOnGitLab')
                : this.$t('projectsSection.viewOnGitHub')
        }
    }
}
</script>
