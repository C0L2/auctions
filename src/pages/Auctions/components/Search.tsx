import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useSearch } from '../hooks/useSearch'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { SearchIcon } from 'lucide-react'

const Search = () => {
  const { form, onSubmit } = useSearch()
  const { t } = useTranslation('global')

  return (
    <>
      <Card className="mt-5 p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormLabel className="text-primary">
              {t('auctionItem.labels.milleage')}
            </FormLabel>
            <div className="flex gap-x-2 mb-2">
              <FormField
                control={form.control}
                name="milleageFrom"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="flex items-start">
                      <div>
                        <Button className="rounded-tr-none rounded-br-none">
                          {t('auctionItem.search.items.from')}
                        </Button>
                        <Input
                          {...field}
                          placeholder={t(
                            'auctionItem.placeholders.from_mileage',
                          )}
                          className="flex-grow rounded-bl-none rounded-tl-none border-l-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="milleageTo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="flex items-start">
                      <div>
                        <Button className="rounded-tr-none rounded-br-none">
                          {t('auctionItem.search.items.to')}
                        </Button>
                        <Input
                          {...field}
                          placeholder={t('auctionItem.placeholders.to_mileage')}
                          className="flex-grow rounded-bl-none rounded-tl-none border-l-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormLabel className="text-primary">
              {t('auctionItem.labels.manufactured_year')}
            </FormLabel>
            <div className="flex gap-x-2">
              <FormField
                control={form.control}
                name="manafacturedYearFrom"
                render={({ field }) => (
                  <FormItem className="mb-5 w-full">
                    <FormControl className="flex items-start">
                      <div>
                        <Button className="rounded-tr-none rounded-br-none">
                          {t('auctionItem.search.items.from')}
                        </Button>
                        <Input
                          {...field}
                          placeholder={t('auctionItem.placeholders.from_y')}
                          className="flex-grow rounded-bl-none rounded-tl-none border-l-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="manafacturedYearTo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="flex items-start">
                      <div>
                        <Button className="rounded-tr-none rounded-br-none">
                          {t('auctionItem.search.items.to')}
                        </Button>
                        <Input
                          {...field}
                          placeholder={t('auctionItem.placeholders.to_y')}
                          className="flex-grow rounded-bl-none rounded-tl-none border-l-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phrase"
              render={({ field }) => (
                <FormItem className="mb-5 w-full">
                  <FormControl className="flex items-start">
                    <div>
                      <Button className="rounded-tr-none rounded-br-none">
                        {t('auctionItem.search.items.by_phrase')}
                      </Button>
                      <Input
                        {...field}
                        placeholder={t('auctionItem.placeholders.phrase')}
                        className="flex-grow rounded-bl-none rounded-tl-none border-l-0"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end ">
              <Button type="submit" className="gap-1">
                <SearchIcon className="w-4 h-4" />
                {t('auctionItem.search.btn')}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  )
}

export default Search
