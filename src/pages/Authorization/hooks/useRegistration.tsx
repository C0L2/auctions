import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from '../types'

export const useRegistration = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      secondName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '',
      country: '',
      city: '',
      zip_code: null,
      house_number: '',
      apartment_number: '',
      language: '',
    },
  })

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    console.log(values)
  }
  return { form, onSubmit }
}
