import React from 'react'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('global')

  return (
    <header className="text-primary py-4">
      <nav className="flex justify-center gap-12">
        <a href="#" className="font-semibold text-2xl">
          {t('header.siteName')}
        </a>
        <ul className="flex items-center gap-12">
          <li>
            <a href="#">{t('header.aboutUs')}</a>
          </li>
          <li>
            <a href="#">{t('header.howToBuy.how')}</a>
          </li>
          <li>
            <a href="#">{t('header.auctions')}</a>
          </li>
          <li>
            <a href="#">{t('header.contact')}</a>
          </li>
          <li>
            <a href="#">{t('header.login')}</a>
          </li>
          <div className="flex gap-1 text-sm">
            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            <button onClick={() => i18n.changeLanguage('ro')}>RO</button>
            <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
