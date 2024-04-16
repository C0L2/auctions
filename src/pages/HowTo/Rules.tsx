import { useTranslation } from 'react-i18next'
import { Separator } from '../../components/ui/separator'

const Rules = () => {
  const { t } = useTranslation('global')

  return (
    <div className="max-w-[1000px]">
      <h1 className="mt-5 font-semibold text-primary">
        {t('rules.auctions.title')}
      </h1>
      <Separator className="bg-primary" />
      <div className="mt-5 font-light">
        <ol className="list-decimal">
          <li className="mb-2">
            {t('rules.auctions.rule1')}
            <a
              href="/authorization"
              className="ml-2 text-primary font-semibold"
            >
              {t('rules.auctions.register')}
            </a>
          </li>
          <li className="mb-2">{t('rules.auctions.rule2')}</li>
          <li className="mb-2">{t('rules.auctions.rule3')}</li>
          <li className="mb-2">{t('rules.auctions.rule4')}</li>
          <li className="mb-2">{t('rules.auctions.rule5')}</li>
          <li className="mb-2">{t('rules.auctions.rule6')}</li>
        </ol>
        <p className="mt-4">
          {t('rules.auctions.aditional_info')}
          <a href="/faq" className="ml-2 text-primary font-semibold">
            {t('header.howToBuy.faq')}
          </a>
          {t('rules.auctions.or')}
          <a href="contact-us" className="ml-2 text-primary font-semibold">
            {t('header.contact')}
          </a>
        </p>
      </div>

      <h1 className="mt-14 font-semibold text-primary">
        {t('rules.announcements.title')}
      </h1>
      <Separator className="bg-primary" />
      <div className="mt-5 font-light">
        <ol className="list-decimal">
          <li className="mb-2">
            {t('rules.announcements.rule1')}
            <a
              target="_blank"
              href="https://autoscout24.ch/"
              className="ml-2 text-primary font-semibold"
            >
              autoscout24.ch
            </a>
            ,
            <a
              target="_blank"
              href="https://www.tutti.ch/de"
              className="ml-2 text-primary font-semibold"
            >
              tutti.ch
            </a>
            ,
            <a
              target="_blank"
              href="https://www.ricardo.ch/de/"
              className="ml-2 text-primary font-semibold"
            >
              richardo.ch
            </a>
          </li>
          <li className="mb-2">{t('rules.announcements.rule2')}</li>
        </ol>
        <p className="mt-4">{t('rules.announcements.message')}</p>
      </div>

      <h1 className="mt-14 font-semibold text-primary">
        {t('rules.transport.title')}
      </h1>
      <Separator className="bg-primary" />
      <div className="mt-5 font-light">
        <p className="mt-4">{t('rules.transport.message')}</p>
        <ul className="list-disc mt-5">
          <li className="mb-2">{t('rules.transport.rule1')}</li>
          <li className="mb-2">{t('rules.transport.rule2')}</li>
          <li className="mb-2">{t('rules.transport.rule3')}</li>
          <li className="mb-2">{t('rules.transport.rule4')}</li>
          <li className="mb-2">{t('rules.transport.rule5')}</li>
        </ul>
      </div>
    </div>
  )
}

export default Rules
