import FAQSection from '@/components/sections/FAQSection'
import { type Locale, getT } from '@/lib/i18n'
type Props = { params: { locale: Locale } }
export default function FAQPage({ params: { locale } }: Props) {
  const tr = getT(locale)
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-slate-800 mb-4">{tr.faq.title}</h1>
          <p className="text-xl text-slate-600">{tr.faq.subtitle}</p>
        </div>
      </div>
      <FAQSection locale={locale} />
    </div>
  )
}
