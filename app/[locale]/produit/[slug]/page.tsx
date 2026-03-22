'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useCart } from '@/components/ui/CartProvider'
import { PRODUCTS, REVIEWS, FAQ_ITEMS, SHIPPING_ZONES } from '@/lib/config'
import { getT, type Locale } from '@/lib/i18n'
import ProductCard from '@/components/ui/ProductCard'
import Link from 'next/link'

export default function ProductPage() {
  const params = useParams()
  const locale = params.locale as Locale
  const slug = params.slug as string
  const t = getT(locale)
  const { addItem } = useCart()
  const product = PRODUCTS.find(p => p.slug === slug) ?? PRODUCTS[2]
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0,3)
  const price = product.salePrice ?? product.regularPrice
  const saving = product.salePrice ? Math.round((1 - product.salePrice/product.regularPrice)*100) : null
  const [qty, setQty] = useState(1)
  const [faqOpen, setFaqOpen] = useState<number|null>(null)
  const [shippingOpen, setShippingOpen] = useState(false)
  const [adding, setAdding] = useState(false)
  const handleATC = () => { setAdding(true); for(let i=0;i<qty;i++) addItem({id:product.id,name:product.name[locale],price,pieces:product.pieces,emoji:product.emoji}); setTimeout(()=>setAdding(false),800) }
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <nav className="text-xs text-slate-400 font-semibold flex items-center gap-1">
          <Link href={`/${locale}`} className="hover:text-brand-500">Home</Link><span>›</span>
          <Link href={`/${locale}/collection`} className="hover:text-brand-500">{locale==='fr'?'Collection':'Shop'}</Link><span>›</span>
          <span className="text-slate-600">{product.name[locale]}</span>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-20 self-start">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-hero" style={{background:`radial-gradient(circle at 40% 35%, white 0%, ${product.color}40 60%, ${product.color}80 100%)`}}>
              {product.ebook&&<div className="absolute top-4 left-4 bg-yellow-300 text-slate-800 font-bold text-sm rounded-2xl px-4 py-2 shadow z-10">📖 {locale==='fr'?'1 E-book OFFERT':'1 E-book FREE'}</div>}
              {product.badge&&<div className="absolute top-4 right-4 z-10"><span className="badge-bestseller text-sm px-4 py-2">{product.badge}</span></div>}
              {saving&&<div className="absolute bottom-4 left-4 bg-red-400 text-white font-bold text-sm rounded-full px-4 py-2 shadow z-10">-{saving}%</div>}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-9xl mb-2" style={{animation:'float 3s ease-in-out infinite'}}>{product.emoji}</div>
                <div className="font-bold text-5xl text-blue-300">×{product.pieces}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">{product.tags[locale].map((tag,i)=><span key={i} className="text-xs font-bold bg-blue-50 text-brand-700 px-3 py-1.5 rounded-full">{tag}</span>)}</div>
            <h1 className="font-bold text-3xl sm:text-4xl text-slate-800 mb-3">{product.name[locale]}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-0.5">{[1,2,3,4,5].map(s=><span key={s} className="star text-xl">★</span>)}</div>
              <span className="text-sm font-bold text-slate-600">4.9/5 — 200+ {t.product.reviews}</span>
              {product.badge&&<span className="badge-bestseller">{product.badge}</span>}
            </div>
            <p className="text-slate-600 text-base leading-relaxed mb-6">{product.shortDesc[locale]}</p>
            {saving&&<div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 mb-6 flex items-center justify-between"><div><p className="font-bold text-red-400 text-sm">🔥 {locale==='fr'?`PROMO — Économisez ${saving}%`:`SALE — Save ${saving}%`}</p></div><div className="text-right"><p className="text-slate-400 line-through text-sm">€{product.regularPrice.toFixed(2)}</p><p className="font-black text-red-400 text-lg">€{price.toFixed(2)}</p></div></div>}
            <div className="flex items-baseline gap-3 mb-6"><span className="font-black text-4xl text-brand-600">€{price.toFixed(2)}</span>{product.salePrice&&<span className="text-slate-400 line-through text-xl">€{product.regularPrice.toFixed(2)}</span>}<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">✓ {t.product.inStock}</span></div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-bold text-sm text-slate-600">{locale==='fr'?'Quantité':'Quantity'}</span>
              <div className="flex items-center gap-3 bg-blue-50 rounded-full px-2 py-1">
                <button className="qty-btn" onClick={()=>setQty(Math.max(1,qty-1))}>−</button>
                <span className="font-black text-lg w-8 text-center">{qty}</span>
                <button className="qty-btn" onClick={()=>setQty(qty+1)}>+</button>
              </div>
            </div>
            <button onClick={handleATC} className="btn-primary w-full py-5 text-lg font-black rounded-2xl mb-3 flex items-center justify-center gap-2">
              {adding?<><span className="animate-spin">⏳</span> {t.product.addingToCart}</>:<>{t.product.buyNow}€{(price*qty).toFixed(2)}</>}
            </button>
            <div className="grid grid-cols-3 gap-3 mb-6">{[{icon:'🚚',label:t.product.shipping},{icon:'❤️',label:t.product.guarantee},{icon:'🔒',label:t.product.secure}].map((b,i)=><div key={i} className="text-center text-xs font-semibold text-slate-500 p-2 rounded-xl bg-blue-50"><div className="text-lg mb-1">{b.icon}</div>{b.label}</div>)}</div>
            <div className="payment-icons justify-center mb-8">{['VISA','MC','AMEX','Apple Pay','G Pay','PayPal','Klarna'].map((p,i)=><div key={i} className="payment-icon">{p}</div>)}</div>
            <div className="accordion-item"><button className="accordion-trigger" onClick={()=>setShippingOpen(!shippingOpen)}><span>🚚 {locale==='fr'?'Livraison et retour':'Shipping & Returns'}</span><span className={`transition-transform duration-200 text-brand-400 ${shippingOpen?'rotate-180':''}`}>↓</span></button>
              {shippingOpen&&<div className="pb-4"><div className="rounded-2xl overflow-hidden border border-blue-100">{SHIPPING_ZONES.map((z,i)=><div key={i} className={`grid grid-cols-3 text-xs p-3 gap-2 ${i%2===0?'bg-blue-50':'bg-white'}`}><div className="font-bold text-slate-700">{z.zone[locale]}</div><div className="text-slate-500">{z.standard[locale]}</div><div className="text-slate-500">{z.express[locale]}</div></div>)}</div></div>}
            </div>
            {FAQ_ITEMS.slice(0,4).map((item,i)=><div key={i} className="accordion-item"><button className="accordion-trigger" onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{item.q[locale]}</span><span className={`transition-transform duration-200 text-brand-400 ${faqOpen===i?'rotate-180':''}`}>↓</span></button>{faqOpen===i&&<div className="pb-4 text-sm text-slate-500 leading-relaxed">{item.a[locale]}</div>}</div>)}
          </div>
        </div>
        <div className="mt-24"><h2 className="font-bold text-3xl text-slate-800 mb-8 text-center">{locale==='fr'?'Vous aimerez aussi':'You might also like'}</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">{related.map(p=><ProductCard key={p.id} product={p} locale={locale}/>)}</div></div>
      </div>
    </div>
  )
}