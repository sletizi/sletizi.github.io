<template>
  <div class="lang-switcher" role="group" :aria-label="$t('language.switch')">
    <button
      v-for="locale in locales"
      :key="locale"
      type="button"
      class="lang-flag"
      :class="{ 'lang-flag--active': locale === $i18n.locale }"
      :title="$t('language.' + locale)"
      :aria-label="$t('language.' + locale)"
      :aria-pressed="locale === $i18n.locale ? 'true' : 'false'"
      @click="change(locale)"
    >
      <!-- bandiere disegnate a mano: niente immagini da scaricare e
           restano nitide a qualsiasi densita' di schermo -->
      <svg v-if="locale === 'it'" viewBox="0 0 60 40" aria-hidden="true" focusable="false">
        <rect width="20" height="40" fill="#008C45" />
        <rect x="20" width="20" height="40" fill="#F4F5F0" />
        <rect x="40" width="20" height="40" fill="#CD212A" />
      </svg>

      <svg v-else viewBox="0 0 60 30" aria-hidden="true" focusable="false">
        <clipPath id="lang-flag-uk-diagonals">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" stroke-width="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clip-path="url(#lang-flag-uk-diagonals)"
          stroke="#C8102E"
          stroke-width="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#FFF" stroke-width="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
      </svg>
    </button>
  </div>
</template>

<script>
import { SUPPORTED_LOCALES, setLocale } from '@/i18n'

export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      locales: SUPPORTED_LOCALES,
    }
  },
  methods: {
    change(locale) {
      if (locale !== this.$i18n.locale) {
        setLocale(locale, this.$vuetify)
      }
    },
  },
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
}

.lang-flag {
  display: block;
  padding: 0;
  margin-left: 10px;
  border: 0;
  border-radius: 2px;
  background: none;
  cursor: pointer;
  overflow: hidden;
  line-height: 0;
  /* la lingua non attiva resta in grigio: si vede che e' un'alternativa
     senza rubare l'occhio al resto della barra */
  opacity: 0.45;
  filter: grayscale(1);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18);
  transition: opacity 0.2s ease, filter 0.2s ease, transform 0.2s ease;
}

.lang-flag:first-child {
  margin-left: 0;
}

.lang-flag:hover,
.lang-flag:focus-visible {
  opacity: 0.85;
  filter: none;
  transform: translateY(-1px);
}

.lang-flag--active {
  opacity: 1;
  filter: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.32);
}

.lang-flag:focus-visible {
  outline: 2px solid #5B879B;
  outline-offset: 3px;
}

/* le due bandiere hanno proporzioni diverse (2:3 l'Italia, 1:2 il Regno
   Unito): fisso l'altezza e lascio correre la larghezza, cosi' restano
   allineate senza deformarle */
.lang-flag svg {
  display: block;
  height: 16px;
  width: auto;
}

@media (prefers-reduced-motion: reduce) {
  .lang-flag {
    transition: none;
  }

  .lang-flag:hover,
  .lang-flag:focus-visible {
    transform: none;
  }
}
</style>
