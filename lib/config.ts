export const SITE_CONFIG = {
  name: 'Fizzloo',
  tagline: { en: 'Bath Time Magic', fr: 'La Magie du Bain' },
  description: { en: "Bath bombs with surprise toys inside — for kids who can't wait for bath time", fr: 'Des bombes de bain avec jouets surprises — pour les enfants qui adorent le bain' },
  url: 'https://fizzloo.com',
  email: 'hello@fizzloo.com',
  primaryColor: '#0d87e9',
}

export const PRODUCTS = [
  { id:'single', slug:'bombe-bain-surprise', badge:null, ebook:true, pieces:1, regularPrice:14.99, salePrice:null, name:{en:'Single Bath Bomb',fr:'1 Bombe de Bain'}, shortDesc:{en:'Try your first Fizzloo bath bomb. Includes a FREE surprise toy + e-book gift!',fr:'Découvrez votre première bombe Fizzloo. Jouet surprise OFFERT + e-book cadeau !'}, tags:{en:['Natural','Safe 3+','Surprise Toy','Free E-book'],fr:['Naturel','Dès 3 ans','Jouet Surprise','E-book Offert']}, color:'#b9ddff', emoji:'🛁' },
  { id:'pack3', slug:'pack-3-bombes', badge:null, ebook:false, pieces:3, regularPrice:34.99, salePrice:29.99, name:{en:'Starter Pack — 3 Bombs',fr:'Pack Découverte — 3 Bombes'}, shortDesc:{en:'3 fizzing bath bombs with 3 different surprise toys. Perfect starter kit!',fr:'3 bombes effervescentes avec 3 jouets surprises différents. Le kit idéal !'}, tags:{en:['3 Surprises','Best Value','Natural','Safe 3+'],fr:['3 Surprises','Bon plan','Naturel','Dès 3 ans']}, color:'#d6eaff', emoji:'🎁' },
  { id:'pack12', slug:'pack-12-bombes', badge:'BESTSELLER', ebook:false, pieces:12, regularPrice:54.99, salePrice:44.99, name:{en:'Family Pack — 12 Bombs',fr:'Pack Famille — 12 Bombes'}, shortDesc:{en:'12 surprise bath bombs — 12 evenings of bath time magic. Most popular!',fr:'12 bombes surprises — 12 soirées magiques au bain. Le plus populaire !'}, tags:{en:['12 Surprises','Most Popular','Natural','Save 18%'],fr:['12 Surprises','Le + populaire','Naturel','-18%']}, color:'#7cc2ff', emoji:'⭐' },
  { id:'pack15', slug:'pack-15-bombes', badge:'BEST VALUE', ebook:false, pieces:15, regularPrice:64.99, salePrice:52.99, name:{en:'Mega Pack — 15 Bombs',fr:'Méga Pack — 15 Bombes'}, shortDesc:{en:'15 bath bombs — the ultimate collection for bath time fun all month long!',fr:'15 bombes bain — la collection ultime pour un mois entier de plaisir !'}, tags:{en:['15 Surprises','Best Value','Natural','Save 23%'],fr:['15 Surprises','Meilleur rapport','Naturel','-23%']}, color:'#36a3f7', emoji:'🏆' },
  { id:'pack24', slug:'pack-24-bombes', badge:'GIFT BOX', ebook:false, pieces:24, regularPrice:94.99, salePrice:74.99, name:{en:'Luxury Box — 24 Bombs',fr:'Coffret Luxe — 24 Bombes'}, shortDesc:{en:'24 premium bath bombs in a beautiful gift box — perfect for any occasion!',fr:'24 bombes premium en coffret cadeau luxueux — parfait pour toutes les occasions !'}, tags:{en:['24 Surprises','Gift Box','Premium','Save 26%'],fr:['24 Surprises','Coffret Cadeau','Premium','-26%']}, color:'#0d87e9', emoji:'💎' },
]

export const REVIEWS = [
  { name:'Sophie M.', location:'Paris, France', rating:5, date:'12 mars 2025', text:{en:"My daughter absolutely loves them! She now asks to take a bath every evening. Best purchase I've made this year!",fr:'Ma fille les adore ! Elle réclame son bain tous les soirs maintenant. Meilleur achat de l'année !'}, product:'Pack Famille — 12 Bombes', verified:true },
  { name:'James T.', location:'London, UK', rating:5, date:'March 8, 2025', text:{en:'The kids go absolutely wild for these. The surprise toys are so cute and the bombs smell amazing!',fr:'Les enfants deviennent fous avec ça. Les jouets surprises sont adorables !'}, product:'Starter Pack — 3 Bombs', verified:true },
  { name:'Emma L.', location:'Montreal, Canada', rating:5, date:'Feb 28, 2025', text:{en:'Ordered 3 packs as birthday gifts — every kid was thrilled! The packaging is beautiful.',fr:'Commandé 3 packs pour des anniversaires — tous les enfants ont adoré !'}, product:'Luxury Box — 24 Bombs', verified:true },
  { name:'Marie-Claire D.', location:'Lyon, France', rating:5, date:'5 mars 2025', text:{en:'Finally something that makes bath time fun! My son who hated baths now runs to the bathroom.',fr:'Enfin quelque chose qui rend le bain amusant ! Mon fils qui détestait le bain court maintenant vers la salle de bain.'}, product:'Méga Pack — 15 Bombes', verified:true },
  { name:'Lisa K.', location:'New York, USA', rating:5, date:'March 15, 2025', text:{en:"Amazing quality, safe ingredients, and the kids love guessing what toy they'll find. 10/10!",fr:'Qualité incroyable, ingrédients sûrs. 10/10 !'}, product:'Family Pack — 12 Bombs', verified:true },
]

export const FAQ_ITEMS = [
  { q:{en:'Are the bath bombs safe for children?',fr:'Les bombes de bain sont-elles sûres pour les enfants ?'}, a:{en:'Yes! All Fizzloo bath bombs are made with 100% natural and organic ingredients, free from parabens, sulfates, and artificial dyes. Safe for children aged 3+.',fr:'Oui ! Toutes les bombes Fizzloo sont fabriquées avec des ingrédients 100% naturels et biologiques, sans parabènes ni sulfates. Sûres dès 3 ans.'} },
  { q:{en:"What surprise toys are inside?",fr:"Quels jouets surprises se trouvent à l'intérieur ?"}, a:{en:'Each bath bomb contains a miniature surprise toy — animals, dinosaurs, sea creatures, mini figures, and more! Every bomb is different.',fr:"Chaque bombe contient un mini jouet surprise — animaux, dinosaures, créatures marines. Chaque bombe est différente !"} },
  { q:{en:'How long does delivery take?',fr:'Combien de temps prend la livraison ?'}, a:{en:'Standard delivery (free): 5–14 business days for Europe, USA & Canada. Express delivery (€4.99): 3–7 business days.',fr:'Livraison standard (gratuite) : 5 à 14 jours ouvrés pour l'Europe, USA et Canada. Livraison express (4,99€) : 3 à 7 jours.'} },
  { q:{en:'What is your return policy?',fr:'Quelle est votre politique de remboursement ?'}, a:{en:"We offer a 30-day satisfaction guarantee. If you're not happy, contact us and we'll process your refund within 2–7 business days.",fr:"Nous offrons une garantie satisfaction de 30 jours. Remboursement sous 2 à 7 jours ouvrés."} },
  { q:{en:"Do the bombs stain the bathtub?",fr:"Les bombes tachent-elles la baignoire ?"}, a:{en:"No! Our formula uses natural colorants that dissolve completely and do not stain bathtubs, skin, or towels.",fr:"Non ! Notre formule utilise des colorants naturels qui se dissolvent complètement."} },
]

export const SHIPPING_ZONES = [
  { zone:{en:'France, Belgium, Switzerland, Italy, Spain, UK',fr:'France, Belgique, Suisse, Italie, Espagne, Royaume-Uni'}, standard:{en:'Free — 5 to 14 days',fr:'Gratuite — 5 à 14 jours'}, express:{en:'€4.99 — 3 to 7 days',fr:'4,99€ — 3 à 7 jours'} },
  { zone:{en:'USA & Canada',fr:'USA & Canada'}, standard:{en:'Free — 5 to 14 days',fr:'Gratuite — 5 à 14 jours'}, express:{en:'€4.99 — 3 to 7 days',fr:'4,99€ — 3 à 7 jours'} },
  { zone:{en:'International',fr:'International'}, standard:{en:'Free — 7 to 15 days',fr:'Gratuite — 7 à 15 jours'}, express:{en:'€9.99 — 5 to 12 days',fr:'9,99€ — 5 à 12 jours'} },
]