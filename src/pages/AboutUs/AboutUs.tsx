import { useTranslation } from 'react-i18next'
import { PageName } from '@/components/PageName'

const AboutUs = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <img
        src="../src/assets/images/car.jpg"
        alt="Transporter Image"
        className="object-cover h-80 w-full rounded mt-5 bg-green-500"
      />
      <PageName pageTitle={t('header.aboutUs')} />
      <div className="w-full q1024:max-w-[1000px] text-left text-sm mt-5 font-light">
        <p>
          {t('about.question.p1')}{' '}
          <span className="text-accent font-semibold">
            {t('about.question.p2')}
          </span>{' '}
          {t('about.question.p3')}
        </p>
        <br />
        <p>{t('about.p1')}</p>
        <br />
        <p>{t('about.p2')}</p>
        <p className="mt-5 text-accent font-semibold">{t('about.p3')}</p>
      </div>
    </>
  )
}

export default AboutUs
