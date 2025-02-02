<template>
    <v-container fluid>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">CERTIFICAZIONI </h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

        <v-row
            align-items="center"
            justify="center">
            <v-col
                md="4"
                xs="4">
                    <div data-iframe-width="250" data-iframe-height="270" data-share-badge-id="e847d59c-73bf-4746-9834-fbdc4ef0ce1b" data-share-badge-host="https://www.credly.com"></div>
            </v-col>
            <v-col
                md="4"
                xs="4">
                    <div data-iframe-width="250" data-iframe-height="270" data-share-badge-id="73f74c74-d139-4639-952d-69894bd4c1f4" data-share-badge-host="https://www.credly.com"></div>
            </v-col>
            <v-col
                md="4"
                xs="4">
                    <div data-iframe-width="250" data-iframe-height="270" data-share-badge-id="75f323b6-e405-4169-95cb-2b650d130415" data-share-badge-host="https://www.credly.com"></div>
            </v-col>
                
        </v-row>

    </v-container>    
</template>

<script>
export default {
    mounted() {
        const script = document.createElement('script');
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
    },
}
</script>
<style scoped>
</style>