import { useParams } from 'react-router-dom'

const AuctionItemDetails = () => {
  let { id, title } = useParams()

  console.log(id, title)
  return <div>AuctionItemDetails</div>
}

export default AuctionItemDetails
