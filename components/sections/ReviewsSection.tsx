import { REVIEWS } from '@/lib/config'
import { getT, type Locale } from '@/lib/i18n'
export default function ReviewsSection({ locale }: { locale: Locale }) {
  const tr = getT(locale)
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-3">{[1,2,3,4,5].map(s => <span key={s} className="star text-3xl">*</span>)}</div>
          <h2 className="font-bold text-4xl text-slate-800 mb-2">{tr.sections.reviews}</h2>
          <p className="text-slate-500 font-semibold">{locale === 'fr' ? 'Plus de 2 400 familles satisfaites' : '2,400+ happy families worldwide'}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="flex gap-0.5 mb-3">{Array.from({ length: review.rating }).map((_, s) => <span key={s} className="star text-lg">*</span>)}</div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">{review.text[locale]}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-200 to-brand-400 flex items-center justify-center text-white font-bold text-sm">{review.name[0]}</div>
                  <div><p className="font-bold text-sm text-slate-800">{review.name}</p><p className="text-xs text-slate-400">{review.location}</p></div>
                </div>
                {review.verified && <span className="text-xs font-bold text-brand-500 bg-blue-50 px-2 py-1 rounded-full">Verified</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
