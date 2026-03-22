import { getT, type Locale } from '@/lib/i18n'
export default function FeaturesSection({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const features = [{icon:'🌿',title:t.sections.natural,desc:t.sections.naturalDesc,color:'#d6f5ee'},{icon:'🎁',title:t.sections.surprise,desc:t.sections.surpriseDesc,color:'#d6eaff'},{icon:'🛁',title:t.sections.bathTime,desc:t.sections.bathTimeDesc,color:'#fde8d6'},{icon:'👶',title:t.sections.safe,desc:t.sections.safeDesc,color:'#fde8f0'}]
  return (
    <section className="py-24" style={{background:'linear-gradient(180deg, white 0%, #f0f7ff 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16"><h2 className="font-bold text-4xl text-slate-800">{t.sections.whyFizzloo}</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f,i) => (
            <div key={i} className="rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1" style={{background:f.color+'60',border:`1.5px solid ${f.color}`}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4" style={{background:f.color}}>{f.icon}</div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}