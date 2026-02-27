/**
 * FARMTRACK BIOSCIENCES GALLERY DATA STRUCTURE
 * ============================================
 * 
 * This file contains image gallery data showcasing FarmTrack products in action.
 * The gallery demonstrates real-world applications and results across various farms.
 * 
 * STRUCTURE OVERVIEW:
 * - galleryImages: Array containing all gallery image information
 * 
 * IMAGE CATEGORIES:
 * 1. Product demonstrations: Products being used in field conditions
 * 2. Crop results: Before/after comparisons showing product effectiveness
 * 3. Pest control: Examples of pest management and monitoring
 * 4. Farm success stories: Thriving crops using FarmTrack solutions
 * 
 * IMAGE FIELDS:
 * - id: Unique identifier for each image
 * - title: Descriptive title for the image
 * - description: Detailed description of what the image shows
 * - image: URL to the image file
 * - relatedProduct: Associated product ID for cross-referencing
 */

export const galleryImages = [
  // ========================================
  // PRODUCT DEMONSTRATION IMAGES
  // ========================================
  // Images showing products being used in real farm conditions
  
  {
    id: 1,
    title: 'High end Tomato Plants',
    description: 'Healthy tomato plants after using TUTA-LURE treatment',
    image: 'https://i.postimg.cc/Hk50YwM3/assets-task-01jynp51tfeh0b85rm0hz2dm4g-1750927233-img-1.webp',
    relatedProduct: 'bactrolure'
  },
  {
    id: 2,
    title: 'FARMER',
    description: 'For early detection and control of pest outbreaks in fruit and flower farms',
    image: 'https://i.postimg.cc/vB5t0WYc/assets-task-01jynnkfbzfx6stsqkaj15kmg4-1750926841-img-1.webp',
    relatedProduct: 'fruitshield'
  },
  {
    id: 3,
    title: 'bactrolure',
    description: 'PRO-STICKY TRAP installation in vegetable field',
    image: 'https://i.postimg.cc/xd5KzF0q/Untitled-design-62.png',
    relatedProduct: 'pro-sticky-trapTutalure is an advanced pheromone bait targeting the tomato leaf miner (Tuta absoluta)'
  },
  
  // ========================================
  // PEST CONTROL EXAMPLES
  // ========================================
  // Images showing pest identification and control methods
  
  {
    id: 4,
    title: 'types of prodacts',
    description: ' advanced pheromone bait targeting that for different pests',
    image: 'https://i.postimg.cc/Pq81k4df/assets-task-01jy3kehzxfqzbv4b4m84q4d93-1750320354-img-1.webp',
    relatedProduct: 'soil-monitor'
  },
  {
    id: 5,
    title: 'SUPA TRACK LURE',
    description: 'pheromone attractant designed for multiple moth species',
    image: 'https://i.postimg.cc/8CvvGMFD/assets-task-01jynpwwhafbzvh7489cgb898k-1750928023-img-1.webp',
    relatedProduct: 'farmgrow'
  },
  {
    id: 6,
    title: 'Attacks from tuta-absoluta',
    description: ' just grown with FCM-lure you will be good to go',
    image: 'https://i.postimg.cc/8kbK31yK/assets-task-01jyp6astkfz9r6rzewc59hhkh-1750944463-img-0.webp',
    relatedProduct: 'fruitboost'
  },
  {
    id: 7,
    title: 'Moth attack display',
    description: 'For targeted application',
    image: 'https://i.postimg.cc/Y0N4CnPk/assets-task-01jyp412xbfnw8hn37649dq0mr-1750941785-img-1.webp',
    relatedProduct: 'precision-sprayer'
  },
  
  // ========================================
  // FIELD APPLICATIONS
  // ========================================
  // Images showing products deployed in various agricultural settings
  
  {
    id: 8,
    title: 'MAX TRAP IN FILELD',
    description: 'Crops protected from pests using MAXTRAP',
    image: 'https://i.postimg.cc/xTJnt87y/assets-task-01jxhhzhqgejsax33vp1tsw4kb-1749714841-img-2.webp',
    relatedProduct: 'pestblock'
  },
  {
    id: 9,
    title: 'Seedlings friendly',
    description: 'Rich soil achieved with SOILBOOST treatment',
    image: 'https://i.postimg.cc/3xqwYQwm/assets-task-01jyp3wyqrf64rdryxav3x2hb1-1750941826-img-1.webp',
    relatedProduct: 'soilboost'
  },
  {
    id: 10,
    title: 'large tomatoes harvest',
    description: 'using a liquid para-pheromone solution',
    image: 'https://i.postimg.cc/nrwLzy1y/assets-task-01jyp4qe4wfde8bhv9pjcxk4ay-1750942530-img-0.webp',
    relatedProduct: 'organicare'
  },
  
  // ========================================
  // SUCCESS STORIES
  // ========================================
  // Images showing successful crop outcomes and farmer satisfaction
  
  {
    id: 11,
    title: 'Fruit Fly Control',
    description: 'Combact all forms of fruit pests technology',
    image: 'https://i.postimg.cc/d1HwSSq0/assets-task-01jy3f7h0yek6vhbm60dv2x664-1750315923-img-0.webp',
    relatedProduct: 'cuelure'
  },
  {
    id: 12,
    title: 'MAIZE PEST ATTACKS',
    description: 'Modern FarmTrack integrated solutions',
    image: 'https://i.postimg.cc/RhJk72m5/assets-task-01jyp54e4jesavj5qjx17t7a4t-1750943148-img-1.webp',
    relatedProduct: 'cropdefend'
  },
  {
    id: 13,
    title: 'PEST ATTRACTING ON WATER-MELONS',
    description: 'Farm implementing FarmTrack best practices',
    image:'https://i.postimg.cc/rFxmcPrP/assets-task-01jyp5b8tfev8r8snhzz6328bm-1750943257-img-1.webp',
    relatedProduct: 'farmgrow'
  },
  
  // ========================================
  // CROP VARIETIES
  // ========================================
  // Images showing different crops benefiting from FarmTrack solutions
  
  {
    id: 14,
    title: 'MANGOES PESTS',
    description: 'EXAMPLES',
    image: 'https://i.postimg.cc/CK1SZPRY/assets-task-01jyp5xk2yezmswv3cyca6fgqy-1750943840-img-0.webp',
    relatedProduct: 'solar-trap'
  },
  {
    id: 15,
    title: 'Successful Flower Harvest',
    description: 'Abundant harvest resulting from FarmTrack solutions',
    image: 'https://i.postimg.cc/j5P9CP4t/assets-task-01jyp6080efz6b4dspwvbr9nmj-1750943970-img-1.webp',
    relatedProduct: 'fruitboost'
  },
  {
    id: 16,
    title: 'CLEAR TRAP ',
    description: 'TEMPORALY SOLUTIONS',
    image: 'https://i.postimg.cc/Gm4XHvbV/assets-task-01jyp6mc5ges5taz4ahjj1ek7s-1750944579-img-0.webp',
    relatedProduct: 'solar-trap'
  },
  {
    id: 17,
    title: 'CUPSICUM',
    description: 'EXAMPLES',
    image: 'https://i.postimg.cc/pXVN9TQJ/assets-task-01jxhn9m6zfqw8bs8rxnp2jtxb-1749718270-img-1.webp',
    relatedProduct: 'solar-trap'
  }
];

/**
 * USAGE NOTES:
 * ============
 * 
 * 1. Image Requirements:
 *    - High resolution (minimum 800x600px)
 *    - Optimized for web (compressed but quality maintained)
 *    - Consistent aspect ratios where possible
 *    - Clear, well-lit agricultural scenes
 * 
 * 2. Content Guidelines:
 *    - Show real farm applications
 *    - Include before/after comparisons when possible
 *    - Demonstrate product effectiveness
 *    - Feature diverse crop types and farming conditions
 * 
 * 3. SEO Considerations:
 *    - Use descriptive titles with relevant keywords
 *    - Include location information when relevant
 *    - Reference specific products in descriptions
 *    - Maintain consistent naming conventions
 * 
 * 4. Related Products:
 *    - Link images to relevant product IDs
 *    - Ensure product references are accurate
 *    - Update when products are modified or discontinued
 *    - Use for cross-promotion and product discovery
 * 
 * 5. Maintenance:
 *    - Regularly update with new success stories
 *    - Remove outdated or low-quality images
 *    - Ensure all image URLs are accessible
 *    - Verify related product links remain valid
 */