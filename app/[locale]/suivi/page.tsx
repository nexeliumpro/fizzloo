'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
type Step = { label: string; date: string; done: boolean; active: boolean }
export default function TrackingPage() {
  const { locale } = useParams() as { locale: Locale }
  const fr = locale === 'fr'
  const [orderNum, setOrderNum] = useState('')
  const [result, setResult] = useState<null|'found'|'notfound'>(null)
  const [loading, setLoading] = useState(false)
  const handleTrack = async (e: React.FormEvent) => { e.preventDefault(); if (!orderNum.trim()) return; setLoading(true); await new Promise(r => setTimeout(r, 1000)); setLoading(false); setResult(orderNum.toLowerCase().startsWith('fiz') ? 'found' : 'notfound') }
  const steps: Step[] = [
    {label:fr?'✅ Commande confirmée':'✅ Order confirmed',date:'Mar 20, 2025',done:true,active:false},
    {label:fr?'📦 En préparation':'📦 Being prepared',date:'Mar 21, 2025',done:true,active:false},
    {label:fr?'🚀 Expédiée':'🚀 Shipped',date:'Mar 22, 2025',done:true,active:true},
    {label:fr?'✈️ En transit':'✈️ In transit',date:fr?'Prévu 24–25 mars':'Expected Mar 24–25',done:false,active:false},
    {label:fr?'📬 Livrée':'📬 Delivered',date:fr?'Prévu 26–28 mars':'Expected Mar 26–28',done:false,active:false},
  ]
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20"><div className="max-w-xl mx-auto px-4 text-center"><h1 className="font-bold text-5xl text-slate-800 mb-4">{fr?'Suivre ma Commande':'Track My Order'}</h1><p className="text-lg text-slate-500">{fr?'Entrez votre numéro de commande (ex: FIZ-12345)':'Enter your order number (e.g. FIZ-12345)'}</p></div></div>
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-16">
        <form onSubmit={handleTrack} className="flex gap-3 mb-10">
          <input type="text" value={orderNum} onChange={e=>setOrderNum(e.target.value)} placeholder="FIZ-12345" className="flex-1 px-5 py-4 rounded-2xl border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 font-bold text-sm" />
          <button type="submit" disabled={loading} className="btn-primary px-6 py-4 text-sm font-bold rounded-2xl whitespace-nowrap">{loading?'⏳':(fr?'🔍 Suivre':'🔍 Track')}</button>
        </form>
        {result==='notfound' && <div className="text-center p-8 rounded-3xl bg-red-50 border border-red-100"><div className="text-4xl mb-3">😔</div><h3 className="font-bold text-slate-700 mb-2">{fr?'Commande introuvable':'Order not found'}</h3><p className="text-sm text-slate-500">{fr?'Vérifiez le numéro ou contactez-nous à hello@fizzloo.com':'Please check the number or contact us at hello@fizzloo.com'}</p></div>}
        {result==='found' && (
          <div className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-5 text-white flex justify-between items-start">
              <div><p className="text-blue-100 text-xs font-semibold">{fr?'Commande':'Order'}</p><p className="font-black text-xl">{orderNum.toUpperCase()}</p></div>
              <span className="bg-white/20 text-white font-bold text-xs px-3 py-1 rounded-full">🚀 {fr?'En transit':'In transit'}</span>
            </div>
            <div className="p-6">
              <div className="relative">
                <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-blue-100"/>
                <div className="space-y-6">
                  {steps.map((step,i) => (
                    <div key={i} className="flex gap-4 items-start relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10 text-sm ${step.done?'bg-brand-500 text-white shadow':step.active?'bg-white border-2 border-brand-400 shadow-card':'bg-slate-100 text-slate-400'}`}>{step.done?'✓':i+1}</div>
                      <div className="pt-1.5"><p className={`font-bold text-sm ${step.done||step.active?'text-slate-800':'text-slate-400'}`}>{step.label}</p><p className="text-xs text-slate-400 font-semibold">{step.date}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}