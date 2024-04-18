import { Card } from '@/components/ui/card'
import { AuctionItem } from '../types'
import { useTranslation } from 'react-i18next'
import DoubleButton from '../../../components/DoubleButton'

const AuctionCard = ({
  photo,
  title,
  firstReg,
  mileage,
  referenceNumber,
  endOfAuction,
}: AuctionItem) => {
  const { t } = useTranslation('global')

  return (
    <Card className="h-[130px] w-full flex bg-slate-50">
      <img
        src={photo}
        className="block h-[128px] w-[217px] object-cover rounded-tl-lg rounded-bl-lg"
      />
      <div className="flex-grow p-3">
        <h1 className="text-primary font-medium text-2xl">{title}</h1>
        <div className="text-sm flex justify-between gap-12 [&_span]:text-primary ">
          <div className="flex flex-col">
            <div className="space-y-2">
              <div>
                <span>{t('auctionItem.info.firstReg')}</span>
                {firstReg}
              </div>
              <div>
                <span>{t('auctionItem.info.mileage')}</span> {mileage} km
              </div>
              <div>
                <span>{t('auctionItem.info.refNumber')}</span> {referenceNumber}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="space-y-2">
              <span>{t('auctionItem.info.endOfAuction')}</span>
              {endOfAuction}
            </div>
            <DoubleButton referenceNumber={referenceNumber!} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AuctionCard
