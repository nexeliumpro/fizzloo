'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getT, type Locale } from '@/lib/i18n'
export default function HeroSection({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const [visible, setVisible] = useState(false)
  useEffect(() => { const id = setTimeout(() => setVisible(true), 100); return () => clearTimeout(id) }, [])
  return (
    <section className="relative hero-gradient overflow-hidden min-h-[90vh] flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${visible?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-bold text-brand-600 mb-6 shadow-card">{t.hero.badge}</div>
            <h1 className="font-bold leading-tight mb-6" style={{fontSize:'clamp(2.5rem,5vw,4rem)'}}>
              <span className="text-slate-800">{t.hero.title1}</span><br/>
              <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">{t.hero.title2}</span>
              <span className="text-slate-800"> 🛁</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">{t.hero.subtitle}</p>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">{['👩','👨','👩','👦'].map((e,i) => <div key={i} className="w-9 h-9 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-lg">{e}</div>)}</div>
              <div><div className="flex gap-0.5">{[1,2,3,4,5].map(s=><span key={s} className="star text-base">★</span>)}</div><p className="text-xs text-slate-500 font-semibold">{t.hero.reviews}</p></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={`/${locale}/collection`} className="btn-primary px-8 py-4 text-base font-bold rounded-2xl">🛁 {t.hero.cta}</Link>
              <Link href={`/${locale}/collection`} className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-2xl border-2 border-brand-300 text-brand-600 hover:bg-brand-50 transition-colors">{t.hero.cta2} →</Link>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {[{icon:'🚚',en:'Free Shipping',fr:'Livraison Offerte'},{icon:'❤️',en:'30-Day Guarantee',fr:'Garantie 30 Jours'},{icon:'🌿',en:'100% Natural',fr:'100% Naturel'},{icon:'🔒',en:'Secure Payment',fr:'Paiement Sécurisé'}].map((b,i)=>(
                <div key={i} className="flex items-center gap-1.5 text-xs font-bold text-slate-600"><span>{b.icon}</span>{b[locale]}</div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 delay-200 ${visible?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="relative mx-auto max-w-sm">
              <div className="aspect-square rounded-3xl shadow-hero flex items-center justify-center overflow-hidden border-4 border-white" style={{background:'radial-gradient(circle at 40% 35%, #e8f4fd 0%, #b9ddff 60%, #7cc2ff 100%)'}}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div style={{animation:'float 3s ease-in-out infinite'}}><div className="w-40 h-40 rounded-full bg-gradient-to-br from-white via-blue-100 to-blue-300 shadow flex items-center justify-center text-7xl">🛁</div></div>
                  {[{top:'10%',left:'10%',delay:'0.5s',color:'#FFD93D',label:'🎁'},{top:'15%',right:'10%',delay:'1s',color:'#FF6B6B',label:'⭐'},{bottom:'20%',left:'5%',delay:'1.5s',color:'#6BCB77',label:'🌊'},{bottom:'10%',right:'10%',delay:'2s',color:'#b9ddff',label:'💧'}].map((item,i)=>(
                    <div key={i} className="absolute" style={{top:(item as any).top,left:(item as any).left,right:(item as any).right,bottom:(item as any).bottom,animation:`float 3s ease-in-out ${item.delay} infinite`}}>
                      <div className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl" style={{background:item.color}}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-yellow-300 text-slate-800 font-bold text-xs rounded-full w-20 h-20 flex items-center justify-center text-center leading-tight shadow-lg" style={{animation:'wiggle 2s ease-in-out infinite'}}>🎁 {locale==='fr'?'Jouet Surprise!':'Surprise Toy!'}</div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 badge-bestseller shadow-md whitespace-nowrap">⭐ {locale==='fr'?'MEILLEUR VENDEUR':'BESTSELLER'}</div>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 glass rounded-2xl p-3 shadow-card max-w-[160px]">
                <div className="flex gap-1 mb-1">{[1,2,3,4,5].map(s=><span key={s} className="star text-xs">★</span>)}</div>
                <p className="text-xs font-semibold text-slate-700 leading-snug">{locale==='fr'?'"Mon fils court maintenant vers le bain !"':'"My son now RUNS to the bath!"'}</p>
                <p className="text-xs text-slate-400 mt-1">— Sophie M. 🇫🇷</p>
              </div>
              <div className="absolute -right-4 bottom-16 glass rounded-2xl p-3 shadow-card">
                <p className="text-2xl font-black text-brand-600">2,400+</p>
                <p className="text-xs font-semibold text-slate-500">{locale==='fr'?'enfants ravis':'happy kids'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden"><svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full"><path fill="white" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/></svg></div>
    </section>
  )
}