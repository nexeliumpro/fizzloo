'use client'
import { useState, useEffect } from 'react'
import { useCart } from '@/components/ui/CartProvider'
import { PRODUCTS } from '@/lib/config'
import type { Locale } from '@/lib/i18n'
const CONFIG = { enabled:true, delaySeconds:10, bestsellerProductId:'pack12' }
export default function ConversionPopup({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { addItem } = useCart()
  const product = PRODUCTS.find(p => p.id === CONFIG.bestsellerProductId) ?? PRODUCTS[2]
  const price = product.salePrice ?? product.regularPrice
  useEffect(() => {
    if (!CONFIG.enabled || dismissed) return
    const already = sessionStorage.getItem('fizzloo_popup')
    if (already) return
    const id = setTimeout(() => setVisible(true), CONFIG.delaySeconds * 1000)
    return () => clearTimeout(id)
  }, [dismissed])
  const dismiss = () => { setVisible(false); setDismissed(true); sessionStorage.setItem('fizzloo_popup','1') }
  if (!visible) return null
  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm" onClick={dismiss}/>
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-4 flex items-center justify-between">
          <div><p className="text-white font-bold text-sm">{locale==='fr'?'🔥 Offre spéciale !':'🔥 Special offer!'}</p><p className="text-blue-100 text-xs">{locale==='fr'?'Seulement quelques-uns restants':'Only a few left'}</p></div>
          <button onClick={dismiss} className="text-white/70 hover:text-white text-xl w-7 h-7 flex items-center justify-center">✕</button>
        </div>
        <div className="p-4">
          <div className="flex gap-3 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl flex-shrink-0">{product.emoji}</div>
            <div><div className="badge-bestseller mb-1">BESTSELLER</div><h3 className="font-bold text-sm text-slate-800">{product.name[locale]}</h3><div className="flex items-center gap-2 mt-1"><span className="font-black text-brand-600">€{price.toFixed(2)}</span>{product.salePrice&&<span className="text-xs text-slate-400 line-through">€{product.regularPrice.toFixed(2)}</span>}</div></div>
          </div>
          <button onClick={() => { addItem({id:product.id,name:product.name[locale],price,pieces:product.pieces,emoji:product.emoji}); dismiss() }} className="btn-primary w-full py-3 text-sm font-bold rounded-2xl">🛒 {locale==='fr'?'Ajouter au panier':'Add to Cart'}</button>
          <p className="text-xs text-center text-slate-400 mt-2">{locale==='fr'?'🚚 Livraison gratuite incluse':'🚚 Free shipping included'}</p>
        </div>
      </div>
    </>
  )
}