<template>
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="../assets/room.jpeg"
        class="position-relative"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row
              align="start"
              justify="start"
              class="white--text"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <v-row
                  align="center"
                  justify="center"
                >
                  <v-btn
                    icon
                    fab
                    outlined
                    large
                    class="scroll-down"
                    @click="$vuetify.goTo('#about-me')"
                    :class="{ 'at-bottom': movedToBottom }"
                  >
                    <v-icon large>mdi-chevron-down</v-icon>
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </template>
  

  <script>
  export default {
    data() {
      return {
        movedToBottom: false,
      };
    },
    mounted() {
      setTimeout(() => {
        this.movedToBottom = true;
      }, 2000); // dopo 2 secondi la freccia si sposta
    },
  };
  </script>
  
  <style>
  .scroll-down {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50%;
  transition: bottom 1s ease;
  color: white;
  z-index: 10;
}

/* Quando arriva in fondo */
.scroll-down.at-bottom {
  bottom: 12vh;
  animation: bounce 2s infinite;
}

/* Animazione bounce */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

  
</style>
