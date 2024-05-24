import { baseUrl } from '@/lib/config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reduxAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['GET_AUCTIONS'],
  endpoints: () => ({}),
})

export const APIMiddleware = reduxAPI.middleware
