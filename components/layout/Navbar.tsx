'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/components/ui/CartProvider'
import { getT, type Locale } from '@/lib/i18n'
import { SITE } from '@/lib/config'
export default function Navbar({ locale }: { locale: Locale }) {
  const tr = getT(locale)
  const { totalItems, setOpen } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const other = locale === 'en' ? 'fr' : 'en'
  const links = [
    { href: `/${locale}/collection`, label: tr.nav.collection },
    { href: `/${locale}/faq`, label: tr.nav.faq },
    { href: `/${locale}/blog`, label: tr.nav.blog },
    { href: `/${locale}/suivi`, label: tr.nav.track },
    { href: `/${locale}/contact`, label: tr.nav.contact },
  ]
  return (
    <nav className="navbar">
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white text-center py-2 text-xs font-bold">
        {locale === 'fr' ? 'Livraison Gratuite Partout dans le Monde | Garantie 30 Jours' : 'Free Worldwide Shipping | 30-Day Guarantee'}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-lg shadow">F</div>
          <span className="font-bold text-xl text-brand-700 group-hover:text-brand-500 transition-colors">{SITE.name}</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 hover:text-brand-500 transition-colors">{l.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/${other}`} className="hidden sm:flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-brand-500 border border-slate-200 rounded-full px-3 py-1.5">{other.toUpperCase()}</Link>
          <button onClick={() => setOpen(true)} className="relative p-2 rounded-full hover:bg-blue-50 transition-colors" aria-label={tr.nav.cart}>
            <svg width="22" height="22" fill="none" stroke="#0d87e9" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            {totalItems > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-400 text-white text-xs font-bold rounded-full flex items-center justify-center">{totalItems}</span>}
          </button>
        </div>
      </div>
    </nav>
  )
}
