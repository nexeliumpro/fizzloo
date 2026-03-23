import { getT, type Locale } from '@/lib/i18n'

const steps = [
  { n: '01', emoji: '🛁', color: '#b9ddff' },
  { n: '02', emoji: '🌊', color: '#7cc2ff' },
  { n: '03', emoji: '🎁', color: '#36a3f7' },
]
export default function HowItWorks({ locale }: { locale: Locale }) {
  const tr = getT(locale)
  const data = [
    { title: tr.sections.step1title, desc: tr.sections.step1desc },
    { title: tr.sections.step2title, desc: tr.sections.step2desc },
    { title: tr.sections.step3title, desc: tr.sections.step3desc },
  ]
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16"><h2 className="font-bold text-4xl text-slate-800">{tr.sections.howItWorks}</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-32 h-32 rounded-full flex items-center justify-center text-5xl shadow-card transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `radial-gradient(circle, white 40%, ${step.color}80 100%)` }}>
                  <span role="img" aria-label={data[i].title}>{step.emoji}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-500 text-white font-black text-sm flex items-center justify-center shadow">{step.n}</div>
              </div>
              <h3 className="font-bold text-xl text-slate-800 mb-2">{data[i].title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{data[i].desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
