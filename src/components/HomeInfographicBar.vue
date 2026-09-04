<template>
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        :max-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="../assets/room.webp"
        class="position-relative hero"
        gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.38) 45%, rgba(0,0,0,.62)"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row
              align="center"
              justify="center"
              class="white--text text-center"
            >
              <v-col cols="12" class="hero-copy">
                <h1
                  class="font-weight-bold hero-name"
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-4']"
                >
                  Simone Letizi
                </h1>
              </v-col>
            </v-row>

            <v-btn
              icon
              fab
              outlined
              large
              class="scroll-down"
              :aria-label="$t('hero.scrollDown')"
              @click="$vuetify.goTo('#about-me')"
              :class="{ 'at-bottom': movedToBottom }"
            >
              <v-icon large>mdi-chevron-down</v-icon>
            </v-btn>
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

  <style scoped>
.hero-copy {
  animation: fade-up 1.1s ease-out both;
}

.hero-name {
  letter-spacing: 2px !important;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.55);
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-copy {
    animation: none;
  }
}
</style>

<style>
  .scroll-down {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 28%;
  transition: bottom 1s ease;
  color: white;
  z-index: 10;
}

/* Quando arriva in fondo */
.scroll-down.at-bottom {
  bottom: 8vh;
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
