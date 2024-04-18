import i18next from 'i18next'
import global_en from './en/global.json'
import global_ro from './ro/global.json'
import global_ru from './ru/global.json'

const LANG_STORAGE_KEY = 'en'

export const initI18n = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem(LANG_STORAGE_KEY) || 'auto',
    fallbackLng: 'en',
    resources: {
      en: { global: global_en },
      ro: { global: global_ro },
      ru: { global: global_ru },
    },
  })
}

export const changeLanguage = (lang: string) => {
  localStorage.setItem(LANG_STORAGE_KEY, lang)
  i18next.changeLanguage(lang)
}

export const getCurrentLanguage = () => {
  return i18next.language
}

export default i18next
