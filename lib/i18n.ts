export type Locale = 'en' | 'fr'
export const locales: Locale[] = ['en', 'fr']
export const defaultLocale: Locale = 'en'

export const t = {
  en: {
    nav: {
      collection: 'Shop',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      track: 'Track Order',
      cart: 'Cart',
    },
    hero: {
      badge: 'Free Worldwide Shipping',
      title1: 'Bath Time',
      title2: 'Kids Love',
      subtitle: 'Fizzing bath bombs with surprise toys inside -- transform every bath into magic.',
      cta: 'Shop Now',
      cta2: 'See All Products',
      reviews: '4.9/5 -- 2,400+ happy kids',
    },
    product: {
      addToCart: 'Add to Cart',
      adding: 'Adding...',
      buyNow: 'Buy Now',
      outOfStock: 'Out of Stock',
      inStock: 'In stock',
      reviews: 'reviews',
      shipping: 'Free standard shipping',
      guarantee: '30-day money back guarantee',
      secure: '100% Secure payment',
      ebook: '+ Free E-book Gift',
    },
    collection: {
      title: 'Our Collection',
      subtitle: 'Choose your perfect Fizzloo pack',
    },
    sections: {
      howItWorks: 'How It Works', step1title: 'Drop it in', step1desc: 'Drop a Fizzloo bomb in warm water and watch the magic begin',
      step2title: 'Watch the fizz', step2desc: 'Colors swirl and beautiful fizzing fills the tub',
      step3title: 'Find the surprise!', step3desc: 'As the bomb dissolves, a mystery toy appears!',
      why: 'Why Parents Love Fizzloo', natural: '100% Natural Formula', naturalDesc: 'Made with organic, skin-safe ingredients. No harsh chemicals.',
      surprise: 'A New Surprise Every Time', surpriseDesc: 'Kids never know what toy they will discover -- keeps bath time exciting!',
      bathTime: 'Ends the Bath Time Battle', bathTimeDesc: 'Kids who used to hate baths now run to the bathroom!',
      safe: 'Safe for Sensitive Skin', safeDesc: 'Dermatologist tested, hypoallergenic, suitable for ages 3+.',
      reviews: 'What Parents Say', faq: 'Frequently Asked Questions',
    },
    footer: { tagline: 'Bath Time Magic for Every Child', legal: 'Legal', terms: 'Terms & Conditions', privacy: 'Privacy Policy', shipping: 'Shipping & Returns', mentions: 'Legal Notice', rights: 'All rights reserved.' },
    cart: { title: 'Your Cart', empty: 'Your cart is empty', subtotal: 'Subtotal', checkout: 'Proceed to Checkout', continue: 'Continue Shopping', shipping: 'Free shipping included' },
    tracking: { title: 'Track My Order', placeholder: 'Enter your order number (e.g. FIZ-12345)', cta: 'Track', notFound: 'Order not found. Check the number or contact us.' },
    blog: { title: 'The Fizzloo Blog', subtitle: 'Tips and guides for parents' },
    contact: { title: 'Contact Us', subtitle: 'We reply within 24 hours', name: 'Full Name', subject: 'Subject', message: 'Message', send: 'Send Message', sent: 'Message sent! We will get back to you within 24 hours.', topics: ['Product question', 'Order tracking', 'Refund / Return', 'Other'] },
    faq: { title: 'Frequently Asked Questions', subtitle: 'Everything you want to know about Fizzloo' },
    legal: { cgv: 'Terms & Conditions', privacy: 'Privacy Policy', shipping: 'Shipping & Returns', mentions: 'Legal Notice' },
    trust: ['Free Shipping', '30-Day Guarantee', '100% Natural', 'Secure Payment'],
  },
  fr: {
    nav: { collection: 'Boutique', blog: 'Blog', faq: 'FAQ', contact: 'Contact', track: 'Suivre ma commande', cart: 'Panier' },
    hero: { badge: 'Livraison Gratuite dans le Monde Entier', title1: 'Le Bain que', title2: 'les Enfants Adorent', subtitle: 'Des bombes de bain avec jouets surprises -- transformez chaque bain en moment magique.', cta: 'Decouvrir', cta2: 'Voir tous les produits', reviews: '4,9/5 -- Plus de 2 400 enfants ravis' },
    product: { addToCart: 'Ajouter au panier', adding: 'Ajout...', buyNow: 'Acheter maintenant', outOfStock: 'Rupture de stock', inStock: 'En stock', reviews: 'avis', shipping: 'Livraison standard offerte', guarantee: 'Satisfait ou rembourse 30 jours', secure: 'Paiement 100% securise', ebook: '+ E-book offert' },
    collection: { title: 'Notre Collection', subtitle: 'Choisissez votre pack Fizzloo ideal' },
    sections: { howItWorks: 'Comment ca marche ?', step1title: 'Deposez-la', step1desc: 'Plongez une bombe Fizzloo dans l\'eau chaude et regardez la magie operer', step2title: 'Regardez le spectacle', step2desc: 'Les couleurs tourbillonnent et les bulles envahissent le bain', step3title: 'Trouvez la surprise !', step3desc: 'En se dissolvant, la bombe revele un jouet mystere !', why: 'Pourquoi les parents adorent Fizzloo', natural: 'Formule 100% Naturelle', naturalDesc: 'Ingredients biologiques, doux pour la peau. Zero produit chimique agressif.', surprise: 'Une Nouvelle Surprise a Chaque Fois', surpriseDesc: 'Les enfants ne savent jamais quel jouet ils vont decouvrir -- le bain reste toujours excitant !', bathTime: 'Fini les Batailles du Bain', bathTimeDesc: 'Les enfants qui detestaient le bain courent maintenant vers la salle de bain !', safe: 'Sure pour les Peaux Sensibles', safeDesc: 'Teste dermatologiquement, hypoallergenique, adapte des 3 ans.', reviews: 'Ce que disent les parents', faq: 'Questions Frequentes' },
    footer: { tagline: 'La Magie du Bain pour Chaque Enfant', legal: 'Legal', terms: 'CGV', privacy: 'Politique de confidentialite', shipping: 'Livraison & Remboursement', mentions: 'Mentions legales', rights: 'Tous droits reserves.' },
    cart: { title: 'Votre Panier', empty: 'Votre panier est vide', subtotal: 'Sous-total', checkout: 'Passer la commande', continue: 'Continuer mes achats', shipping: 'Livraison gratuite incluse' },
    tracking: { title: 'Suivre ma Commande', placeholder: 'Entrez votre numero de commande (ex: FIZ-12345)', cta: 'Suivre', notFound: 'Commande introuvable. Verifiez le numero ou contactez-nous.' },
    blog: { title: 'Le Blog Fizzloo', subtitle: 'Conseils pour les parents' },
    contact: { title: 'Contactez-nous', subtitle: 'Nous repondons sous 24 heures', name: 'Prenom & Nom', subject: 'Sujet', message: 'Message', send: 'Envoyer le message', sent: 'Message envoye ! Nous vous repondrons dans les 24 heures.', topics: ['Question sur un produit', 'Suivi de commande', 'Remboursement / Retour', 'Autre'] },
    faq: { title: 'Questions Frequentes', subtitle: 'Tout ce que vous voulez savoir sur Fizzloo' },
    legal: { cgv: 'Conditions Generales de Vente', privacy: 'Politique de Confidentialite', shipping: 'Livraison & Remboursement', mentions: 'Mentions Legales' },
    trust: ['Livraison Offerte', 'Garantie 30 Jours', '100% Naturel', 'Paiement Securise'],
  },
} as const

export type TranslationKey = typeof t
export function getT(locale: Locale) { return t[locale] }
