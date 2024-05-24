import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const auctionApi = createApi({
  reducerPath: 'auctionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.autazeszwajcarii.pl/api/v1/',
  }),
  endpoints: (builder) => ({
    getLazySpecificAuction: builder.mutation<any, number>({
      query: (id) => ({
        url: `auctions/${id}/`,
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
})

export const { useGetLazySpecificAuctionMutation } = auctionApi
