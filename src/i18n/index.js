import Vue from 'vue'
import VueI18n from 'vue-i18n'

import it from './locales/it'
import en from './locales/en'

Vue.use(VueI18n)

// L'italiano e' la lingua del sito: l'inglese si ottiene solo scegliendolo
// dal toggle in alto, mai in automatico dal browser. Cosi' chi arriva la
// prima volta vede sempre la stessa versione dei meta statici che stanno
// in public/index.html.
export const DEFAULT_LOCALE = 'it'
export const SUPPORTED_LOCALES = ['it', 'en']

const STORAGE_KEY = 'locale'

// Codici BCP 47 completi: servono a <html lang> e a toLocaleDateString.
const BCP47 = {
  it: 'it-IT',
  en: 'en-GB',
}

function storedLocale() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LOCALES.includes(saved) ? saved : null
  } catch (_error) {
    // Safari in navigazione privata puo' far esplodere localStorage
    return null
  }
}

const i18n = new VueI18n({
  locale: storedLocale() || DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  silentFallbackWarn: true,
  messages: { it, en },
})

export function bcp47(locale) {
  return BCP47[locale] || BCP47[DEFAULT_LOCALE]
}

// vuetifyFramework e' l'oggetto $vuetify dei componenti (cioe'
// vuetify.framework, non l'istanza di Vuetify): e' quello che
// Vue.observable rende reattivo.
export function setLocale(locale, vuetifyFramework) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    return
  }

  i18n.locale = locale

  // Vuetify ha le sue stringhe (frecce dei caroselli, paginazione...):
  // senza questo resterebbero in italiano anche passando all'inglese.
  if (vuetifyFramework && vuetifyFramework.lang) {
    vuetifyFramework.lang.current = locale
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch (_error) {
    // scelta non persistita: la lingua vale comunque per questa sessione
  }
}

export default i18n
