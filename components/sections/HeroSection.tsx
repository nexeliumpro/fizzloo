'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getT, type Locale } from '@/lib/i18n'
export default function HeroSection({ locale }: { locale: Locale }) {
  const tr = getT(locale)
  const [visible, setVisible] = useState(false)
  useEffect(() => { const id = setTimeout(() => setVisible(true), 100); return () => clearTimeout(id) }, [])
  return (
    <section className="relative hero-gradient overflow-hidden min-h-[88vh] flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-bold text-brand-600 mb-6 shadow-card">
              <span className="w52 h-2 rounded-full bg-green-400 inline-block"></span>
              {tr.hero.badge}
            </div>
            <h1 className="font-bold leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
              <span className="text-slate-800">{tr.hero.title1}</span><br />
              <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">{tr.hero.title2}</span>{+' '}
              <span role="img" aria-label="bath">🛁</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">{tr.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href={`/${locale}/collection`} className="btn-primary px-8 py-4 text-base font-bold rounded-2xl flex items-center justify-center gap-2">
                <span role="img" aria-label="bath">🛁</span> {tr.hero.cta}
              </Link>
              <Link href={`/${locale}/collection`} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl border-2 border-brand-300 text-brand-600 hover:bg-brand-50 transition-colors">{tr.hero.cta2} -&gt;</Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {['Free Shipping','30-Day Guarantee','100% Natural','Secure Payment'].map((b,i) => (
                <div key={i} className="text-xs font-bold text-slate-600">{b}</div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-square rounded-3xl shadow-[0_24px_80px_rgba(13,135,233,0.15)] flex items-center justify-center overflow-hidden border-4 border-white"
                style={{ background: 'radial-gradient(circle at 40% 35%, #e8f4fd 0%, #b9ddff 60%, #7cc2ff 100%)' }}>
                <div className="float text-9xl" role="img" aria-label="bath bomb">🛁</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-300 text-slate-800 font-bold text-xs rounded-full w-20 h-20 flex items-center justify-center text-center leading-tight shadow-lg">
                <span role="img" aria-label="gift">🎁</span><br/>Surprise Toy!
              </div>
              <div className="absolute -right-4 bottom-16 glass rounded-2xl p-3 shadow-card">
                <p className="text-2xl font-black text-brand-600">2,400+</p>
                <p className="text-xs font-semibold text-slate-500">{locale === 'fr' ? 'enfants ravis' : 'happy kids'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
