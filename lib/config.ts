export type Locale = 'en' | 'fr'

// ============================================================
// PRODUCTS
// ============================================================
export const PRODUCTS = [
  {
    id: 'single',
    slug: 'bombe-bain-surprise',
    badge: null as string | null,
    ebook: true,
    pieces: 1,
    regularPrice: 14.99,
    salePrice: null as number | null,
    emoji: 'tub',
    color: '#b9ddff',
    name:      { en: 'Single Bath Bomb',            fr: '1 Bombe de Bain' },
    shortDesc: { en: 'Try your first Fizzloo bomb. FREE surprise toy + e-book gift!',
                 fr: 'Decouvrez votre premiere bombe Fizzloo. Jouet surprise OFFERT + e-book cadeau !' },
    tags:      { en: ['Natural', 'Safe 3+', 'Surprise Toy', 'Free E-book'],
                 fr: ['Naturel', 'Des 3 ans', 'Jouet Surprise', 'E-book Offert'] },
  },
  {
    id: 'pack3',
    slug: 'pack-3-bombes',
    badge: null as string | null,
    ebook: false,
    pieces: 3,
    regularPrice: 34.99,
    salePrice: 29.99,
    emoji: 'gift',
    color: '#d6eaff',
    name:      { en: 'Starter Pack -- 3 Bombs',     fr: 'Pack Decouverte -- 3 Bombes' },
    shortDesc: { en: '3 fizzing bombs with 3 different surprise toys. Perfect starter kit!',
                 fr: '3 bombes effervescentes avec 3 jouets surprises differents. Le kit ideal !' },
    tags:      { en: ['3 Surprises', 'Best Value', 'Natural', 'Safe 3+'],
                 fr: ['3 Surprises', 'Bon plan', 'Naturel', 'Des 3 ans'] },
  },
  {
    id: 'pack12',
    slug: 'pack-12-bombes',
    badge: 'BESTSELLER',
    ebook: false,
    pieces: 12,
    regularPrice: 54.99,
    salePrice: 44.99,
    emoji: 'star',
    color: '#7cc2ff',
    name:      { en: 'Family Pack -- 12 Bombs',     fr: 'Pack Famille -- 12 Bombes' },
    shortDesc: { en: '12 surprise bombs -- 12 evenings of bath time magic. Most popular!',
                 fr: '12 bombes surprises -- 12 soirees magiques au bain. Le plus populaire !' },
    tags:      { en: ['12 Surprises', 'Most Popular', 'Natural', 'Save 18%'],
                 fr: ['12 Surprises', 'Le + populaire', 'Naturel', '-18%'] },
  },
  {
    id: 'pack15',
    slug: 'pack-15-bombes',
    badge: 'BEST VALUE',
    ebook: false,
    pieces: 15,
    regularPrice: 64.99,
    salePrice: 52.99,
    emoji: 'trophy',
    color: '#36a3f7',
    name:      { en: 'Mega Pack -- 15 Bombs',       fr: 'Mega Pack -- 15 Bombes' },
    shortDesc: { en: '15 bombs -- the ultimate collection for a full month of fun!',
                 fr: '15 bombes -- la collection ultime pour un mois entier de plaisir !' },
    tags:      { en: ['15 Surprises', 'Best Value', 'Natural', 'Save 23%'],
                 fr: ['15 Surprises', 'Meilleur rapport', 'Naturel', '-23%'] },
  },
  {
    id: 'pack24',
    slug: 'pack-24-bombes',
    badge: 'GIFT BOX',
    ebook: false,
    pieces: 24,
    regularPrice: 94.99,
    salePrice: 74.99,
    emoji: 'gem',
    color: '#0d87e9',
    name:      { en: 'Luxury Box -- 24 Bombs',      fr: 'Coffret Luxe -- 24 Bombes' },
    shortDesc: { en: '24 premium bombs in a beautiful gift box -- perfect for any occasion!',
                 fr: '24 bombes premium en coffret cadeau luxueux -- parfait pour toutes les occasions !' },
    tags:      { en: ['24 Surprises', 'Gift Box', 'Premium', 'Save 26%'],
                 fr: ['24 Surprises', 'Coffret Cadeau', 'Premium', '-26%'] },
  },
] as const

export type Product = typeof PRODUCTS[number]

// ============================================================
// REVIEWS
// ============================================================
export const REVIEWS = [
  {
    name: 'Sophie M.',
    location: 'Paris, France',
    rating: 5,
    date: 'March 12, 2025',
    product: 'Pack Famille -- 12 Bombes',
    verified: true,
    text: {
      en: 'My daughter absolutely loves them! She now asks to take a bath every evening. Best purchase of the year!',
      fr: 'Ma fille les adore ! Elle reclame son bain tous les soirs maintenant. Meilleur achat de l\'annee !',
    },
  },
  {
    name: 'James T.',
    location: 'London, UK',
    rating: 5,
    date: 'March 8, 2025',
    product: 'Starter Pack -- 3 Bombs',
    verified: true,
    text: {
      en: 'The kids go absolutely wild for these. The surprise toys are so cute and the bombs smell amazing!',
      fr: 'Les enfants deviennent fous avec ca. Les jouets surprises sont adorables !',
    },
  },
  {
    name: 'Emma L.',
    location: 'Montreal, Canada',
    rating: 5,
    date: 'Feb 28, 2025',
    product: 'Luxury Box -- 24 Bombs',
    verified: true,
    text: {
      en: 'Ordered 3 packs as birthday gifts -- every kid was thrilled! Beautiful packaging.',
      fr: 'Commande 3 packs pour des anniversaires -- tous les enfants ont adore ! Emballage superbe.',
    },
  },
  {
    name: 'Marie-Claire D.',
    location: 'Lyon, France',
    rating: 5,
    date: 'March 5, 2025',
    product: 'Mega Pack -- 15 Bombes',
    verified: true,
    text: {
      en: 'Finally something that makes bath time fun! My son now runs to the bathroom.',
      fr: 'Enfin quelque chose qui rend le bain amusant ! Mon fils court maintenant vers la salle de bain.',
    },
  },
  {
    name: 'Lisa K.',
    location: 'New York, USA',
    rating: 5,
    date: 'March 15, 2025',
    product: 'Family Pack -- 12 Bombs',
    verified: true,
    text: {
      en: 'Amazing quality, safe ingredients, kids love guessing what toy they will find. 10/10!',
      fr: 'Qualite incroyable, ingredients surs, les enfants adorent deviner le jouet. 10/10 !',
    },
  },
]

// ============================================================
// FAQ
// ============================================================
export const FAQ_ITEMS = [
  {
    q: { en: 'Are the bath bombs safe for children?', fr: 'Les bombes sont-elles sures pour les enfants ?' },
    a: { en: 'Yes! All Fizzloo bombs are made with 100% natural and organic ingredients, free from parabens and sulfates. Safe for ages 3+.',
         fr: 'Oui ! Toutes les bombes Fizzloo sont fabriquees avec des ingredients 100% naturels et biologiques. Sures des 3 ans.' },
  },
  {
    q: { en: 'What surprise toys are inside?', fr: 'Quels jouets surprises sont a l\'interieur ?' },
    a: { en: 'Each bomb contains a miniature toy -- animals, dinosaurs, sea creatures, mini figures and more! Every bomb is different.',
         fr: 'Chaque bombe contient un mini jouet -- animaux, dinosaures, creatures marines, mini figurines et plus ! Chaque bombe est differente.' },
  },
  {
    q: { en: 'How long does delivery take?', fr: 'Combien de temps prend la livraison ?' },
    a: { en: 'Standard (free): 5-14 business days for Europe/USA/Canada. Express (EUR 4.99): 3-7 business days.',
         fr: 'Standard (gratuite) : 5 a 14 jours ouvres pour Europe/USA/Canada. Express (4,99 EUR) : 3 a 7 jours ouvres.' },
  },
  {
    q: { en: 'What is your return policy?', fr: 'Quelle est votre politique de retour ?' },
    a: { en: 'We offer a 30-day satisfaction guarantee. Contact us for a full refund within 2-7 business days.',
         fr: 'Nous offrons une garantie satisfaction de 30 jours. Remboursement sous 2 a 7 jours ouvres.' },
  },
  {
    q: { en: 'Do the bombs stain the bathtub?', fr: 'Les bombes tachent-elles la baignoire ?' },
    a: { en: 'No! Our natural colorants dissolve completely and do not stain bathtubs, skin, or towels.',
         fr: 'Non ! Nos colorants naturels se dissolvent completement et ne tachent ni la baignoire, ni la peau, ni les serviettes.' },
  },
]

// ============================================================
// SHIPPING ZONES
// ============================================================
export const SHIPPING_ZONES = [
  { zone: { en: 'Europe / USA / Canada', fr: 'Europe / USA / Canada' },
    standard: { en: 'Free -- 5 to 14 days', fr: 'Gratuite -- 5 a 14 jours' },
    express:  { en: 'EUR 4.99 -- 3 to 7 days', fr: '4,99 EUR -- 3 a 7 jours' } },
  { zone: { en: 'International', fr: 'International' },
    standard: { en: 'Free -- 7 to 15 days', fr: 'Gratuite -- 7 a 15 jours' },
    express:  { en: 'EUR 9.99 -- 5 to 12 days', fr: '9,99 EUR -- 5 a 12 jours' } },
]

// ============================================================
// SITE CONFIG
// ============================================================
export const SITE = {
  name: 'Fizzloo',
  tagline: { en: 'Bath Time Magic', fr: 'La Magie du Bain' },
  desc: {
    en: 'Fizzing bath bombs with surprise toys inside -- for kids who love bath time',
    fr: 'Des bombes de bain avec jouets surprises -- pour les enfants qui adorent le bain',
  },
  url: 'https://fizzloo.com',
  email: 'contact@fizzloo.com',
  company: 'Nexelium',
  siret: '939 980 132 00020',
  address: '29 Rue Tronchet, 75008 Paris, France',
}
