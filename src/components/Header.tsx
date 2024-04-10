import React from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom'
import { PopoverClose } from '@radix-ui/react-popover'

const Header: React.FC = () => {
  const { t, i18n } = useTranslation('global')

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <header className="text-primary py-4 border-b-2">
      <nav className="flex justify-center gap-16">
        <a href="/" className="font-semibold text-2xl">
          {t('header.siteName')}
        </a>
        <ul className="flex items-center gap-12">
          <li>
            <a href="/about-us">{t('header.aboutUs')}</a>
          </li>
          <li>
            <Popover>
              <PopoverTrigger asChild>
                <p className="flex items-center cursor-pointer">
                  {t('header.howToBuy.how')}
                  <ChevronDown className="h-5" />
                </p>
              </PopoverTrigger>
              <PopoverContent
                className="flex flex-col p-3 max-w-60 text-primary"
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <NavLink to="/faq" className="justify-start">
                  <PopoverClose>{t('header.howToBuy.rules')}</PopoverClose>
                </NavLink>
                <NavLink
                  to="/faq"
                  onClick={() => {}}
                  className="mt-2 justify-start"
                >
                  <PopoverClose>{t('header.howToBuy.faq')}</PopoverClose>
                </NavLink>
              </PopoverContent>
            </Popover>
          </li>
          <li>
            <a href="/auctions">{t('header.auctions')}</a>
          </li>
          <li>
            <a href="/contact-us">{t('header.contact')}</a>
          </li>
          <li>
            <a href="/login">{t('header.login')}</a>
          </li>
          <div className="flex text-sm relative">
            {['en', 'ro', 'ru'].map((lang) => (
              <Button
                variant="link"
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={
                  i18n.language === lang ||
                  (i18n.language === 'auto' && lang === 'en')
                    ? 'underline p-1'
                    : 'p-1'
                }
              >
                {lang.toUpperCase()}
              </Button>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header
