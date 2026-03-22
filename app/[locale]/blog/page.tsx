import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
type Props = { params: { locale: Locale } }
const POSTS = [
  {slug:'bath-time-routine-kids',emoji:'🛁',date:'March 15, 2025',readTime:'4 min',color:'#d6eaff',title:{en:'5 Tips to Make Bath Time Fun for Kids',fr:'5 astuces pour rendre le bain amusant pour les enfants'},excerpt:{en:'Bath time struggles are real — but they do not have to be. Here are 5 proven strategies.',fr:'Le combat du bain est réel — mais il ne doit pas l'être. Voici 5 stratégies éprouvées.'},category:{en:'Parenting Tips',fr:'Conseils Parents'}},
  {slug:'natural-bath-products-children',emoji:'🌿',date:'March 8, 2025',readTime:'6 min',color:'#d6f5ee',title:{en:"Why Natural Bath Products Matter for Children's Skin",fr:"Pourquoi les produits de bain naturels sont essentiels pour la peau des enfants"},excerpt:{en:"Children's skin is up to 5x more permeable than adults.",fr:"La peau des enfants est jusqu'à 5 fois plus perméable que celle des adultes."},category:{en:'Health & Safety',fr:'Santé & Sécurité'}},
  {slug:'sensory-play-bath-time',emoji:'🌈',date:'March 1, 2025',readTime:'5 min',color:'#fde8f0',title:{en:'The Science of Sensory Play During Bath Time',fr:'La science du jeu sensoriel pendant le bain'},excerpt:{en:'Bath time is actually the perfect moment for sensory exploration.',fr:"Le bain est en fait le moment idéal pour l'exploration sensorielle."},category:{en:'Child Development',fr:'Développement Enfant'}},
  {slug:'perfect-bedtime-routine',emoji:'🌙',date:'February 22, 2025',readTime:'7 min',color:'#ede8fd',title:{en:'The Perfect Bedtime Routine: How Bath Time Sets Kids Up for Better Sleep',fr:'La routine du coucher parfaite : comment le bain prépare les enfants à mieux dormir'},excerpt:{en:'Sleep experts agree: a warm bath 1-2 hours before bed dramatically improves sleep quality.',fr:'Les experts du sommeil s'accordent : un bain chaud 1 à 2 heures avant le coucher améliore le sommeil.'},category:{en:'Sleep & Wellness',fr:'Sommeil & Bien-être'}},
]
export default function BlogPage({ params: { locale } }: Props) {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient py-20"><div className="max-w-4xl mx-auto px-4 text-center"><h1 className="font-bold text-5xl text-slate-800 mb-4">{locale==='fr'?'Le Blog Fizzloo':'The Fizzloo Blog'}</h1><p className="text-xl text-slate-600">{locale==='fr'?'Conseils, astuces et guides pour les parents':'Tips, tricks and guides for parents'}</p></div></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post,i) => (
            <Link key={i} href={`/${locale}/blog/${post.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video flex items-center justify-center text-6xl" style={{background:`linear-gradient(135deg, ${post.color}60, ${post.color}cc)`}}>{post.emoji}</div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3"><span className="text-xs font-bold bg-blue-50 text-brand-700 px-3 py-1 rounded-full">{post.category[locale]}</span><span className="text-xs text-slate-400 font-semibold">⏱ {post.readTime} read</span></div>
                <h2 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-brand-600 transition-colors leading-snug">{post.title[locale]}</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{post.excerpt[locale]}</p>
                <div className="flex items-center justify-between"><span className="text-xs text-slate-400 font-semibold">{post.date}</span><span className="text-xs font-bold text-brand-500 group-hover:translate-x-1 transition-transform inline-block">{locale==='fr'?'Lire →':'Read →'}</span></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}