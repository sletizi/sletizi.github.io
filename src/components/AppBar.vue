<template>
  <nav>
    <v-app-bar>
      <v-toolbar-title>
        <v-avatar
          class="mr-3 ma-2"
          color="grey lighten-5"
          size="60"
          style="overflow: hidden; aspect-ratio: 1/1;"
        >
        <v-img
          cover
          src="../assets/logos/logo.png"
          :class="{ 'rotate-logo': logoRotation }"
          @click="goHome"
          style="max-height: 50px; cursor: pointer;"
        ></v-img>
        </v-avatar>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- DESKTOP NAV -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in navItems"
          :key="item.icon"
          :href="item.href && !item.to ? item.href : undefined"
          :target="item.target || null"
          text
          @click="handleClick($event, item)"

        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- MOBILE NAV -->
      <v-menu v-if="onMobile" class="hidden-md-and-up" left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in navItems"
            :key="item.icon"
            :href="item.href && !item.to ? item.href : undefined"
            :target="item.target || null"
            @click="handleClick($event, item)"
            >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logoRotation: false,
      navItems: [
        {
          icon: "mdi-home",
          title: "Home",
          to: () => this.navigateIfNeeded('/'),
        },
        {
          icon: "mdi-account",
          title: "Su di me",
          to: () => this.navigateIfNeeded('/about'),
        },
        {
          icon: "mdi-brush",
          title: "Progetti",
          to: () => this.navigateIfNeeded('/projects'),
        },
        {
          icon: "mdi-file-account",
          title: "CV",
          href: "https://drive.google.com/file/d/1kr6Z4y7s8rjbrjvNc6rWa16q1ZhXnbTB/view?usp=sharing", 
          target: "_blank"
        },
        {
          icon: "mdi-email",
          title: "Contatti",
          to: () => this.$vuetify.goTo('#contact_me'),
          href: "#contact_me"
        }
      ]
    };
  },
  computed: {
    onMobile() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  methods: {
    navigateIfNeeded(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    goHome() {
      this.logoRotation = true;
      setTimeout(() => {
        this.logoRotation = false;
        if (this.$route.path !== '/') {
          this.$router.replace('/');
        }
      }, 600); // durata identica all’animazione CSS
    },
    handleClick(event, item) {
      if (item.to && typeof item.to === 'function') {
        event.preventDefault(); // blocca solo la navigazione se c'è una funzione
        item.to();
      }
      // altrimenti lascia agire href normalmente (es. link al CV)
    }

  }
};
</script>

<style scoped>
.rotate-logo {
  animation: rotate 0.6s ease-in-out;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
