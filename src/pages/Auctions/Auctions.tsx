import AuctionCard from './components/AuctionCard'
import { auctionsMockItems } from '../../mock-data/data'
import { useTranslation } from 'react-i18next'
import { PageName } from '@/components/PageName'

const Auctions = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <PageName pageTitle={t('auth.reset_pswd.title')} />
      <div className="space-y-2 mt-5">
        {auctionsMockItems.length > 0 &&
          auctionsMockItems.map((item, index) => (
            <AuctionCard
              key={index}
              photo={item.photo}
              title={item.title}
              firstReg={item.firstReg}
              mileage={item.milleage}
              referenceNumber={item.referenceNumber}
            />
          ))}
      </div>
    </>
  )
}

export default Auctions
