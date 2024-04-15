import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <img
        src="../src/assets/images/transporter.jpg"
        alt="Transporter Image"
        className="object-cover h-80 w-full rounded mt-5"
      />
      <h1 className="text-center text-primary text-2xl underline mt-5">
        About Us
      </h1>
      <div className="w-full q1024:max-w-[1000px] text-left text-sm mt-5 font-light">
        <p>
          {t('about.question.p1')}{' '}
          <span className="text-primary font-semibold">
            {t('about.question.p2')}
          </span>{' '}
          {t('about.question.p3')}
        </p>
        <br />
        <p>{t('about.p1')}</p>
        <br />
        <p>{t('about.p2')}</p>
        <p className="mt-5 text-primary font-semibold">{t('about.p3')}</p>
      </div>
    </>
  )
}

export default AboutUs
