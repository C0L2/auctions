import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordFormSchema } from '../types'

export const useResetPassword = () => {
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: z.infer<typeof resetPasswordFormSchema>) {
    console.log(values)
  }

  return { form, onSubmit }
}
