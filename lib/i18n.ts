export type Locale = 'en' | 'fr'
export const locales: Locale[] = ['en', 'fr']
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    nav: { shop:'Shop', collection:'Collection', blog:'Blog', faq:'FAQ', contact:'Contact', track:'Track Order', cart:'Cart' },
    hero: { badge:'🎉 Free Shipping Worldwide', title1:'Bath Time', title2:'Kids Love', subtitle:"Fizzing bath bombs with surprise toys inside - transform every bath into an adventure your kids will beg for.", cta:'Shop Now', cta2:'See All Products', reviews:'4.9/5 - 2,400+ happy kids' },
    product: { addToCart:'Add to Cart', addingToCart:'Adding...', buyNow:'Buy Now - ', outOfStock:'Out of Stock', inStock:'In stock', fewLeft:'Only a few left!', free:'FREE', ebook:'+ Free E-book Gift', reviews:'reviews', shipping:'Free standard shipping', guarantee:'30-day money back guarantee', secure:'100% Secure payment' },
    collection: { title:'Our Collection', subtitle:'Choose your perfect Fizzloo pack', from:'From', pieces:'bombs' },
    sections: { howItWorks:'How It Works', step1title:'Drop it in', step1desc:'Drop a Fizzloo bomb in warm water and watch the magic begin', step2title:'Watch the fizz', step2desc:'Colors swirl and beautiful fizzing fills the tub', step3title:'Find the surprise!', step3desc:'As the bomb dissolves, a mystery toy appears!', whyFizzloo:'Why Parents Love Fizzloo', natural:'100% Natural Formula', naturalDesc:'Made with organic, skin-safe ingredients. No harsh chemicals.', surprise:'A New Surprise Every Time', surpriseDesc:"Kids never know what toy they will discover - keeps bath time exciting!", bathTime:'Ends the Bath Time Battle', bathTimeDesc:'Kids who used to hate baths now run to the bathroom!', safe:'Safe for Sensitive Skin', safeDesc:'Dermatologist tested, hypoallergenic, suitable for ages 3+.', reviews:'What Parents Say', faq:'Frequently Asked Questions' },
    footer: { tagline:'Bath Time Magic for Every Child', legal:'Legal', terms:'Terms & Conditions', privacy:'Privacy Policy', shipping:'Shipping & Returns', legal_notice:'Legal Notice', follow:'Follow Us', rights:'All rights reserved.' },
    cart: { title:'Your Cart', empty:'Your cart is empty', subtotal:'Subtotal', checkout:'Proceed to Checkout', continue:'Continue Shopping' },
    tracking: { title:'Track Your Order', placeholder:'Enter your order number', cta:'Track' }
  },
  fr: {
    nav: { shop:'Boutique', collection:'Collection', blog:'Blog', faq:'FAQ', contact:'Contact', track:'Suivre ma commande', cart:'Panier' },
    hero: { badge:'🎉 Livraison Gratuite dans le Monde Entier', title1:'Le Bain que', title2:'les Enfants Adorent', subtitle:'Des bombes de bain effervescentes avec jouets surprises - transformez chaque bain en aventure que vos enfants reclament.', cta:'Decouvrir', cta2:'Voir tous les produits', reviews:"4,9/5 - Plus de 2 400 enfants ravis" },
    product: { addToCart:'Ajouter au panier', addingToCart:'Ajout...', buyNow:'Acheter maintenant - ', outOfStock:'Rupture de stock', inStock:'En stock', fewLeft:'Plus que quelques-uns !', free:'OFFERT', ebook:'+ E-book offert', reviews:'avis', shipping:'Livraison standard offerte', guarantee:'Satisfait ou rembourse 30 jours', secure:'Paiement 100% securise' },
    collection: { title:'Notre Collection', subtitle:'Choisissez votre pack Fizzloo ideal', from:'A partir de', pieces:'bombes' },
    sections: { howItWorks:'Comment ca marche ?', step1title:'Deposez-la', step1desc:"Plongez une bombe Fizzloo dans l\'eau chaude et regardez la magie operer", step2title:'Regardez le spectacle', step2desc:'Les couleurs tourbillonnent et les bulles envahissent le bain', step3title:'Trouvez la surprise !', step3desc:'En se dissolvant, la bombe revele un jouet mystere !', whyFizzloo:'Pourquoi les parents adorent Fizzloo', natural:'Formule 100% Naturelle', naturalDesc:'Ingredients biologiques, doux pour la peau.', surprise:'Une Nouvelle Surprise a Chaque Fois', surpriseDesc:"Les enfants ne savent jamais quel jouet ils vont decouvrir !", bathTime:'Fini les Batailles du Bain', bathTimeDesc:'Les enfants qui detestaient le bain courent maintenant vers la salle de bain !', safe:'Sure pour les Peaux Sensibles', safeDesc:'Teste dermatologiquement, hypoallergenique, adapte des 3 ans.', reviews:'Ce que disent les parents', faq:'Questions Frequentes' },
    footer: { tagline:'La Magie du Bain pour Chaque Enfant', legal:'Legal', terms:'CGV', privacy:'Politique de confidentialite', shipping:'Livraison & Remboursement', legal_notice:'Mentions legales', follow:'Suivez-nous', rights:'Tous droits reserves.' },
    cart: { title:'Votre Panier', empty:'Votre panier est vide', subtotal:'Sous-total', checkout:'Passer la commande', continue:'Continuer mes achats' },
    tracking: { title:'Suivre ma Commande', placeholder:'Entrez votre numero de commande', cta:'Suivre' }
  }
}

export function getT(locale: Locale) { return translations[locale] }
export function localePath(locale: Locale, path: string) { return `/${locale}${path}` }