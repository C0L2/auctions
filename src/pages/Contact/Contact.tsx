import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useTranslation } from 'react-i18next'
import { useContactUs } from './useContactUs'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  const { t } = useTranslation('global')
  const { form, onSubmit } = useContactUs()

  return (
    <>
      <h1 className="text-center text-primary text-2xl underline mt-5">
        {t('header.contact')}
      </h1>
      <Card className="mt-5 p-5">
        <CardHeader>
          <CardTitle className="text-primary">
            {t('contact.question.do_you')}
          </CardTitle>
          <CardDescription>{t('contact.question.ask_us')}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="justify-end"
            >
              <div className="text-primary space-y-5">
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{t('contact.labels.fullName')}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contact.placeholders.fullName')}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{t('contact.labels.email')}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contact.placeholders.email')}
                            {...field}
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{t('contact.labels.phone')}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contact.placeholders.phone')}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>{t('contact.labels.subject')}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t('contact.placeholders.subject')}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.labels.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('contact.placeholders.message')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button>{t('contact.send_btn_txt')}</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}

export default Contact
