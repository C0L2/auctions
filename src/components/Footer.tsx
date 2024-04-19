import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation('global')

  return (
    <footer className="text-primary border-t-2 mt-12 border-primary">
      <div className="w-full p-2 text-center">
        <span className="text-sm">© 2024 Copyright:</span>
        <a href="https://tw-elements.com/" className="ml-2 text-md">
          {t('header.siteName')}
        </a>
      </div>
    </footer>
  )
}

export default Footer
