<template>
    <v-container >
        <h2 class="display-2 font-weight-bold mb-3"> ISTRUZIONE & ESPERIENZE LAVORATIVE </h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>
        <v-row>
            <v-col
            cols="12"
            md="6"
            align="center"
            justify="center">
                <timeline
                    :timeline-items="experiences"
                    :message-when-no-items="messageWhenNoItems"                
                    order="desc"
                />
            </v-col>
           <v-col
            cols="12"
            md="6"
            align="center"
            justify="center">
                <v-row
                align="center"
            justify="center">
                <v-img
                    src="../assets/me_working.jpg"
                />
                </v-row>
                <v-row
                align="center"
            justify="center">
                    <v-img
                    src="../assets/my_setup.jpg"
                />
                </v-row>    
            </v-col>        
        </v-row>  
        
    </v-container>        
</template>

<script>
import Timeline from 'timeline-vuejs'
export default {
    data(){
        return {
            messageWhenNoItems: 'There are not items',
            experiences : [
        {
            from: new Date(2021,10),
            title: "Data Engineer - Iconsulting S.p.A.",
            description:"Realizzazione di flussi ETL per l'alimentazione di dashboard analitiche realizzate in Microsoft PowerBI",
            color : "#B1CFEB"
        },
        {
            from: new Date(2021,8),
            title: "Docente senior progetto 'SVILUPPO APP E CONCETTI DI INTELLIGENZA ARTIFICIALE' - Liceo scientifico Fulcieri Forlì",
            description:"Ideazione del programma, preparazione del materiale didattico e spiegazione durante le lezioni ",
            color : "#B1CFEB"
        },
        {
            from: new Date(2021,6),
            title: "Docente senior progetto Ragazze digitali - percorso 'Inventa la tua app con Kodular'",
            description:"Ideazione del programma, preparazione del materiale didattico e spiegazione durante le lezioni ",
            color : "#B1CFEB"
        },
        {
            from: new Date(2021,3),
            title: "Esperto esterno - progetto PON coding lab - Istituto Bramante Genga",
            description:"Ideazione del programma, preparazione del materiale didattico e spiegazione durante le lezioni ",
            color : "#B1CFEB"
        },
        {
            from: new Date(2021,2),
            title: "Laurea magistrale",
            description:"<b>Laurea magistrale in Ingegneria e Scienze Informatiche</b> presso l'Università di Bologna (sede di Cesena). <br> votazione: 110 e lode. <br> I miei studi si sono concentrati principalmente nell'analisi di grandi quantità di dati, aziendali e non. (Business Intelligence, Big Data, Data mining, Text Mining)",
            color : "#BFA89E"
        },
        {
            from: new Date(2020,9),
            title: "Stage",
            description:"Data science presso <b>Data Reply s.r.l.</b>",
            color : "#B1CFEB"
        },
        {
            from: new Date(2019,1),
            title: "Lavoro",
            description:"<b>Tutor didattico</b> di laboratorio con svolgimento di lezioni frontali nel corso di <b>Programmazione di sistemi mobile</b> offerto dall'<b>Università di Bologna</b> presso il polo di Cesena",
            color : "#B1CFEB"
        },
        {
            from: new Date(2018, 6),
            title: "Laurea triennale",
            description:"<b>Laurea triennale in Ingegneria e Scienze Informatiche</b> presso l'Università di Bologna (sede di Cesena). <br> votazione: 100/110",
            color : "#BFA89E"
        },
        {
            from: new Date(2018, 9),
            title: "Lavoro - Docente",
            description: "<b>Docente di Informatica</b> presso l'istituto Centro Studi Manzoni di Fano.",
            color : "#B1CFEB"
        },
        {
            from: new Date(2017, 1),
            title: "Stage",
            description:"<b>Stage</b> con mansioni di programmatore Android presso <b>Computer Sistemi s.r.l.</b>",
            color : "#B1CFEB"
        },
        {
            from: new Date(2013, 7),
            title: "Diploma",
            description:"<b>Diploma di maturità in Ragioneria Perito Commerciale e Programmatore</b>\n Votazione: 98/100",
            color : "#BFA89E"
        }],
        }
    },
    components: {
        'timeline':Timeline
    }
}
</script>