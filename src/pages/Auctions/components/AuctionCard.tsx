import { Card } from '@/components/ui/card'
import { AuctionItem } from '../types'
import { useTranslation } from 'react-i18next'

const AuctionCard = ({
  photo,
  title,
  firstReg,
  mileage,
  referenceNumber,
}: AuctionItem) => {
  const { t } = useTranslation('global')

  return (
    <Card className="h-[130px] flex">
      <img
        src={photo}
        className="block h-[128px] w-[217px] object-cover rounded-tl-lg rounded-bl-lg"
      />
      <div className="p-4">
        <h1 className="text-primary font-medium text-2xl">{title}</h1>
        <p className="text-xs flex flex-col gap-2">
          <div>
            <span className="text-primary">
              {t('auctionItem.info.firstReg')}
            </span>
            {firstReg}
          </div>
          <div>
            <span className="text-primary">
              {t('auctionItem.info.mileage')}
            </span>{' '}
            {mileage} km
          </div>
          <div>
            <span className="text-primary">
              {t('auctionItem.info.refNumber')}
            </span>{' '}
            {referenceNumber}
          </div>
        </p>
      </div>
    </Card>
  )
}

export default AuctionCard
