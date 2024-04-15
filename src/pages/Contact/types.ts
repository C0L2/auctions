import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(5).max(30),
  subject: z.string().min(5).max(150),
  message: z.string().min(5),
})
