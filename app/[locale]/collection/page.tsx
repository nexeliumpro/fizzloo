import type { Locale } from '@/lib/i18n'
import { getT } from '@/lib/i18n'
import { PRODUCTS } from '@/lib/config'
import ProductCard from '@/components/ui/ProductCard'
type Props = { params: { locale: Locale } }
export default function CollectionPage({ params: { locale } }: Props) {
  const t = getT(locale)
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-bold text-5xl text-slate-800 mb-4">{t.collection.title}</h1>
          <p className="text-xl text-slate-600">{t.collection.subtitle}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} locale={locale} />)}
        </div>
      </div>
      <div className="bg-blue-50 py-8 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-600">
            {[{icon:'🚚',en:'Free worldwide shipping',fr:'Livraison mondiale gratuite'},{icon:'❤️',en:'30-day money back guarantee',fr:'Satisfait ou remboursé 30 jours'},{icon:'🔒',en:'100% secure checkout',fr:'Paiement 100% sécurisé'},{icon:'🌿',en:'100% natural ingredients',fr:'100% ingrédients naturels'}].map((b,i) => (
              <div key={i} className="flex items-center gap-2"><span className="text-xl">{b.icon}</span>{b[locale]}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}