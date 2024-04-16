import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useLogin } from '../hooks/useLogin'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import { Separator } from '@/components/ui/separator'

const Authorization = () => {
  const { t } = useTranslation('global')
  const { form, onSubmit } = useLogin()
  return (
    <>
      <h1 className="text-center text-primary text-2xl underline mt-5 mb-5">
        {t('auth.login.title')}
      </h1>
      <Card className="p-5 w-full">
        <CardHeader>
          <CardDescription>{t('auth.login.atention')}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-5">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-5 w-full">
                    <FormLabel className="text-primary">
                      {t('auth.login.email')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
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
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.login.pswd')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.password')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex mb-3 w-full justify-end space-x-2">
              {/*  <Link
                className="text-sm text-primary hover:underline"
                type="button"
                to="/forgot-password"
              >
                {t('auth.reset_pswd.title')}
              </Link>
              <Separator
                orientation="vertical"
                className="h-5 w-[2px] bg-primary/80"
              /> */}
              <Link
                className="text-sm text-primary hover:underline"
                type="button"
                to="/register"
              >
                {t('auth.login.reg_now')}
              </Link>
            </div>
            <div className="flex justify-end">
              <Button type="submit">{t('auth.login.log_in')}</Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  )
}

export default Authorization
