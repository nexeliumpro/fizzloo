import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
type Props = { params: { locale: Locale } }
const POSTS = [
  {slug:'bath-time-routine-kids',emoji:'🛁',date:'March 15, 2025',readTime:'4 min',color:'#d6eaff',title:{en:'5 Tips to Make Bath Time Fun for Kids',fr:'5 astuces pour rendre le bain amusant'},excerpt:{en:'Bath time struggles are real. Here are 5 proven strategies to transform your routine.',fr:'La routine du bain peut etre transformee. Voici 5 strategies.'},category:{en:'Parenting Tips',fr:'Conseils Parents'}},
    {slug:'natural-bath-products-children',emoji:'🌿',date:'March 8, 2025',readTime:'6 min',color:'#d6f5ee',title:{en:'Natural Bath Products for Children',fr:'Produits naturels pour enfants'},excerpt:{en:'Natural ingredients are best for sensitive skin.',fr:'Les ingredients naturels sont les meilleurs pour la peau sensible.'},category:{en:'Health',fr:'Sante'}},
      {slug:'sensory-play-bath-time',emoji:'🌈',date:'March 1, 2025',readTime:'5 min',color:'#fde8f0',title:{en:'Sensory Play During Bath Time',fr:'Jeu sensoriel pendant le bain'},excerpt:{en:'Bath time is perfect for sensory exploration.',fr:'Le bain est ideal pour explorer les sens.'},category:{en:'Development',fr:'Developpement'}},
        {slug:'perfect-bedtime-routine',emoji:'🌙',date:'February 22, 2025',readTime:'7 min',color:'#ede8fd',title:{en:'Bedtime Routine for Better Sleep',fr:'Routine du coucher pour mieux dormir'},excerpt:{en:'A warm bath before bed improves sleep quality.',fr:'Un bain chaud avant le coucher ameliore le sommeil.'},category:{en:'Sleep',fr:'Sommeil'}},
        ]
        export default function BlogPage({ params: { locale } }: Props) {
          return (
              <div className="min-h-screen">
                    <div className="hero-gradient py-20"><div className="max-w-4xl mx-auto px-4 text-center"><h1 className="font-bold text-5xl text-slate-800 mb-4">{locale==='fr'?'Le Blog Fizzloo':'The Fizzloo Blog'}</h1><p className="text-xl text-slate-600">{locale==='fr'?'Conseils pour les parents':'Tips for parents'}</p></div></div>
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {POSTS.map((post,i) => (
                                                        <Link key={i} href={`/${locale}/blog/${post.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-card border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                                                      <div className="aspect-video flex items-center justify-center text-6xl" style={{background:`linear-gradient(135deg, ${post.color}60, ${post.color}cc)`}}>{post.emoji}</div>
                                                                                    <div className="p-5">
                                                                                                    <div className="flex items-center justify-between mb-3"><span className="text-xs font-bold bg-blue-50 text-brand-700 px-3 py-1 rounded-full">{post.category[locale]}</span><span className="text-xs text-slate-400">⏱ {post.readTime}</span></div>
                                                                                                                    <h2 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-brand-600 leading-snug">{post.title[locale]}</h2>
                                                                                                                                    <p className="text-sm text-slate-500 mb-4">{post.excerpt[locale]}</p>
                                                                                                                                                    <div className="flex items-center justify-between"><span className="text-xs text-slate-400">{post.date}</span><span className="text-xs font-bold text-brand-500">{locale==='fr'?'Lire ->':'Read ->'}</span></div>
                                                                                                                                                                  </div>
                                                                                                                                                                              </Link>
                                                                                                                                                                                        ))}
                                                                                                                                                                                                </div>
                                                                                                                                                                                                      </div>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                            )
                                                                                                                                                                                                            }