<template>
  <v-main>
    <v-tabs
      background-color="secondary"
      fixed-tabs
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-utline"
      show-arrows
      v-model="selectedTab"
    >
      <v-tab v-for="name in projects_name()" :key="name">
        {{ name }}
      </v-tab>
    </v-tabs>
    <v-row align="center" justify="center">
      <v-col align="center" cols="12" md="6">
        <h1 class="text-center">{{ selectedProject.name }}</h1>
        <v-btn class="text-center ma-3" :href="selectedProject.github" icon>
          <v-icon size="40px"> mdi-github </v-icon>
        </v-btn>
      </v-col>
      <v-col align="center" cols="12" md="6">
        <v-avatar size="170" radius="10px">
          <v-img
            contain
            :src="
              require(`../assets/projects_logos/${selectedProject.logo_file}`)
            "
            class="white--text align-end"
          />
        </v-avatar>
      </v-col>
    </v-row>
    <p class="ma-4 pa-4"><span v-html="selectedProject.description"></span></p>
    <v-row align="center" justify="center" class="ma-3">
      <v-btn
        small
        v-for="tech in selectedProject.techs"
        :key="tech"
        rounded
        color="primary"
        class="ma-1"
        dark
      >
        {{ tech }}
      </v-btn>
    </v-row>
    <v-row align="center" justify="center" class="ma-2" v-if="hasScreen">
      <v-carousel height="auto" hide-delimiters cycle>
        <v-carousel-item
          contain
          v-for="images in selectedProject.screenshots"
          :key="images"
          :src="require(`../assets/projects_screen/${images}`)"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <h2 class="text-center ma-4">Report</h2>
    <v-row align="center" justify="center">
      <v-col  align="center" cols="12" md="12">
        <div
          style="
            width: 90%;
            margin: auto;
            margin-bottom: 10px;
            border: 3px solid black;
          "
        >
          <div
            v-if="loadedRatio > 0 && loadedRatio < 1"
            style="background-color: green; color: white; text-align: center"
            :style="{ width: loadedRatio * 100 + '%' }"
          >
            {{ Math.floor(loadedRatio * 100) }}%
          </div>
          <vue-pdf-embed
          ref="pdfRef"

            :source="`data:application/pdf;base64,${selectedProject.base64PDF}`"
            :page="page"
            @progress="loadedRatio = $event"
            @link-clicked="page = $event"
            @rendered="handleDocumentRender"
          ></vue-pdf-embed>
        </div>
      </v-col>
      
    </v-row>
    <v-row align="center" justify="center" class="mb-4 ml-3 mr-3">
      <v-btn small class="text-center ma-4" @click="page = page -1" :disabled="page<=1">
          -
        </v-btn>
        <v-text-field
          :value="`${page} di ${numPages}`"
          width="400px"
          label="Numero pagina"
          min="1"
          :max="numPages"
          style="maxWidth: 700px"
    ></v-text-field> 
        <v-btn small class="text-center ma-4"  @click="page = page  + 1" :disabled="page >= numPages">
          +
        </v-btn>

    </v-row>
  </v-main>
</template>

<script>
import projectsData from "@/data/projects.json";
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  methods: {
    handleDocumentRender() {
      this.isLoading = false
      this.numPages = this.$refs.pdfRef.pageCount
    },
    error: function (err) {
      console.log(err);
    },
    projects_name: function () {
      return projectsData.map((p) => p.name);
    },
    getProjectByIndex: function (index) {
      return projectsData[index];
    },
  },
  data: function () {
    return {
      selectedTab: 0,
      loadedRatio: 0,
      page: 1,
      numPages: 1,
    };
  },
  computed: {
    selectedProject: function () {
      return this.getProjectByIndex(this.selectedTab);
    },
    hasScreen: function () {
      return this.getProjectByIndex(this.selectedTab).screenshots.length > 0;
    },
  },
  watch: {
    selectedTab: function () {
      this.page = 1; //when seleted tag changed set pdf on page 1
    },
  }
};
</script>
