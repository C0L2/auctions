import { useTranslation } from 'react-i18next'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = () => {
  const { t } = useTranslation('global')

  return (
    <div>
      <Accordion
        type="multiple"
        className="max-w-[990px] mt-5"
        defaultValue={['item-1', 'item-2']}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-primary">
            {t('faq.q1')}
          </AccordionTrigger>
          <AccordionContent>{t('faq.r1')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-primary">
            {t('faq.q2')}
          </AccordionTrigger>
          <AccordionContent>{t('faq.r2')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-primary">
            Is it animated?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by defau'lt, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FAQ
