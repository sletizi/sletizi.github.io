<template>
  <v-main>
    <!-- TAB BAR ------------------------------------------------------- -->
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

    <!-- HEADER -------------------------------------------------------- -->
    <v-row align="center" justify="center">
      <v-col align="center" cols="12" md="6">
        <h1 class="text-center">{{ selectedProject.name }}</h1>
        <v-btn class="text-center ma-3" :href="selectedProject.github" icon>
          <v-icon size="40px">mdi-github</v-icon>
        </v-btn>
      </v-col>

      <v-col align="center" cols="12" md="6">
        <v-img
          :src="require(`../assets/projects_logos/${selectedProject.logo_file}`)"
          max-width="150"
          aspect-ratio="1"
          class="ma-4"
          style="padding:10px;border-radius:16px;background:#fff;object-fit:contain;box-shadow:0 2px 8px rgba(0,0,0,0.1);"
        />
      </v-col>
    </v-row>

    <!-- DESCRIZIONE --------------------------------------------------- -->
    <p class="ma-4 pa-4"><span v-html="selectedProject.description"></span></p>

    <!-- TAG TECNOLOGIE ------------------------------------------------ -->
    <v-row align="center" justify="center" class="ma-3">
      <v-btn
        v-for="tech in selectedProject.techs"
        :key="tech"
        small
        rounded
        color="primary"
        class="ma-1"
        dark
      >
        {{ tech }}
      </v-btn>
    </v-row>

    <!-- CAROSELLO SCREENSHOT ------------------------------------------ -->
    <v-row
      v-if="hasScreen && !isPowerBIGuide"
      align="center"
      justify="center"
      class="ma-2"
    >
      <v-carousel height="70vh" hide-delimiters cycle>
        <v-carousel-item
          v-for="img in selectedProject.screenshots"
          :key="img"
          :src="require(`../assets/projects_screen/${img}`)"
          contain
        />
      </v-carousel>
    </v-row>

    <!-- 📄 PDF VIEWER (solo se non è la guida) ------------------------ -->
    <h2 v-if="selectedProject.base64PDF && !isPowerBIGuide"
        class="text-center ma-4">Report</h2>

    <v-row
      v-if="selectedProject.base64PDF && !isPowerBIGuide"
      align="center"
      justify="center"
    >
      <v-col align="center" cols="12" md="12">
        <div
          style="width:90%;margin:auto;margin-bottom:10px;border:3px solid #000;"
        >
          <div
            v-if="loadedRatio > 0 && loadedRatio < 1"
            :style="{width: loadedRatio*100 + '%'}"
            style="background:#4caf50;color:#fff;text-align:center"
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
          />
        </div>
      </v-col>
    </v-row>

    <!-- NAVIGAZIONE PAGINE PDF (solo se non è la guida) --------------- -->
    <v-row
      v-if="selectedProject.base64PDF && !isPowerBIGuide"
      align="center"
      justify="center"
      class="mb-4 ml-3 mr-3"
    >
      <v-btn small class="ma-4" @click="page--" :disabled="page <= 1">-</v-btn>

      <v-text-field
        :value="`${page} di ${numPages}`"
        label="Numero pagina"
        readonly
        style="max-width:200px"
      />

      <v-btn small class="ma-4" @click="page++" :disabled="page >= numPages">
        +
      </v-btn>
    </v-row>

    <!-- 🌐 IFRAME GUIDA DOCSIFY --------------------------------------- -->
    <v-row v-if="isPowerBIGuide" align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <iframe
          src="https://sletizi.github.io/PowerBiGuide/"
          style="border:0;width:100%;height:80vh;"
          title="Power BI Guide"
        ></iframe>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import projectsData from "@/data/projects.json";
import VuePdfEmbed from "vue-pdf-embed/dist/vue2-pdf-embed";

export default {
  components: { VuePdfEmbed },

  data() {
    return {
      selectedTab: 0,
      loadedRatio: 0,
      page: 1,
      numPages: 1,
    };
  },

  computed: {
    selectedProject() {
      return projectsData[this.selectedTab];
    },
    hasScreen() {
      return this.selectedProject.screenshots.length > 0;
    },
    isPowerBIGuide() {
      return this.selectedProject.name === "Power BI Guide";
    },
  },

  methods: {
    projects_name() {
      return projectsData.map((p) => p.name);
    },
    handleDocumentRender() {
      this.numPages = this.$refs.pdfRef.pageCount;
    },
  },

  watch: {
    selectedTab() {
      this.page = 1;          // reset pagina PDF
      this.loadedRatio = 0;   // reset progress bar
    },
  },
};
</script>
