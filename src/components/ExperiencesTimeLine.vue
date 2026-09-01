<template>
    <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-center"> ISTRUZIONE &amp; ESPERIENZE LAVORATIVE </h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

        <v-row align="center" justify="center" class="mb-2">
            <v-col
                cols="12"
                md="7">
                <p class="body-1 grey--text text--darken-2 text-center text-md-left mb-5">
                    Due strade che corrono in parallelo: il percorso nei <strong>dati</strong> e quello della
                    <strong>docenza</strong>. Scegli quale seguire.
                </p>

                <div class="d-flex flex-wrap justify-center justify-md-start">
                    <v-chip
                        class="ma-1"
                        :color="allSelected ? 'grey darken-2' : 'grey lighten-3'"
                        :text-color="allSelected ? 'white' : 'grey darken-2'"
                        @click="selectAll">
                        <v-icon left small>mdi-infinity</v-icon>
                        Tutto
                    </v-chip>
                    <v-chip
                        v-for="track in trackList"
                        :key="track.key"
                        class="ma-1"
                        :color="isActive(track.key) ? track.color : 'grey lighten-3'"
                        :text-color="isActive(track.key) ? 'white' : 'grey darken-2'"
                        @click="toggle(track.key)">
                        <v-icon left small>{{ isActive(track.key) ? 'mdi-check' : track.icon }}</v-icon>
                        {{ track.label }}
                        <span class="ml-2 font-weight-bold">{{ countOf(track.key) }}</span>
                    </v-chip>
                </div>

                <div class="caption grey--text mt-3 text-center text-md-left">
                    {{ filteredItems.length }} tappe su {{ items.length }}
                </div>
            </v-col>

            <v-col
                cols="12"
                md="5"
                align="center"
                justify="center">
                <img src="../assets/me_action_figure.webp" alt="Action figure di Simone Letizi" class="action-figure" />
            </v-col>
        </v-row>

        <v-row v-if="!isDense" no-gutters class="mt-6">
            <v-col cols="6" class="text-center">
                <span class="overline lane-label" :style="{ color: leftLaneColor }">{{ leftLaneLabel }}</span>
            </v-col>
            <v-col cols="6" class="text-center">
                <span class="overline lane-label" :style="{ color: tracks.teaching.color }">{{ tracks.teaching.label }}</span>
            </v-col>
        </v-row>

        <v-timeline
            v-if="filteredItems.length"
            align-top
            :dense="isDense">
            <v-timeline-item
                v-for="item in filteredItems"
                :key="item.id"
                :color="tracks[item.track].color"
                :icon="tracks[item.track].icon"
                :large="!!item.current"
                :left="sideOf(item) === 'left'"
                :right="sideOf(item) === 'right'"
                fill-dot>

                <template v-slot:opposite>
                    <span
                        class="period font-weight-bold"
                        :style="{ color: tracks[item.track].color }">{{ periodOf(item) }}</span>
                </template>

                <v-card class="exp-card text-left" elevation="3">
                    <div class="exp-card__accent" :style="{ backgroundColor: tracks[item.track].color }"></div>
                    <v-card-title class="body-1 font-weight-bold exp-card__title">
                        {{ item.role }}
                    </v-card-title>
                    <v-card-subtitle class="pb-1 d-flex align-center">
                        <v-icon x-small class="mr-1" :color="tracks[item.track].color">{{ tracks[item.track].icon }}</v-icon>
                        {{ item.org }}
                    </v-card-subtitle>
                    <v-card-text class="pb-4">
                        <div
                            v-if="isDense"
                            class="caption font-weight-bold mb-2 period-inline"
                            :style="{ color: tracks[item.track].color }">
                            {{ periodOf(item) }}
                        </div>
                        <v-chip
                            v-if="item.current"
                            x-small
                            class="mb-2"
                            color="green lighten-5"
                            text-color="green darken-2">
                            in corso
                        </v-chip>
                        <div v-if="item.description" class="body-2 grey--text text--darken-2">
                            {{ item.description }}
                        </div>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>

        <v-card v-else flat class="pa-8 text-center grey--text mt-6">
            <v-icon size="48" color="grey lighten-1">mdi-filter-remove-outline</v-icon>
            <div class="body-1 mt-3">Nessun percorso selezionato.</div>
            <v-btn text color="primary" class="mt-2" @click="selectAll">Mostra tutto</v-btn>
        </v-card>

    </v-container>
</template>

<script>
export default {
    data(){
        return {
            selected: ['data', 'teaching', 'education'],
            tracks: {
                data: {
                    key: 'data',
                    label: 'Data Engineering',
                    icon: 'mdi-database',
                    color: '#5B879B',
                    side: 'left',
                    // ruoli continuativi: la fine di uno coincide con l'inizio del successivo
                    chained: true
                },
                education: {
                    key: 'education',
                    label: 'Formazione',
                    icon: 'mdi-school',
                    color: '#4A4F4C',
                    side: 'left',
                    // lauree e diplomi sono date singole, non periodi
                    chained: false
                },
                teaching: {
                    key: 'teaching',
                    label: 'Docenza',
                    icon: 'mdi-human-male-board',
                    color: '#BFA89E',
                    side: 'right',
                    // progetti singoli, con buchi in mezzo: niente concatenamento
                    chained: false
                }
            },
            items: [
                {
                    id: 'tuidi',
                    track: 'data',
                    role: 'Senior Data Engineer',
                    org: 'Tuidi',
                    from: new Date(2025, 9),
                    current: true,
                    description: ''
                },
                {
                    id: 'reply-senior',
                    track: 'data',
                    role: 'Analytics Engineer · Senior Consultant',
                    org: 'Data Reply IT',
                    from: new Date(2024, 2),
                    description: ''
                },
                {
                    id: 'reply-consultant',
                    track: 'data',
                    role: 'Analytics Engineer · Consultant',
                    org: 'Data Reply IT',
                    from: new Date(2023, 4),
                    description: ''
                },
                {
                    id: 'iconsulting',
                    track: 'data',
                    role: 'Business Analytics Specialist',
                    org: 'Iconsulting S.p.A.',
                    from: new Date(2021, 10),
                    description: ''
                },
                {
                    id: 'fulcieri',
                    track: 'teaching',
                    role: 'Docente senior — «Sviluppo app e concetti di intelligenza artificiale»',
                    org: 'Liceo Scientifico Fulcieri, Forlì',
                    from: new Date(2021, 8),
                    description: ''
                },
                {
                    id: 'ragazze-digitali',
                    track: 'teaching',
                    role: 'Docente senior — Ragazze Digitali, «Inventa la tua app con Kodular»',
                    org: 'Progetto Ragazze Digitali',
                    from: new Date(2021, 6),
                    description: 'Ideazione del programma, preparazione del materiale didattico e docenza in aula.'
                },
                {
                    id: 'pon-coding-lab',
                    track: 'teaching',
                    role: 'Esperto esterno — progetto PON Coding Lab',
                    org: 'Istituto Bramante Genga',
                    from: new Date(2021, 3),
                    description: 'Ideazione del programma, preparazione del materiale didattico e docenza in aula.'
                },
                {
                    id: 'laurea-magistrale',
                    track: 'education',
                    role: 'Laurea Magistrale in Ingegneria e Scienze Informatiche',
                    org: 'Università di Bologna — Campus di Cesena',
                    from: new Date(2021, 2),
                    description: "Votazione 110 e lode. Studi focalizzati sull'analisi di grandi quantità di dati: Business Intelligence, Big Data, Data Mining e Text Mining."
                },
                {
                    id: 'stage-reply',
                    track: 'data',
                    role: 'Stage — Log Analysis: Anomaly Detection',
                    org: 'Data Reply IT',
                    from: new Date(2020, 9),
                    // data reale: fra la fine dello stage e Iconsulting c'e' un
                    // buco, quindi il concatenamento automatico qui non vale
                    to: new Date(2021, 2),
                    description: ''
                },
                {
                    id: 'tutor-unibo',
                    track: 'teaching',
                    role: 'Tutor didattico — Programmazione di Sistemi Mobile',
                    org: 'Università di Bologna — Campus di Cesena',
                    from: new Date(2019, 1),
                    description: 'Lezioni frontali e attività di laboratorio.'
                },
                {
                    id: 'laurea-triennale',
                    track: 'education',
                    role: 'Laurea in Ingegneria e Scienze Informatiche',
                    org: 'Università di Bologna — Campus di Cesena',
                    from: new Date(2018, 6),
                    description: 'Votazione 100/110.'
                }
            ]
        }
    },
    computed: {
        trackList(){
            return [this.tracks.data, this.tracks.teaching, this.tracks.education]
        },
        allSelected(){
            return this.selected.length === this.trackList.length
        },
        // Date di fine: quella esplicita se c'e', altrimenti - sulle tracce
        // continuative - l'inizio dell'esperienza successiva. Si calcola su
        // TUTTI gli item, non su quelli filtrati, se no i periodi cambierebbero
        // a seconda dei filtri attivi.
        endDates(){
            const byTrack = {}
            const ends = {}

            this.sortedItems.forEach(item => {
                const chained = item.chained !== undefined
                    ? item.chained
                    : this.tracks[item.track].chained
                ends[item.id] = item.to || (chained ? byTrack[item.track] : null) || null
                byTrack[item.track] = item.from
            })

            return ends
        },
        sortedItems(){
            return this.items.slice().sort((a, b) => b.from - a.from)
        },
        filteredItems(){
            return this.sortedItems.filter(item => this.selected.includes(item.track))
        },
        activeSides(){
            return this.selected.map(key => this.tracks[key].side)
        },
        isDense(){
            return this.$vuetify.breakpoint.smAndDown
                || !this.activeSides.includes('left')
                || !this.activeSides.includes('right')
        },
        leftLaneLabel(){
            return this.trackList
                .filter(track => track.side === 'left' && this.isActive(track.key))
                .map(track => track.label)
                .join(' · ')
        },
        leftLaneColor(){
            return this.tracks[this.isActive('data') ? 'data' : 'education'].color
        }
    },
    methods: {
        isActive(key){
            return this.selected.includes(key)
        },
        toggle(key){
            this.selected = this.isActive(key)
                ? this.selected.filter(item => item !== key)
                : this.selected.concat(key)
        },
        selectAll(){
            this.selected = this.trackList.map(track => track.key)
        },
        countOf(key){
            return this.items.filter(item => item.track === key).length
        },
        sideOf(item){
            return this.tracks[item.track].side
        },
        formatDate(date){
            return date.toLocaleDateString('it-IT', { month: 'short', year: 'numeric' })
        },
        periodOf(item){
            const start = this.formatDate(item.from)
            if (item.current) return start + ' — oggi'

            const end = this.endDates[item.id]
            return end ? start + ' — ' + this.formatDate(end) : start
        }
    }
}
</script>

<style scoped>
.action-figure {
  max-width: 100%;
  height: auto;
  width: 300px;
  display: block;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .action-figure {
    width: 180px;
  }
}

@media (max-width: 480px) {
  .action-figure {
    width: 120px;
  }
}

.lane-label {
  letter-spacing: 2px !important;
}

.period {
  font-size: 0.95rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.period-inline {
  letter-spacing: 1px;
  text-transform: uppercase;
}

.exp-card {
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.exp-card:hover {
  transform: translateY(-3px);
}

.exp-card__accent {
  height: 4px;
  width: 100%;
}

.exp-card__title {
  line-height: 1.35;
  word-break: normal;
}
</style>
