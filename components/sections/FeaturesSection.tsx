import { getT, type Locale } from '@/lib/i18n'

export default function FeaturesSection({ locale }: { locale: Locale }) {
  const tr = getT(locale)
  const features = [
    { icon: '🌿', title: tr.sections.natural, desc: tr.sections.naturalDesc, color: '#d6f5ee' },
    { icon: '🎁', title: tr.sections.surprise, desc: tr.sections.surpriseDesc, color: '#d6eaff' },
    { icon: '🛁', title: tr.sections.bathTime, desc: tr.sections.bathTimeDesc, color: '#fde8d6' },
    { icon: '👶', title: tr.sections.safe, desc: tr.sections.safeDesc, color: '#fde8f0' },
  ]
  return (
    <section className="py-24" style={{ background: 'linear-gradient(180deg, white 0%, #f0f7ff 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-slate-800">{tr.sections.why}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ background: `${f.color}60`, border: `1.5px solid ${f.color}` }}>
              <div className="w514 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4" style={{ background: f.color }}>
                <span role="img" aria-label={f.title}>{f.icon}</span>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
