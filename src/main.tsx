import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_en from './locales/en/global.json'
import global_ro from './locales/ro/global.json'
import global_ru from './locales/ru/global.json'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
