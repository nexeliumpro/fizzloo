import { type Locale, getT } from '@/lib/i18n'
import { SITE } from '@/lib/config'
import { notFound } from 'next/navigation'
type Props = { params: { locale: Locale; page: string } }
const LEGAL: Record<string, Record<string, { title: string; body: string }>> = {
  cgv: {
    en: { title: 'Terms & Conditions', body: 'By placing an order on fizzloo.com, you accept these terms. All prices are in EUR. We offer a 30-day satisfaction guarantee. Refunds are processed within 2-7 business days. Free standard shipping on all orders.' },
    fr: { title: 'Conditions Generales de Vente', body: 'En passant commande sur fizzloo.com, vous acceptez ces conditions. Tous les prix sont en EUR. Nous offrons une garantie satisfaction de 30 jours. Remboursements traites sous 2-7 jours ouvres.' },
  },
  privacy: {
    en: { title: 'Privacy Policy', body: 'We collect only the information necessary to process your orders. Your data is never sold to third parties. Payment processing is handled securely by Stripe.' },
    fr: { title: 'Politique de Confidentialite', body: 'Nous collectons uniquement les informations necessaires au traitement de vos commandes. Vos donnees ne sont jamais vendues a des tiers.' },
  },
  shipping: {
    en: { title: 'Shipping & Returns', body: 'Standard (free): 5-14 business days. Express (EUR 4.99 to 9.99): 3-7 business days. 30-day money-back guarantee. Contact contact@fizzloo.com to initiate a return.' },
    fr: { title: 'Livraison & Remboursement', body: 'Standard (gratuit) : 5-14 jours ouvres. Express (4,99-9,99 EUR) : 3-7 jours ouvres. Garantie satisfait ou rembourse 30 jours.' },
  },
  mentions: {
    en: { title: 'Legal Notice', body: `${SITE.company} / ${SITE.name} - ${SITE.address} - SIRET: ${SITE.siret} - Email: ${SITE.email} - Hosted by Vercel Inc., San Francisco, CA, USA.` },
    fr: { title: 'Mentions Legales', body: `${SITE.company} / ${SITE.name} - ${SITE.address} - SIRET : ${SITE.siret} - Email : ${SITE.email} - Heberge par Vercel Inc., San Francisco, CA, USA.` },
  },
}
export default function LegalPage({ params: { locale, page } }: Props) {
  const content = LEGAL[page]?.[locale]
  if (!content) notFound()
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-bold text-4xl text-slate-800">{content.title}</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-slate-600 leading-relaxed">{content.body}</p>
      </div>
    </div>
  )
}
