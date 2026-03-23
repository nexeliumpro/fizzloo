'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { type Locale, getT } from '@/lib/i18n'

const STEPS = (locale: string) => [
  { label: locale === 'fr' ? 'Commande confirmee' : 'Order confirmed', date: 'Mar 20, 2025', done: true },
  { label: locale === 'fr' ? 'En preparation' : 'Being prepared', date: 'Mar 21, 2025', done: true },
  { label: locale === 'fr' ? 'Expediee' : 'Shipped', date: 'Mar 22, 2025', done: true, active: true },
  { label: locale === 'fr' ? 'En transit' : 'In transit', date: locale === 'fr' ? 'Prevu 24-25 mars' : 'Expected Mar 24-25', done: false },
  { label: locale === 'fr' ? 'Livree' : 'Delivered', date: locale === 'fr' ? 'Prevu 26-28 mars' : 'Expected Mar 26-28', done: false },
]

export default function SuiviPage() {
  const { locale } = useParams() as { locale: Locale }
  const tr = getT(locale)
  const [orderNum, setOrderNum] = useState('')
  const [result, setResult] = useState<null | 'found' | 'notfound'>(null)
  const [loading, setLoading] = useState(false)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!orderNum.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setResult(orderNum.toLowerCase().startsWith('fiz') ? 'found' : 'notfound')
  }

  const steps = STEPS(locale)

  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-slate-800 mb-4">{tr.tracking.title}</h1>
          <p className="text-lg text-slate-500">{tr.tracking.placeholder}</p>
        </div>
      </div>
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-16">
        <form onSubmit={handleTrack} className="flex gap-3 mb-10">
          <input type="text" value={orderNum} onChange={e => setOrderNum(e.target.value)} placeholder="FIZ-12345" className="flex-1 px-5 py-4 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 font-bold text-sm" />
          <button type="submit" disabled={loading} className="btn-primary px-6 py-4 text-sm font-bold rounded-2xl whitespace-nowrap">
            {loading ? '...' : tr.tracking.cta}
          </button>
        </form>
      </div>
    </div>
  )
}
