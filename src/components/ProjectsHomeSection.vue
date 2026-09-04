<template>
     <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3"> PROGETTI RECENTI </h2>

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
                  Tecnologie e ambito principale: {{ project.tech_description }}
                </v-card-subtitle>

                <v-card-text
                  class="subtitle-1 flex-grow-1"
                  v-html="sanitizeHtml(project.short_description)"
                ></v-card-text>

                <div
                  v-if="project.collaborators && project.collaborators.length"
                  class="caption grey--text text--darken-1 px-4 pb-3"
                >
                  <v-icon x-small class="mr-1">mdi-account-group</v-icon>
                  Con {{ project.collaborators.join(', ') }}
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
                  Visualizza tutti i progetti
                </span>
            </v-btn>
        </v-container>
</template>

<script>
import projectsData from '@/data/projects.json';
import { sanitizeHtml } from '@/utils/sanitizeHtml';

// I progetti da mettere in vetrina sulla home: i dati (testo, logo, repo)
// arrivano da projects.json, cosi' restano allineati alla pagina Progetti.
const IN_VETRINA = ['SpotiStats', 'Scanbage'];

export default {
    computed: {
        projects() {
            return IN_VETRINA
                .map(name => projectsData.find(project => project.name === name))
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
            return this.isGitlab(url) ? 'Vedi su GitLab' : 'Vedi su GitHub'
        }
    }
}
</script>
