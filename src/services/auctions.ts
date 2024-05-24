import { AuctionCar } from '@/pages/Auctions/types'
import { reduxAPI } from '@/store/api'

export const auctionApi = reduxAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuctions: builder.query<AuctionCar[], void>({
      query: () => `/auctions`,
      providesTags: ['GET_AUCTIONS'],
    }),
  }),
  overrideExisting: true,
})

export const { useGetAuctionsQuery } = auctionApi
