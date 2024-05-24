import { z } from 'zod'

export type AuctionCar = {
  id: number
  title: string
  production_date: Date
  run: number
  start_date?: string
  end_date: Date
  ref_id: string
  photos: string
  min_image?: string
  observed?: boolean
}

export const searchFormSchema = z.object({
  milleageFrom: z.number().min(1).max(7).optional(),
  milleageTo: z.number().min(1).max(7).optional(),
  manafacturedYearFrom: z.number().optional(),
  manafacturedYearTo: z.number().optional(),
  phrase: z.string().min(2).optional(),
})
