'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
export default function ContactPage() {
  const { locale } = useParams() as { locale: Locale }
  const fr = locale === 'fr'
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); setLoading(true); await new Promise(r => setTimeout(r, 1200)); setLoading(false); setSent(true) }
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20"><div className="max-w-2xl mx-auto px-4 text-center"><h1 className="font-bold text-5xl text-slate-800 mb-4">{fr?'Contactez-nous':'Contact Us'}</h1><p className="text-xl text-slate-600">{fr?'Nous répondons sous 24 heures':'We reply within 24 hours'}</p></div></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            {[{icon:'📧',title:'Email',value:'hello@fizzloo.com'},{icon:'⏰',title:fr?'Disponibilité':'Availability',value:fr?'Lun–Ven, 9h–18h':'Mon–Fri, 9am–6pm'},{icon:'💬',title:fr?'Réponse rapide':'Fast response',value:fr?'Sous 24h ouvrées':'Within 24 business hours'}].map((item,i) => (
              <div key={i} className="flex gap-4 p-4 rounded-3xl bg-blue-50 border border-blue-100">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-card flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                <div><p className="font-bold text-slate-700 text-sm">{item.title}</p><p className="text-slate-500 text-sm">{item.value}</p></div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            {sent ? (
              <div className="text-center py-20 rounded-3xl bg-blue-50 border border-blue-100"><div className="text-6xl mb-4">🎉</div><h2 className="font-bold text-2xl text-slate-800 mb-2">{fr?'Message envoyé !':'Message sent!'}</h2><p className="text-slate-500">{fr?'Nous vous répondrons dans les 24 heures.':"We'll get back to you within 24 hours."}</p></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-3xl p-8 shadow-card border border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-bold text-slate-700 mb-2">{fr?'Prénom & Nom':'Full Name'} *</label><input type="text" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm" /></div>
                  <div><label className="block text-sm font-bold text-slate-700 mb-2">Email *</label><input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm" /></div>
                </div>
                <div><label className="block text-sm font-bold text-slate-700 mb-2">{fr?'Sujet':'Subject'} *</label>
                  <select required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm bg-white">
                    <option value="">{fr?'Choisir un sujet…':'Select a topic…'}</option>
                    <option>{fr?'Question sur un produit':'Product question'}</option>
                    <option>{fr?'Suivi de commande':'Order tracking'}</option>
                    <option>{fr?'Remboursement / Retour':'Refund / Return'}</option>
                    <option>{fr?'Autre':'Other'}</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold text-slate-700 mb-2">{fr?'Message':'Message'} *</label><textarea required rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm resize-none" /></div>
                <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base font-bold rounded-2xl">
                  {loading?<><span className="animate-spin text-xl">⏳</span> {fr?'Envoi…':'Sending…'}</> : <>{fr?'📨 Envoyer le message':'📨 Send message'}</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}