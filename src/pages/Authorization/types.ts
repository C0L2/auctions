import { z } from 'zod'

/* Below are 3 zod schemas for validating Authorization flow*/
export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, 'The password must be at least 6 characters long.')
    .max(32, 'The password must be a maximum of 32 characters.')
    .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
      message:
        'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number',
    }),
})

export const resetPasswordFormSchema = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'The passwords do not match',
  })

export const registerFormSchema = z
  .object({
    firstName: z.string().min(2),
    secondName: z.string().min(2).optional(),
    lastName: z.string().min(2),
    email: z.string().email(),
    password: z
      .string()
      .min(6, 'The password must be at least 6 characters long.')
      .max(32, 'The password must be a maximum of 32 characters.')
      .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message:
          'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number',
      }),
    repeatPassword: z
      .string()
      .min(6, 'The password must be at least 6 characters long.')
      .max(32, 'The password must be a maximum of 32 characters.')
      .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
        message:
          'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number',
      }),
    phone: z.string().min(3),
    country: z.string().min(4),
    city: z.string(),
    zip_code: z.number().min(2).optional().nullable(),
    str: z.string().min(2),
    house_number: z.string(),
    apartment_number: z.string(),
    language: z.string().min(2),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'The passwords do not match',
  })
