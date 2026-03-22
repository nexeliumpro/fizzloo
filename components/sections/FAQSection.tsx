'use client'
import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/config'
import { getT, type Locale } from '@/lib/i18n'
export default function FAQSection({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const [open, setOpen] = useState<number|null>(0)
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16"><h2 className="font-bold text-4xl text-slate-800">{t.sections.faq}</h2></div>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item,i) => (
            <div key={i} className={`rounded-3xl border transition-all duration-200 overflow-hidden ${open===i?'border-brand-300 bg-white shadow-card':'border-slate-200 bg-white'}`}>
              <button className="accordion-trigger px-6" onClick={() => setOpen(open===i?null:i)}>
                <span>{item.q[locale]}</span>
                <span className={`text-brand-500 text-xl transition-transform duration-200 ${open===i?'rotate-180':''}`}>↓</span>
              </button>
              {open===i && <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{item.a[locale]}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}