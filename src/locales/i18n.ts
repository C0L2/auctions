import i18next from 'i18next'
import global_en from './en/global.json'
import global_ro from './ro/global.json'
import global_ru from './ru/global.json'

export const initI18n = () => {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'auto',
    fallbackLng: 'en',
    resources: {
      en: {
        global: global_en,
      },
      ro: {
        global: global_ro,
      },
      ru: {
        global: global_ru,
      },
    },
  })
}

export default i18next
