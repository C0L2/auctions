import { z } from 'zod'

export type AuctionItem = {
  photo: string
  title: string
  firstReg?: string
  mileage?: number
  referenceNumber?: string
  endOfAuction?: string
}

export const searchFormSchema = z.object({
  milleageFrom: z.number().min(1).max(7).optional(),
  milleageTo: z.number().min(1).max(7).optional(),
  manafacturedYearFrom: z.number().optional(),
  manafacturedYearTo: z.number().optional(),
  phrase: z.string().min(2).optional(),
})
