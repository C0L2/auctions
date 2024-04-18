import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { searchFormSchema } from '../types'

export const useSearch = () => {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
  })

  function onSubmit(values: z.infer<typeof searchFormSchema>) {
    console.log(values)
  }

  return { form, onSubmit }
}
