'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { type Locale, getT } from '@/lib/i18n'

export default function ContactPage() {
  const { locale } = useParams() as { locale: Locale }
  const tr = getT(locale)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="font-bold text-5xl text-slate-800 mb-4">{tr.contact.title}</h1>
          <p className="text-xl text-slate-600">{tr.contact.subtitle}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            {[
              { icon: 'mail', title: 'Email', value: 'contact@fizzloo.com' },
              { icon: 'clock', title: locale === 'fr' ? 'Disponibilite' : 'Availability', value: locale === 'fr' ? 'Lun-Ven, 9h-18h' : 'Mon-Fri, 9am-6pm' },
              { icon: 'chat', title: locale === 'fr' ? 'Reponse rapide' : 'Fast response', value: locale === 'fr' ? 'Sous 24h ouvrees' : 'Within 24 business hours' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-3xl bg-blue-50 border border-blue-100">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-card flex items-center justify-center text-2xl flex-shrink-0 text-brand-500 font-bold">{item.icon[0].toUpperCase()}</div>
                <div>
                  <p className="font-bold text-slate-700 text-sm">{item.title}</p>
                  <p className="text-slate-500 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            {sent ? (
              <div className="text-center py-20 rounded-3xl bg-blue-50 border border-blue-100">
                <div className="text-6xl mb-4" role="img" aria-label="party">🎉</div>
                <h2 className="font-bold text-2xl text-slate-800 mb-2">{locale === 'fr' ? 'Message envoye !' : 'Message sent!'}</h2>
                <p className="text-slate-500">{tr.contact.sent}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-3xl p-8 shadow-card border border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{tr.contact.name} *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{tr.contact.subject} *</label>
                  <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm bg-white">
                    <option value="">{locale === 'fr' ? 'Choisir un sujet...' : 'Select a topic...'}</option>
                    {tr.contact.topics.map((topic: string, i: number) => <option key={i}>{topic}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{tr.contact.message} *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm resize-none" />
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base font-bold rounded-2xl flex items-center justify-center gap-2">
                  {loading ? 'Sending...' : tr.contact.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
