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
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useRegistration } from '../hooks/useRegistration'
import { PageName } from '@/components/PageName'

const Registration = () => {
  const { t } = useTranslation('global')
  const { form, onSubmit } = useRegistration()
  return (
    <div className="w-full q1024:max-w-[1000px]">
      <PageName pageTitle={t('auth.register.title')} />
      <Card className="mt-5 p-5 w-full">
        <CardHeader>
          <CardDescription>{t('auth.register.atention')}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="px-5 space-y-5"
          >
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.firstName')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.name')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="secondName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.secondName')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.secondName')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.lastName')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.lastName')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.email')}
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
                      {t('auth.register.password')}
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
              <FormField
                control={form.control}
                name="repeatPassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.repeatPassword')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.repeatPassword')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.country')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.country')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.city')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.city')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="str"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.str')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.str')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="zip_code"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.zip_code')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.zip_code')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="house_number"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.house_number')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.house_number')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="apartment_number"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.apartment_number')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.apartment_number')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.language')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.language')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-primary">
                      {t('auth.register.phone')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t('auth.placeholders.phone')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex mb-3 w-full justify-end space-x-2">
              {/* <Link
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
                to="/authorization"
              >
                {t('auth.login.log_in')}
              </Link>
            </div>
            <div className="flex justify-end">
              <Button type="submit">{t('auth.register.btn')}</Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default Registration
