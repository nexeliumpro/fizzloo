import Link from 'next/link'
import { type Locale } from '@/lib/i18n'

type Props = { params: { locale: Locale; slug: string } }

export default function BlogArticlePage({ params: { locale } }: Props) {
  const fr = locale === 'fr'
  return (
    <article className="min-h-screen">
      <div className="hero-gradient py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-1 text-brand-500 font-bold text-sm mb-6 hover:underline">
            &lt;- {fr ? 'Retour au blog' : 'Back to blog'}
          </Link>
          <h1 className="font-bold text-4xl sm:text-5xl text-slate-800 leading-tight mb-6">
            {fr ? '5 conseils pour rendre le bain amusant' : '5 Tips to Make Bath Time Fun for Kids'}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-blue-50 text-brand-700 px-3 py-1 rounded-full">{fr ? 'Conseils Parents' : 'Parenting Tips'}</span>
            <span className="text-xs text-slate-400">4 min read - March 15, 2025</span>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>{fr ? 'La routine du bain ne doit pas etre un combat.' : 'Bath time does not have to be a battle.'}</p>
          <h2 className="font-bold text-2xl text-slate-800 mt-8 mb-3">{fr ? '1. Rendez-le imprevisible' : '1. Make it unpredictable'}</h2>
          <p>{fr ? 'Les enfants adorent les surprises.' : 'Children love surprises.'}</p>
        </div>
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 text-center">
          <div className="text-5xl mb-4" role="img" aria-label="bath">🛁</div>
          <h3 className="font-bold text-2xl text-slate-800 mb-2">{fr ? 'Pret a transformer le bain ?' : 'Ready to transform bath time?'}</h3>
          <Link href={`/${locale}/collection`} className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold">
            <span role="img" aria-label="gift">🎁</span> {fr ? 'Voir la collection' : 'Shop now'}
          </Link>
        </div>
      </div>
    </article>
  )
}
