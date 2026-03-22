'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Globe } from 'lucide-react'
import { useCart } from '@/components/ui/CartProvider'
import { SITE_CONFIG } from '@/lib/config'
import { getT, type Locale } from '@/lib/i18n'

export default function Navbar({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const { totalItems, setOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const other = locale === 'en' ? 'fr' : 'en'
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  const links = [
    { href: `/${locale}/collection`, label: t.nav.collection },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/faq`, label: t.nav.faq },
    { href: `/${locale}/suivi`, label: t.nav.track },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ]
  return (
    <nav className={`navbar transition-all duration-300 ${scrolled ? 'shadow-card' : ''}`}>
      <div className="bg-gradient-to-r from-brand-500 to-brand-600 text-white text-center py-2 text-xs font-bold">
        🚚 {locale==='fr'?'Livraison Gratuite Partout dans le Monde':'Free Worldwide Shipping'} &nbsp;|&nbsp; ❤️ {locale==='fr'?'Garantie 30 jours':'30-Day Guarantee'}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-lg shadow">F</div>
          <span className="font-bold text-xl text-brand-700 group-hover:text-brand-500 transition-colors">{SITE_CONFIG.name}</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => <Link key={l.href} href={l.href} className="text-sm font-semibold text-slate-600 hover:text-brand-500 transition-colors">{l.label}</Link>)}
        </div>
        <div className="flex items-center gap-3">
          <Link href={`/${other}`} className="hidden sm:flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-brand-500 border border-slate-200 rounded-full px-3 py-1.5"><Globe size={12} />{other.toUpperCase()}</Link>
          <button onClick={() => setOpen(true)} className="relative p-2 rounded-full hover:bg-blue-50 transition-colors">
            <ShoppingCart size={22} className="text-brand-600" />
            {totalItems > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-400 text-white text-xs font-bold rounded-full flex items-center justify-center">{totalItems}</span>}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          {links.map(l => <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-slate-700 hover:text-brand-500 py-2">{l.label}</Link>)}
          <Link href={`/${other}`} className="flex items-center gap-1 text-sm font-semibold text-slate-500 py-2"><Globe size={14}/> Switch to {other.toUpperCase()}</Link>
        </div>
      )}
    </nav>
  )
}