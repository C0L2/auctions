import AuctionCard from './components/AuctionCard'
import { auctionsMockItems } from '../../mock-data/data'
import { useTranslation } from 'react-i18next'

const Auctions = () => {
  const { t } = useTranslation('global')

  return (
    <>
      <h1 className="text-center text-primary text-2xl underline mt-5 mb-5 object-cover">
        {t('auth.reset_pswd.title')}
      </h1>
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
