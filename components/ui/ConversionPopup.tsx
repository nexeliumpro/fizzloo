'use client'
import { useState, useEffect } from 'react'
import { useCart } from '@/components/ui/CartProvider'
import { PRODUCTS } from '@/lib/config'
import { getT, type Locale } from '@/lib/i18n'
const EMOJI_MAP: Record<string, string> = { tub: 'ð', gift: 'ð', star: '', trophy: 'ð', gem: 'ð' }
export default function ConversionPopup({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false)
  const { addItem } = useCart()
  const product = PRODUCTS.find(p => p.id === 'pack12') ?? PRODUCTS[2]
  const price = product.salePrice ?? product.regularPrice
  const emoji = EMOJI_MAP[product.emoji] ?? product.emoji
  const tr = getT(locale)
  useEffect(() => {
    if (sessionStorage.getItem('fizzloo_popup')) return
    const id = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(id)
  }, [])
  const dismiss = () => { setVisible(false); sessionStorage.setItem('fizzloo_popup', '1') }
  if (!visible) return null
  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm" onClick={dismiss} />
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-4 flex items-center justify-between">
          <div><p className="text-white font-bold text-sm">{locale === 'fr' ? 'Offre speciale !' : 'Special offer!'}</p></div>
          <button onClick={dismiss} className="text-white text-lg font-bold w-7 h-7">x</button>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-sm text-slate-800 mb-2">{product.name[locale]}</h3>
          <span className="font-black text-brand-600">{price.toFixed(2)} EUR</span>
          <button onClick={() => { addItem({ id: product.id, name: product.name[locale], price, pieces: product.pieces, emoji }); dismiss() }} className="btn-primary w-full py-3 mt-3 text-sm font-bold rounded-2xl">{tr.product.addToCart}</button>
        </div>
      </div>
    </>
  )
}
