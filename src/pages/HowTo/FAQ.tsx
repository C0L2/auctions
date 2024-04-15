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
            {t('faq.q3')}
          </AccordionTrigger>
          <AccordionContent>{t('faq.r3')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-primary">
            {t('faq.q4')}
          </AccordionTrigger>
          <AccordionContent>{t('faq.r4')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-primary">
            {t('faq.q5')}
          </AccordionTrigger>
          <AccordionContent>{t('faq.r5')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-primary">
            {t('faq.q6')}
          </AccordionTrigger>
          <AccordionContent>{t('faq.r6')}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FAQ
