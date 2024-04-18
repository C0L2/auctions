import { HoverCardContent } from '@radix-ui/react-hover-card'
import { Button } from './ui/button'
import { HoverCard, HoverCardTrigger } from './ui/hover-card'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const DoubleButton = ({
  firstFunction,
  secondFunction,
  referenceNumber,
}: {
  referenceNumber: string
  firstFunction?: () => void
  secondFunction?: () => void
}) => {
  const { t } = useTranslation('global')
  return (
    <div className="flex max-w-[300px] ">
      <HoverCard>
        <HoverCardTrigger>
          <Button
            variant="outline"
            onClick={firstFunction}
            className="h-full rounded-tr-none rounded-br-none  bg-transparent whitespace-normal break-normal max-w-[150px] hover:bg-transparent"
          >
            {t('auctionItem.btns.addToObserved')}
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="h-auto w-auto border mt-3 p-4 bg-white rounded-lg text-center">
          {t('auctionItem.hover.addToObservedNotLoggedIn')}
          <span className="text-primary font-normal">
            <br />
            {t('auctionItem.hover.register!')}
          </span>
        </HoverCardContent>
      </HoverCard>
      <Link to={`/auctions/${referenceNumber}`}>
        <Button
          onClick={secondFunction}
          className="h-full rounded-bl-none rounded-tl-none max-w-[150px] whitespace-normal break-normal"
        >
          {t('auctionItem.btns.more')}
        </Button>
      </Link>
    </div>
  )
}

export default DoubleButton
