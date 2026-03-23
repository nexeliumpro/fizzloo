import Link from 'next/link'
import { SITE } from '@/lib/config'
import { getT, type Locale } from '@/lib/i18n'
export default function Footer({ locale }: { locale: Locale }) {
  const tr = getT(locale)
  const legal = [
    { label: tr.footer.terms, href: `/${locale}/legal/cgv` },
    { label: tr.footer.privacy, href: `/${locale}/legal/privacy` },
    { label: tr.footer.shipping, href: `/${locale}/legal/shipping` },
    { label: tr.footer.mentions, href: `/${locale}/legal/mentions` },
  ]
  const nav = [
    { label: tr.nav.collection, href: `/${locale}/collection` },
    { label: tr.nav.blog, href: `/${locale}/blog` },
    { label: tr.nav.faq, href: `/${locale}/faq` },
    { label: tr.nav.track, href: `/${locale}/suivi` },
    { label: tr.nav.contact, href: `/${locale}/contact` },
  ]
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 border-t border-blue-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-xl">F</div>
              <span className="font-bold text-2xl text-brand-700">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">{tr.footer.tagline}</p>
            <p className="text-xs text-slate-400 mt-3">{SITE.company} - SIRET {SITE.siret}</p>
            <p className="text-xs text-slate-400">{SITE.address}</p>
          </div>
          <div><h4 className="font-bold text-slate-700 mb-4">{tr.footer.legal}</h4><ul className="space-y-2 text-sm">{legal.map(l => <li key={l.href}><Link href={l.href} className="text-slate-500 hover:text-brand-500 transition-colors">{l.label}</Link></li>)}</ul></div>
          <div><h4 className="font-bold text-slate-700 mb-4">Navigation</h4><ul className="space-y-2 text-sm">{nav.map(l => <li key={l.href}><Link href={l.href} className="text-slate-500 hover:text-brand-500 transition-colors">{l.label}</Link></li>)}</ul></div>
        </div>
        <div className="border-t border-blue-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-400">(c) {new Date().getFullYear()} {SITE.name}. {tr.footer.rights}</p>
          <div className="flex gap-4 text-xs text-slate-400"><span>SSL Secured</span><span>Stripe Payments</span><span>Worldwide Shipping</span></div>
        </div>
      </div>
    </footer>
  )
}
