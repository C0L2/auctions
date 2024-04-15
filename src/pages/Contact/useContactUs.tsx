import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { contactFormSchema } from './types'

export const useContactUs = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values)
  }

  return { form, onSubmit }
}
