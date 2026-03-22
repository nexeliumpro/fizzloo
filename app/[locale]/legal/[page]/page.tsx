import type { Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
type Props = { params: { locale: Locale; page: string } }
const CONTENT: Record<string, Record<string, {title:string;body:string}>> = {
  cgv: { en:{title:'Terms & Conditions',body:'By placing an order on fizzloo.com, you accept these terms. All prices are in EUR. We offer a 30-day satisfaction guarantee. Refunds processed within 2-7 business days. Free standard shipping on all orders.'}, fr:{title:'Conditions Générales de Vente',body:'En passant commande sur fizzloo.com, vous acceptez ces conditions. Tous les prix sont en EUR. Nous offrons une garantie satisfaction de 30 jours. Remboursements traités sous 2-7 jours ouvrés. Livraison standard gratuite sur toutes les commandes.'} },
  privacy: { en:{title:'Privacy Policy',body:'We collect only information necessary to process your orders. Your data is never sold to third parties. Payment processing is handled securely by Stripe. You have the right to access or delete your data at any time by contacting hello@fizzloo.com.'}, fr:{title:'Politique de Confidentialité',body:'Nous collectons uniquement les informations nécessaires au traitement de vos commandes. Vos données ne sont jamais vendues à des tiers. Le traitement des paiements est géré de manière sécurisée par Stripe. Vous pouvez accéder ou supprimer vos données en contactant hello@fizzloo.com.'} },
  shipping: { en:{title:'Shipping & Returns',body:'Standard (free): 5-14 business days Europe/USA/Canada, 7-15 days international. Express (4.99-9.99€): 3-7 business days. 30-day money-back guarantee. Contact hello@fizzloo.com to initiate a return.'}, fr:{title:'Livraison & Remboursement',body:'Standard (gratuit) : 5-14 jours ouvrés Europe/USA/Canada, 7-15 jours international. Express (4,99-9,99€) : 3-7 jours ouvrés. Garantie satisfait ou remboursé 30 jours. Contactez hello@fizzloo.com pour initier un retour.'} },
  mentions: { en:{title:'Legal Notice',body:'Nexelium / Fizzloo - 29 Rue Tronchet, 75008 Paris, France - SIRET: 939 980 132 00020 - Email: hello@fizzloo.com - Hosted by Vercel Inc., San Francisco, CA, USA.'}, fr:{title:'Mentions Légales',body:'Nexelium / Fizzloo - 29 Rue Tronchet, 75008 Paris, France - SIRET : 939 980 132 00020 - Email : hello@fizzloo.com - Hébergé par Vercel Inc., San Francisco, CA, USA.'} },
}
export default function LegalPage({ params: { locale, page } }: Props) {
  const content = CONTENT[page]?.[locale]
  if (!content) notFound()
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-16"><div className="max-w-3xl mx-auto px-4"><h1 className="font-bold text-4xl text-slate-800">{content.title}</h1></div></div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16"><p className="text-slate-600 leading-relaxed">{content.body}</p></div>
    </div>
  )
}