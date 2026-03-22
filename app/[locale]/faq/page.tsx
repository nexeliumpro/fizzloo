import FAQSection from '@/components/sections/FAQSection'
import type { Locale } from '@/lib/i18n'
type Props = { params: { locale: Locale } }
export default function FAQPage({ params: { locale } }: Props) {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-slate-800 mb-4">{locale==='fr'?'Questions Fréquentes':'Frequently Asked Questions'}</h1>
          <p className="text-xl text-slate-600">{locale==='fr'?'Tout ce que vous voulez savoir sur Fizzloo':'Everything you want to know about Fizzloo'}</p>
        </div>
      </div>
      <FAQSection locale={locale} />
    </div>
  )
}