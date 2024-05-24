import { AuctionCar } from '@/pages/Auctions/types'
import { reduxAPI } from '@/store/api'
import { SpecificAuctionQueryParams } from './types'

export const auctionApi = reduxAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAuctions: builder.query<AuctionCar[], void>({
      query: () => `/auctions`,
      providesTags: ['GET_AUCTIONS'],
    }),
    getSpecificAuction: builder.query<any, SpecificAuctionQueryParams>({
      query: ({ id, title }) => ({
        url: `/auctions/specific`,
        params: { id, title },
      }),
    }),
  }),
  overrideExisting: true,
})

export const { useGetAuctionsQuery, useGetSpecificAuctionQuery } = auctionApi
