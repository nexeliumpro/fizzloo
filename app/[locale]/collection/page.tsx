import { type Locale, getT } from '@/lib/i18n'
import { PRODUCTS } from '@/lib/config'
import ProductCard from '@/components/ui/ProductCard'

type Props = { params: { locale: Locale } }

export default function CollectionPage({ params: { locale } }: Props) {
  const tr = getT(locale)
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-bold text-5xl text-slate-800 mb-4">{tr.collection.title}</h1>
          <p className="text-xl text-slate-600">{tr.collection.subtitle}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} locale={locale} />)}
        </div>
      </div>
    </div>
  )
}
