import AuctionCard from './components/AuctionCard'
import { useTranslation } from 'react-i18next'
import { PageName } from '@/components/PageName'
import Search from './components/Search'
import { useGetAuctionsQuery } from '@/services/auctions'
import { times } from 'lodash'
import { CardSkeleton } from './components/AuctionSkeleton'

const Auctions = () => {
  const { t } = useTranslation('global')
  const { data, isLoading } = useGetAuctionsQuery()

  return (
    <>
      <PageName pageTitle={t('header.auctions')} />
      <Search />
      <div className="flex flex-col space-y-2 mt-5">
        {isLoading && !data ? (
          times(10, (item) => <CardSkeleton key={item} />)
        ) : (
          <div>
            {data?.map((item, index) => (
              <AuctionCard
                key={index}
                id={item.id}
                photos={item.photos}
                title={item.title}
                production_date={item.production_date}
                run={item.run}
                ref_id={item.ref_id}
                end_date={item.end_date}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Auctions
