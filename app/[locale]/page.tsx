import { type Locale } from '@/lib/i18n'
import HeroSection from '@/components/sections/HeroSection'
import HowItWorks from '@/components/sections/HowItWorks'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ReviewsSection from '@/components/sections/ReviewsSection'
import FAQSection from '@/components/sections/FAQSection'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/lib/config'
import { getT } from '@/lib/i18n'
import Link from 'next/link'

type Props = { params: { locale: Locale } }

export default function HomePage({ params: { locale } }: Props) {
  const tr = getT(locale)
  const featured = PRODUCTS.filter(p => ['pack3', 'pack12', 'pack24'].includes(p.id))
  return (
    <>
      <HeroSection locale={locale} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl text-slate-800">
              {locale === 'fr' ? 'Les Favoris des Familles' : 'Family Favorites'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map(p => <ProductCard key={p.id} product={p} locale={locale} />)}
          </div>
          <div className="text-center mt-10">
            <Link href={`/${locale}/collection`} className="inline-flex items-center gap-2 border-2 border-brand-300 text-brand-600 font-bold px-8 py-3.5 rounded-2xl hover:bg-brand-50 transition-colors">
              {tr.collection.title} -&gt;
            </Link>
          </div>
        </div>
      </section>
      <HowItWorks locale={locale} />
      <FeaturesSection locale={locale} />
      <section className="py-16 bg-gradient-to-r from-brand-500 to-brand-700 text-center px-4">
        <h2 className="font-bold text-4xl text-white mb-4">
          {locale === 'fr' ? 'Fini les batailles du bain !' : 'End the bath time battle!'}
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          {locale === 'fr' ? 'Rejoignez 2 400+ familles qui ont transforme le bain en moment magique' : 'Join 2,400+ families who transformed bath time into magic'}
        </p>
        <Link href={`/${locale}/collection`} className="inline-flex items-center gap-2 bg-white text-brand-600 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-brand-50 transition-colors shadow-lg">
          <span role="img" aria-label="bath">🛁</span>
          {locale === 'fr' ? 'Decouvrir Fizzloo' : 'Shop Fizzloo'}
        </Link>
      </section>
      <ReviewsSection locale={locale} />
      <FAQSection locale={locale} />
    </>
  )
}
