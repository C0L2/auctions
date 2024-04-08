import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { I18nextProvider } from 'react-i18next'
import { initI18n } from './locales/i18n.ts'
import i18next from './locales/i18n'

// Initialize multiLang
initI18n()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
