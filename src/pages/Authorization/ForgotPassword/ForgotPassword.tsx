import { useTranslation } from 'react-i18next'
import { useResetPassword } from '../hooks/useResetPassword'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { PageName } from '@/components/PageName'

const ForgotPassword = () => {
  const { t } = useTranslation('global')
  const { form, onSubmit } = useResetPassword()
  return (
    <>
      <PageName pageTitle={t('auth.reset_pswd.title')} />
      <Card className="p-5 w-full">
        <CardHeader>
          <CardDescription>{t('auth.login.atention')}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="px-5">
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="password"
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
                name="confirmPassword"
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
              <Link
                className="text-sm text-primary hover:underline"
                type="button"
                to="/authorization"
              >
                {t('auth.login.log_in')}
              </Link>
              <Separator
                orientation="vertical"
                className="h-5 w-[2px] bg-primary/80"
              />
              <Link
                className="text-sm text-primary hover:underline"
                type="button"
                to="/register"
              >
                {t('auth.login.reg_now')}
              </Link>
            </div>
            <div className="flex justify-end">
              <Button type="submit">{t('auth.reset_pswd.btn')}</Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  )
}

export default ForgotPassword
