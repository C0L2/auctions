import React from 'react'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('global')

  return (
    <header className="border-b-2 border-gray-300 py-4 px-6 flex justify-between">
      <div className="">
        <h1 className="text-xl font-bold">
          <a href="#" className="text-black no-underline">
            {t('header.siteName')}
          </a>
        </h1>
      </div>
      <nav className="">
        <ul className="flex">
          <li className="mr-4">
            <a href="#" className="text-black no-underline hover:underline">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black no-underline hover:underline">
              News
            </a>
          </li>
          <li>
            <a href="#" className="text-black no-underline hover:underline">
              Contact
            </a>
          </li>
        </ul>
        {t('header.chooseLanguage')}
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('ro')}>RO</button>
        <button onClick={() => i18n.changeLanguage('ru')}>RU</button>
      </nav>
    </header>
  )
}

export default Header
