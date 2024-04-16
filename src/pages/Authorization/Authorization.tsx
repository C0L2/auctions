import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useLogin } from './hooks/useLogin'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const Authorization = () => {
  const { t } = useTranslation('global')
  const { form, onSubmit } = useLogin()
  return (
    <div className="mt-5 flex justify-center">
      <Card className="p-5 w-full">
        <CardHeader className="px-0 pt-0 ">
          <CardTitle className="text-primary">
            {t('auth.login.title')}
          </CardTitle>
          <CardDescription>{t('auth.login.atention')}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">
                    {t('auth.login.email')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full max-w-[600px]"
                      placeholder={t('auth.placeholders.email')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary">
                    {t('auth.login.pswd')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-full max-w-[600px]"
                      placeholder={t('auth.placeholders.password')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">{t('auth.login.log_in')}</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default Authorization
