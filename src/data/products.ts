import { Product } from '../components/products/ProductCard';

/**
 * FARMTRACK BIOSCIENCES PRODUCT DATA STRUCTURE
 * ============================================
 * 
 * This file contains the complete product catalog for FarmTrack BioSciences.
 * The data is organized into categories for easy management and display.
 * 
 * STRUCTURE OVERVIEW:
 * - ProductCategory: Type definition for product categories
 * - products: Main array containing all product information
 * 
 * CATEGORIES:
 * 1. fruit-fly-solutions: Pheromone-based attractants for fruit fly control
 * 2. accessories: Traps, sticky cards, and monitoring equipment
 * 3. biopesticide-solutions: Biological pest control agents
 * 4. lepidopteran-solutions: Moth and caterpillar control products
 * 5. fungicide-solutions: Organic fungal disease control
 * 
 * PRODUCT FIELDS:
 * - id: Unique identifier for each product
 * - name: Product display name
 * - summary: Brief product description for cards
 * - description: Detailed product information
 * - advantages: Array of key benefits
 * - image: Product image URL
 * - category: General category (pest-control/equipment)
 * - subCategory: Specific product type
 */

// Define product categories
export type ProductCategory = 
  | 'fruit-fly-solutions'
  | 'accessories'
  | 'biopesticide-solutions'
  | 'fungicide-solutions'
  | 'lepidopteran-solutions';

export const products: (Product & { subCategory: ProductCategory })[] = [
  // ========================================
  // FRUIT FLY SOLUTIONS CATEGORY
  // ========================================
  // Pheromone-based attractants for various fruit fly species
  // Used in combination with traps for monitoring and mass trapping
  
  {
    id: 'bactrolure',
    name: 'BACTROLURE (Bactrocera dorsalis)',
    summary: 'Pheromone-based attractant for (Bactrocera dorsalis) ',
    description: 'Bactrolure is a liquid para-pheromone solution containing 98.9g/l of Methyl Eugenol and 50% w/v Malathion. It is specially designed to manage male Bactrocera invadens and other species in the dorsalis fruit fly complex by attracting them to traps where they are eliminated upon contact. This solution plays a critical role in Integrated Pest Management (IPM) strategies, particularly in fruit orchards like mango farms. It is used in combination with Lynfield traps to maximize male fly attraction and prevent reproduction cycles. The active ingredients work synergistically—Methyl Eugenol serves as a powerful male attractant, while Malathion acts as a lethal contact insecticide. Suitable for both smallholder and commercial farmers.',
    advantages: [
      'This is the first fruit fly pheromone as a male attractant in Kenya',
      'Effective on mangoes, oranges and guava',
      'Safe for beneficial insects',
      'Works with lynfield traps',
      'Flexible application rate (monitoring or mass trapping)'
    ],
    image: 'https://images.pexels.com/photos/32005806/pexels-photo-32005806.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pest-control',
    subCategory: 'fruit-fly-solutions'
  },
  {
    id: 'cera-lure',
    name: 'CERA-LURE (Ceratitis capitata)',
    summary: 'Pheromone-based attractant for Mediterranean fruit fly control.',
    description: 'Cera-Lure is a synthetic pheromone attractant designed to control male Ceratitis capitata (Mediterranean fruit fly), one of the most invasive fruit pests. Especially effective in avocado and guava orchards, it works by luring male medflies into Lynfield traps, where they are neutralized. This breaks the pest breeding cycle, reducing infestations and crop losses. Cera-Lure supports sustainable pest control methods and is compatible with both small-scale and commercial agriculture.',
    advantages: [
      'Targets Mediterranean fruit fly',
      'Effective against avocado',
      'Used with lynfield trap / max trap',
      'Up to 4 months shelf life',
      'Mass trapping and monitoring capable'
    ],
    image: 'https://images.pexels.com/photos/32107720/pexels-photo-32107720.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pest-control',
    subCategory: 'fruit-fly-solutions'
  },
  {
    id: 'torula-bait',
    name: 'TORULA/BAIT TRACK',
    summary: 'Food-based attractant targeting female fruit flies.',
    description: 'Torula or Bait Track is a highly effective food-based attractant targeting a wide range of fruit fly species, particularly female adults in their oviposition stage. When used in traps, it attracts female fruit flies that drown upon contact with the liquid bait. This system is crucial for managing infestations in fruits and vegetables, and is widely used for mass trapping in orchards and vegetable farms. It is a powerful tool for minimizing damage by reducing the number of egg-laying females.',
    advantages: [
      'Attracts female fruit flies',
      'Targets fruit and vegetable pests',
      'Effective drowning trap method',
      'Used with lynfield traps / max trap',
      'Monitoring and mass trapping'
    ],
    image: 'https://i.postimg.cc/kXvXqLH4/assets-task-01jynf4mvsfv69wn4jpvy4jbmj-1750919818-img-1.webp',
    category: 'pest-control',
    subCategory: 'fruit-fly-solutions'
  },
  {
    id: 'cue-lure',
    name: 'CUE LURE PLUG ((Bactrocera cucurbitae)',
    summary: 'Semiochemical for melon fly control in cucurbits and solanaceae.',
    description: 'Cue Lure Plug is a semiochemical attractant developed for the targeted control of melon flies (Bactrocera cucurbitae). It is used primarily on cucurbits like melons, pumpkins, and squashes, as well as solanaceous crops such as eggplants and peppers. The lure is placed in traps where it attracts male melon flies, interrupting the breeding cycle. It helps prevent economic damage and forms a vital component of pest management programs in vegetable farming.',
    advantages: [
      'Targets melon fly',
      'Protects cucurbits and solanaceous vegetables',
      'Reduces crop damage',
      'Long-lasting effectiveness',
      'Used with lynfield traps / max trap'
    ],
    image: 'https://i.postimg.cc/bwSCQjjY/assets-task-01jynfcaw2eg2tkzpzqq4tfp8m-1750920080-img-1.webp',
    category: 'pest-control',
    subCategory: 'fruit-fly-solutions'
  },

  // ========================================
  // ACCESSORIES CATEGORY
  // ========================================
  // Traps, sticky cards, and monitoring equipment
  // Essential tools for pest monitoring and control
  
  {
    id: 'max-trap',
    name: 'MAX TRAP',
    summary: 'Enhanced trap for mass fruit fly trapping.',
    description: 'Max Trap is a large-capacity fruit fly trap designed for mass trapping applications. It features a design that improves lure evaporation and fly capture rates, suitable for commercial orchards and large-scale pest management projects.',
    advantages: [
      'High capacity for mass trapping',
      'Improved lure efficiency',
      'Durable and weatherproof',
      'Compatible with multiple lures',
      'Easy to clean and reuse'
    ],
    image: 'https://i.postimg.cc/4x3KMJ3Z/assets-task-01jynfpzf8etv9sncp52wj6rxw-1750920427-img-0.webp',
    category: 'pest-control',
    subCategory: 'accessories'
  },
  {
    id: 'YELLOW & BLUE ROLLERS',
    name: 'YELLOW & BLUE ROLLERS',
    summary: 'Color-specific sticky traps for various flying pests.',
    description: 'Yellow & Blue Sticky Rollers are visual insect traps that attract pests using color-specific wavelengths. Yellow traps target aphids, whiteflies, and leafhoppers, while blue traps are designed for thrips. These UV- and water-resistant rolls are coated with long-lasting adhesive and are suitable for large-area deployment in greenhouses and open fields.',
    advantages: [
      'Color-specific pest targeting',
      'Large surface area coverage',
      'UV resistant coating',
      'Weather resistant',
      'Easy to deploy and replace',
      'Cost-effective for large areas'
    ],
    image: 'https://images.pexels.com/photos/32107721/pexels-photo-32107721.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pest-control',
    subCategory: 'accessories'
  },
  {
    id: 'lynfield-trap',
    name: 'CLEAR LYNFIELD TRAP',
    summary: 'Versatile trap for monitoring and mass trapping fruit flies.',
    description: 'The Clear Lynfield Trap is a robust, transparent plastic container used for monitoring and controlling fruit flies. Designed to work with pheromone lures and insecticides like Para Pheromone or Bactrolure, it features four strategically placed holes at the top that lure fruit flies inside, where they are killed by the attractant-insecticide system. Widely used in fruit orchards, it is ideal for both monitoring and mass trapping efforts.',
    advantages: [
      'Durable clear plastic construction',
      'Compatible with multiple lures',
      'Reusable and long-lasting',
      'Performs well in all weather conditions',
      'Cost-effective solution for large-scale use'
    ],
    image: 'https://images.pexels.com/photos/32187212/pexels-photo-32187212.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'equipment',
    subCategory: 'accessories'
  },
  {
    id: 'delta-trap',
    name: 'DELTA TRAP',
    summary: 'Sticky trap for lepidopteran pest control.',
    description: 'Delta traps use sticky inserts combined with pheromone lures to trap moth pests such as Fall Armyworm and False Codling Moth. The traps are designed for outdoor use and provide easy monitoring and effective pest control.',
    advantages: [
      'Weather resistant design',
      'Easy to deploy',
      'Sticky inserts replaceable',
      'Used in FAW and FCM control',
      'Lightweight and foldable'
    ],
    image: 'https://images.pexels.com/photos/32064004/pexels-photo-32064004.png',
    category: 'pest-control',
    subCategory: 'accessories'
  },
  {
    id: 'sticky-inserts',
    name: 'DELTA INSERTS',
    summary: 'Replacement sticky inserts for delta and max traps.',
    description: 'Delta Inserts are pre-glued white cardboard liners with grid designs used inside Delta Traps. They are coated with high-strength glue that captures pests attracted by pheromones. These inserts are essential for visual monitoring and mass trapping, offering reliability and durability even in humid or dusty environments. Each pack contains 20 cards, and traps can be peeled off as needed.',
    advantages: [
      'High adhesion strength',
      'Easy to replace',
      'Weather resistant',
      'Cost-effective',
      'Strong adhesive coating',
      'Non-toxic to plants'
    ],
    image: 'https://images.pexels.com/photos/32063666/pexels-photo-32063666.png',
    category: 'pest-control',
    subCategory: 'accessories'
  },
  {
    id: 'blue-yellow-cards',
    name: 'BLUE AND YELLOW STICKY CARDS',
    summary: 'Color-specific sticky cards for targeted pest monitoring.',
    description: 'Blue and Yellow Sticky Cards are specialized monitoring tools that use color attraction to target specific pest groups. Yellow cards are highly effective for aphids, whiteflies, and fungus gnats, while blue cards specifically target thrips. These cards are coated with weather-resistant adhesive and can be used in both greenhouse and field conditions.',
    advantages: [
      'Color-specific pest targeting',
      'Weather resistant adhesive',
      'Easy to monitor and count pests',
      'Suitable for greenhouse and field use',
      'Cost-effective monitoring solution',
      'Non-toxic and environmentally safe'
    ],
    image: 'https://i.postimg.cc/gJYT5t0b/20250605-1142-Colorful-Sticky-Notes-Display-simple-compose-01jwzkz4ynfe39yqqe8h1tk681.png',
    category: 'equipment',
    subCategory: 'accessories'
  },

  // ========================================
  // BIOPESTICIDE SOLUTIONS CATEGORY
  // ========================================
  // Biological pest control agents using living organisms
  // Environmentally safe alternatives to chemical pesticides
  
  {
    id: 'bio-pest-x',
    name: 'METATRACK PLUS',
    summary: 'Biopesticide for FCM and thrips using entomopathogenic fungi.',
    description: 'Metatrack Plus is a microbial biopesticide containing Metarhizium anisopliae strain FTC 2, which naturally infects and kills insect pests such as False Codling Moth, thrips, mealy-bugs and other soft bodied insects. When insects come into contact, the spores germinate, penetrate the exoskeleton, and kill the insect from the inside. It is applied weekly and supports organic and environmentally friendly pest management.',
    advantages: [
      'Fungal-based biological pest control',
      'Safe for beneficial insects',
      'Controls thrips and mealy-bugs',
      'Easy to apply organic solution',
      'No chemical residues on crops',
      'No resistance buildup',
      'Biodegradable and eco-safe'
    ],
    image: 'https://i.postimg.cc/dtdfZyPN/assets-task-01jynk54r0f7pr75xwmp0ema2q-1750924057-img-0.webp',
    category: 'pest-control',
    subCategory: 'biopesticide-solutions'
  },
  {
    id: 'biotrack-a',
    name: 'BIOTRACK-A (Bacillus thuringiensis)',
    summary: 'Organic biopesticide targeting lepidopteran larvae.',
    description: 'BioTrack-A is an advanced organic biopesticide containing Bacillus thuringiensis (Bt) strains specifically selected for controlling caterpillars and moth larvae. This biological control agent produces crystal proteins that are toxic only to target pests, making it completely safe for humans, beneficial insects, and the environment. Ideal for organic farming systems and IPM programs.',
    advantages: [
      'Organic certified biopesticide',
      'Targets caterpillars and moth larvae',
      'Safe for beneficial insects and pollinators',
      'No pre-harvest interval required',
      'Compatible with organic farming standards',
      'Environmentally sustainable solution',
      'No resistance development'
    ],
    image: 'https://images.pexels.com/photos/32280290/pexels-photo-32280290.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pest-control',
    subCategory: 'biopesticide-solutions'
  },
  {
    id: 'biotrack-b',
    name: 'BIOTRACK-B (Beauveria bassiana)',
    summary: 'Entomopathogenic fungus for broad-spectrum pest control.',
    description: 'BioTrack-B contains Beauveria bassiana, a naturally occurring entomopathogenic fungus that provides excellent biological control of various insect pests including whiteflies, aphids, thrips, and beetles. This organic biopesticide works by infecting insects through contact, making it an ideal component of sustainable pest management programs.',
    advantages: [
      'Broad-spectrum biological control',
      'Controls whiteflies, aphids, and thrips',
      'Organic and environmentally safe',
      'Long-lasting residual activity',
      'Compatible with beneficial insects',
      'No chemical residues',
      'Supports sustainable agriculture'
    ],
    image: 'https://images.pexels.com/photos/32280291/pexels-photo-32280291.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'pest-control',
    subCategory: 'biopesticide-solutions'
  },

  // ========================================
  // FUNGICIDE SOLUTIONS CATEGORY
  // ========================================
  // Organic fungal disease control products
  // Safe alternatives to synthetic fungicides
  
  {
    id: 'fungi-guard',
    name: 'MILTRACK FUNGICIDE',
    summary: 'Organic fungicide for powdery mildew in various crops.',
    description: 'Miltrack is a contact fungicide composed of NAHCO3, formulated for the effective control of powdery mildew in crops like grapes, roses, vegetables, and fruit trees. Sodium bicarbonate disrupts fungal cells, while proteins and fats create a hostile unfavourable environment for fungal development. Application at first sign of disease then repeat application on weekly basis. This eco-friendly fungicide rapidly kills spores and hyphae on contact and can be integrated into organic farming systems.',
    advantages: [
      'Targets powdery mildew effectively',
      'Systemic and contact action',
      'Suitable for multiple crops',
      'Preventive and curative disease control',
      'Improves overall crop health',
      'Organic farming compatible'
    ],
    image: 'https://i.postimg.cc/qRR9qZHX/20250612-1058-Insect-Lure-Packaging-remix-01jxhj8aave9zr35k7h19h9mpb.png',
    category: 'pest-control',
    subCategory: 'fungicide-solutions'
  },

  // ========================================
  // LEPIDOPTERAN / MOTH SOLUTIONS CATEGORY
  // ========================================
  // Pheromone lures for moth and caterpillar control
  // Targets various moth species affecting different crops
  
  {
    id: 'faw-lure',
    name: 'FAW LURE (Fall army worm)',
    summary: 'Para-pheromone bait for Fall Armyworm control.',
    description: 'FAW Lure is a para-pheromone bait specifically designed to attract and trap male Fall Armyworm (Spodoptera frugiperda), a destructive pest affecting maize, sorghum, barley, and other cereal crops. When used in sticky delta traps, it enables effective monitoring and population control through mass trapping. This lure is an essential tool for farmers looking to manage FAW infestations without heavy reliance on chemical pesticides.',
    advantages: [
      'Effective FAW monitoring tool',
      'Prevents mating and reproduction',
      'Works on Poaceae crops',
      'Mass trapping and monitoring',
      'Used with delta traps'
    ],
    image: 'https://i.postimg.cc/bwCVKjVH/Untitled-design-72.png',
    category: 'pest-control',
    subCategory: 'lepidopteran-solutions'
  },
  {
    id: 'fcm-lure',
    name: 'FCM LURE(False Codling Moth)',
    summary: 'Lure for False Codling Moth control in horticultural crops.',
    description: 'FCM Lure is formulated to attract male False Codling Moths (Thaumatotibia leucotreta), a serious pest of avocados, citrus fruits, and roses. The bait contains three active pheromone components: E7-dodecenyl acetate, E8-dodecenyl acetate, and Z8-dodecenyl acetate, which mimic natural female moth signals. It is used with delta traps for efficient monitoring and trapping. FCM Lure supports eco-friendly pest management and ensures high-quality produce suitable for export markets.',
    advantages: [
      'Targets FCM in high-value crops',
      'Specialized pheromone composition',
      'Used in sticky delta traps',
      'Prevents pest reproduction',
      'Flexible application rate'
    ],
    image: 'https://i.postimg.cc/K8bm1bVL/assets-task-01jynm4bzff4kbam57z5ksqyy4-1750925093-img-1.webp',
    category: 'pest-control',
    subCategory: 'lepidopteran-solutions'
  },
  {
    id: 'tuta-lure',
    name: 'TUTALURE (Tomato leaf miner )',
    summary: 'Lure for tomato leaf miner pest management.',
    description: 'Tutalure is an advanced pheromone bait targeting the tomato leaf miner (Tuta absoluta), a devastating pest in tomato production. It contains active ingredients that mimic female pheromones, luring males into traps with sticky inserts or soapy water where they are eliminated. This significantly reduces mating and subsequent crop damage. Suitable for both greenhouses and open fields, Tutalure plays a crucial role in reducing the use of broad-spectrum insecticides.',
    advantages: [
      'Reduces tomato crop damage',
      'Affects pest reproduction cycle',
      'Safe and specific targeting',
      'Multiple trap compatibility',
      'Effective in early detection'
    ],
    image: 'https://i.postimg.cc/MZ14vB8P/assets-task-01jynm5k8sfdm85t27dhxfskv1-1750925164-img-1.webp',
    category: 'pest-control',
    subCategory: 'lepidopteran-solutions'
  },
  {
    id: 'tutdca-lure',
    name: 'DUPONTRACK LURE (Duponchelia favealis)',
    summary: 'Pheromone attractant for ornamental crop moth pest.',
    description: 'Duponchelia Lure is a synthetic pheromone attractant formulated for the control of Duponchelia fovealis, a pest affecting ornamental plants like roses, gerberas, aquatic plants, and various vegetables. The lure targets male moths and is deployed using sticky delta traps for both monitoring and mass trapping. Its effectiveness in greenhouse environments and ornamental plant systems makes it a preferred option for non-chemical pest control.',
    advantages: [
      'Effective in ornamental crops',
      'Specific moth targeting',
      'Safe on flowers and edibles',
      'Monitoring and mass trapping',
      'Multiple trap compatibility',
      'Effective in early detection'
    ],
    image: 'https://i.postimg.cc/JnsspmR0/assets-task-01jynmgr34fh8vdvawe7q5zdqc-1750925530-img-1.webp',
    category: 'pest-control',
    subCategory: 'lepidopteran-solutions'
  },
  {
    id: 'supagnh-track',
    name: 'SUPA TRACK LURE',
    summary: 'Broad-spectrum moth lure for FCM and others.',
    description: 'Supa Track Lure is a broad-spectrum pheromone attractant designed for multiple moth species, including False Codling Moth, Spodoptera, Helicoverpa, and Duponchelia. Used in conjunction with sticky delta traps, this general-purpose lure aids in early detection and control of pest outbreaks in fruit and flower farms. It\'s especially helpful in mixed crop settings where multiple moth species may be present.',
    advantages: [
      'Multi-moth targeting capability',
      'Broad pest coverage',
      'Highly adaptable lure',
      'Used with delta traps',
      'Effective across seasons'
    ],
    image: 'https://i.postimg.cc/J7brMtYm/assets-task-01jynmhezdfchash0c5tknv6ca-1750925526-img-1-1.webp',
    category: 'pest-control',
    subCategory: 'lepidopteran-solutions'
  },
  {
    id: 'spodoptera-lure',
    name: 'SPODOTRACK-LURE (Spodoptera littoralis)',
    summary: 'Synthetic lure targeting male Spodoptera frugiperda moths.',
    description: 'This synthetic pheromone insect attractant is designed to control male moths of Spodoptera littoralis, a major pest of various cultivated crops. Though it affects a wide range of plants, the most severe damage occurs in cotton, maize, tomatoes, cut flowers, other vegetables and ornamental crops (e.g., roses). Used with delta inserts and delta traps for effective monitoring and mass trapping in affected areas.',
    advantages: [
      'Targeted control of Spodoptera littoralis',
      'Effective across seasons',
      'Used with delta traps and inserts',
      'Effective for both monitoring and mass trapping',
      'Suitable for multiple crop environments'
    ],
    image: 'https://i.postimg.cc/J0yjHZsT/assets-task-01jynmx7jce25a0gm9kddjdddt-1750925931-img-0.webp',
    category: 'pest-control',
    subCategory: 'lepidopteran-solutions'
  },
  {
    id: 'helicoverpa-lure',
    name: 'HELITRACK-LURE (Helicoverpa armigera)',
    summary: 'Non-pesticidal lure for controlling Helicoverpa armigera on roses.',
    description: 'An effective non-pesticidal tool for the early detection, monitoring, and control of Helicoverpa armigera, particularly in rose cultivation. The pheromone lure attracts male moths expecting to mate, but they become trapped on the sticky liners inside delta traps. Mass trapping of males prevents fertilization, thereby halting further generations and suppressing the population below economic damage thresholds.',
    advantages: [
      'Highly targeted control of Helicoverpa armigera',
      'Ideal for rose farms and ornamental crops',
      'Non-pesticidal and eco-friendly',
      'Disrupts mating cycle to reduce pest population',
      'Effective with sticky delta traps'
    ],
    image: 'https://i.postimg.cc/SxLC9yKp/assets-task-01jynmx9akfgjr5rwh2w6ny4c8-1750925924-img-0.webp',
    category: 'pest-control',
    subCategory: 'lepidopteran-solutions'
  },
];

/**
 * USAGE NOTES:
 * ============
 * 
 * 1. To add a new product:
 *    - Create a new object following the existing structure
 *    - Assign a unique ID
 *    - Choose appropriate category and subCategory
 *    - Include all required fields
 * 
 * 2. To modify categories:
 *    - Update the ProductCategory type definition
 *    - Update the categories array in ProductsPage.tsx
 * 
 * 3. Image requirements:
 *    - Use high-quality images (minimum 600x400px)
 *    - Ensure images are optimized for web
 *    - Use consistent aspect ratios where possible
 * 
 * 4. SEO considerations:
 *    - Include relevant keywords in descriptions
 *    - Use descriptive product names
 *    - Ensure advantages highlight key benefits
 */