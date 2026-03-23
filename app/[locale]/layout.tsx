import type { Metadata } from 'next'
import { SITE } from '@/lib/config'
import { getT, type Locale } from '@/lib/i18n'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartProvider from '@/components/ui/CartProvider'
import ConversionPopup from '@/components/ui/ConversionPopup'

type Props = { children: React.ReactNode; params: { locale: Locale } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tr = getT(params.locale)
  return {
    title: `${SITE.name} -- ${SITE.tagline[params.locale]}`,
    description: SITE.desc[params.locale],
    alternates: {
      canonical: `${SITE.url}/${params.locale}`,
      languages: { en: `${SITE.url}/en`, fr: `${SITE.url}/fr` },
    },
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }]
}

export default function LocaleLayout({ children, params }: Props) {
  return (
    <CartProvider>
      <div lang={params.locale} className="min-h-screen flex flex-col">
        <Navbar locale={params.locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={params.locale} />
        <ConversionPopup locale={params.locale} />
      </div>
    </CartProvider>
  )
}
