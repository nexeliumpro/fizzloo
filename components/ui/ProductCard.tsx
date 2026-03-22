'use client'
import Link from 'next/link'
import { useCart } from '@/components/ui/CartProvider'
import { getT, type Locale } from '@/lib/i18n'
import type { PRODUCTS } from '@/lib/config'
type Product = (typeof PRODUCTS)[number]
export default function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const t = getT(locale)
  const { addItem } = useCart()
  const price = product.salePrice ?? product.regularPrice
  const saving = product.salePrice ? Math.round((1 - product.salePrice/product.regularPrice)*100) : null
  return (
    <div className="product-card bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 flex flex-col">
      <Link href={`/${locale}/produit/${product.slug}`} className="block">
        <div className="relative aspect-square flex items-center justify-center p-8" style={{background:`radial-gradient(circle at 40% 35%, white 0%, ${product.color}40 100%)`}}>
          {product.ebook && <div className="absolute top-3 left-3 bg-yellow-300 text-slate-800 font-bold text-xs rounded-2xl px-3 py-1.5 shadow">📖 {locale==='fr'?'1 E-book OFFERT':'1 E-book FREE'}</div>}
          {product.badge && <div className="absolute top-3 right-3 badge-bestseller">{product.badge}</div>}
          {saving && <div className="absolute bottom-3 left-3 bg-red-400 text-white font-bold text-xs rounded-full px-3 py-1">-{saving}%</div>}
          <div className="text-center"><div className="text-8xl mb-2" style={{animation:'float 3s ease-in-out infinite'}}>{product.emoji}</div><div className="font-bold text-4xl text-blue-200">×{product.pieces}</div></div>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">{product.tags[locale].slice(0,3).map((tag,i) => <span key={i} className="text-xs font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">{tag}</span>)}</div>
        <Link href={`/${locale}/produit/${product.slug}`}><h3 className="font-bold text-lg text-slate-800 hover:text-brand-600 transition-colors mb-2">{product.name[locale]}</h3></Link>
        <p className="text-sm text-slate-500 mb-4 flex-1 leading-relaxed">{product.shortDesc[locale]}</p>
        <div className="flex items-center gap-1.5 mb-4"><div className="flex gap-0.5">{[1,2,3,4,5].map(s=><span key={s} className="star text-sm">★</span>)}</div><span className="text-xs font-semibold text-slate-500">4.9 (200+ {t.product.reviews})</span></div>
        <div className="flex items-center gap-2 mb-4"><span className="font-bold text-2xl text-brand-600">€{price.toFixed(2)}</span>{product.salePrice&&<span className="text-slate-400 line-through text-sm">€{product.regularPrice.toFixed(2)}</span>}</div>
        <button onClick={() => addItem({id:product.id,name:product.name[locale],price,pieces:product.pieces,emoji:product.emoji})} className="btn-primary w-full py-3.5 text-sm font-bold rounded-2xl">🛒 {t.product.addToCart}</button>
      </div>
    </div>
  )
}