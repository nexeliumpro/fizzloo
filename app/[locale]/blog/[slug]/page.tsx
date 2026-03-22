import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
type Props = { params: { locale: Locale; slug: string } }
export default function BlogArticlePage({ params: { locale, slug } }: Props) {
  const fr = locale === 'fr'
  return (
    <article className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-1 text-brand-500 font-bold text-sm mb-6 hover:gap-2 transition-all">← {fr?'Retour au blog':'Back to blog'}</Link>
          <div className="flex items-center gap-3 mb-4"><span className="text-xs font-bold bg-blue-50 text-brand-700 px-3 py-1 rounded-full">{fr?'Conseils Parents':'Parenting Tips'}</span><span className="text-xs text-slate-400">⏱ 4 min read · March 15, 2025</span></div>
          <h1 className="font-bold text-4xl sm:text-5xl text-slate-800 leading-tight mb-6">{fr?'5 astuces pour rendre le bain amusant pour les enfants':'5 Tips to Make Bath Time Fun for Kids'}</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>{fr?"Le bain n'a pas besoin d'être un combat. Avec la bonne approche et un peu de magie, vous pouvez transformer cette routine quotidienne en l'un des moments les plus attendus de la journée de votre enfant.":'Bath time does not have to be a battle. With the right approach and a little bit of magic, you can transform this daily routine into one of the most anticipated moments of your child day.'}</p>
          <h2 className="font-bold text-2xl text-slate-800 mt-8 mb-3">{fr?'1. Rendez-le imprévisible':'1. Make it unpredictable'}</h2>
          <p>{fr?"Les enfants adorent les surprises. Quand chaque bain cache un mystère — comme une bombe Fizzloo avec un jouet inconnu à l'intérieur — ils arrêtent de le redouter et commencent à l'anticiper.":'Children love surprises. When every bath holds a mystery — like a Fizzloo bath bomb with an unknown toy inside — they stop dreading it and start anticipating it.'}</p>
          <h2 className="font-bold text-2xl text-slate-800 mt-8 mb-3">{fr?'2. Donnez-leur le contrôle':'2. Give them control'}</h2>
          <p>{fr?"Laissez votre enfant choisir la couleur ou le parfum de sa bombe de bain. Cet simple acte d'autonomie peut complètement changer son attitude.":'Let your child choose the color or scent of their bath bomb. This simple act of agency can completely change their attitude.'}</p>
          <h2 className="font-bold text-2xl text-slate-800 mt-8 mb-3">{fr?'3. Créez un rituel':'3. Create a ritual'}</h2>
          <p>{fr?"Des rituels cohérents avant le bain signalent au cerveau qu'une expérience calme et agréable arrive.":'Consistent pre-bath rituals signal to the brain that a calm, enjoyable experience is coming.'}</p>
        </div>
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 text-center">
          <div className="text-5xl mb-4">🛁</div>
          <h3 className="font-bold text-2xl text-slate-800 mb-2">{fr?'Prêt à transformer le bain ?':'Ready to transform bath time?'}</h3>
          <p className="text-slate-500 mb-6">{fr?'Découvrez nos bombes de bain avec jouets surprises':'Discover our bath bombs with surprise toys inside'}</p>
          <Link href={`/${locale}/collection`} className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">🎁 {fr?'Voir la collection':'Shop now'}</Link>
        </div>
      </div>
    </article>
  )
}