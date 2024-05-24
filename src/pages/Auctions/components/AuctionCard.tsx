import { Card } from '@/components/ui/card'
import { AuctionCar } from '../types'
import { useTranslation } from 'react-i18next'
import DoubleButton from '@/components/DoubleButton'

const AuctionCard = ({
  photos,
  title,
  production_date,
  run,
  ref_id,
  end_date,
  id,
}: AuctionCar) => {
  const { t } = useTranslation('global')

  return (
    <Card className="h-[130px] w-full flex bg-slate-50 mb-2">
      <img
        src={`https://www.autazeszwajcarii.pl/${photos}`}
        className="block h-[128px] w-full max-w-[217px] object-cover rounded-tl-lg rounded-bl-lg"
      />
      <div className="flex-grow p-3">
        <h1 className="text-primary font-medium text-2xl">{title}</h1>
        <div className="text-sm flex justify-between gap-12 [&_span]:text-primary ">
          <div className="flex flex-col">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span>{t('auctionItem.info.firstReg')}</span>
                {new Date(production_date).getFullYear()}
              </div>
              <div>
                <span>{t('auctionItem.info.mileage')}</span> {run} km
              </div>
              <div>
                <span>{t('auctionItem.info.refNumber')}</span> {ref_id}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="space-y-2">
              <span>{t('auctionItem.info.endOfAuction')}</span>
              {new Date(end_date).toLocaleString()}
            </div>
            <DoubleButton referenceNumber={ref_id!} id={id} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default AuctionCard
