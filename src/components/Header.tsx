import React from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { NavLink } from 'react-router-dom'
import { PopoverClose } from '@radix-ui/react-popover'
import { changeLanguage, getCurrentLanguage } from '../locales/i18n'

const Header: React.FC = () => {
  const { t } = useTranslation('global')
  const currentLanguage = getCurrentLanguage()

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang)
  }

  return (
    <header className="bg-primary/30 text-primary py-4 border-b-2 border-primary">
      <nav className="flex justify-center gap-16">
        <a href="/" className="font-semibold text-2xl">
          {t('header.siteName')}
        </a>
        <ul className="hidden q1024:flex q1024:items-center q1024:gap-12">
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
                <NavLink to="/rules" className="justify-start">
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
            <a href="/authorization">{t('header.login')}</a>
          </li>
          <div className="flex text-sm relative">
            {['en', 'ro', 'ru'].map((lang) => (
              <Button
                variant="link"
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={
                  currentLanguage === lang ||
                  (currentLanguage === 'auto' && lang === 'en')
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
