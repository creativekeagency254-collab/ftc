/**
 * FARMTRACK BIOSCIENCES REGIONAL MAP DATA STRUCTURE
 * =================================================
 * 
 * This file contains regional impact data for FarmTrack's presence across Kenya.
 * The data shows agricultural improvements and adoption rates by county.
 * 
 * STRUCTURE OVERVIEW:
 * - RegionData: Interface defining regional information structure
 * - regions: Array containing data for each county/region
 * 
 * REGIONAL CATEGORIES:
 * 1. Central Kenya: Coffee, tea, and horticultural crops
 * 2. Western Kenya: Maize, sugarcane, and mixed farming
 * 3. Rift Valley: Large-scale agriculture and livestock
 * 4. Coast Region: Coconuts, cashews, and tropical fruits
 * 5. Eastern Kenya: Drought-resistant crops and livestock
 * 
 * REGION FIELDS:
 * - id: Unique identifier for each region
 * - name: Official county/region name
 * - crop: Primary agricultural focus in the region
 * - improvement: Percentage improvement in yields/productivity
 * - population: Population in millions for context
 * - position: CSS positioning for map visualization (if used)
 */

export interface RegionData {
  id: string;
  name: string;
  crops: string[];
  description: string;
  farms: number;
  improvement: number;
  population: number;
  image: string;
  position: {
    top: string;
    left: string;
  };
}

export const regions: RegionData[] = [
  // ========================================
  // CENTRAL KENYA REGION
  // ========================================
  // High-value crops: coffee, tea, horticulture
  // Urban and peri-urban agriculture
  
  {
    id: 'nairobi',
    name: 'Nairobi County',
    crops: ['Urban Farming'],
    description: 'Urban and peri-urban agriculture hub',
    farms: 45,
    improvement: 32,
    population: 4.4,
    image: 'https://i.postimg.cc/wTc7J4XP/download-9.jpg',
    position: {
      top: '60%',
      left: '53%'
    }
  },
  {
    id: 'kiambu',
    name: 'Kiambu County',
    crops: ['Coffee'],
    description: 'Premium coffee growing region',
    farms: 78,
    improvement: 38,
    population: 2.4,
    image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: {
      top: '55%',
      left: '51%'
    }
  },
  {
    id: 'nyeri',
    name: 'Nyeri County',
    crops: ['Coffee', 'Tea', 'Avocados'],
    description: 'High altitude farming region',
    farms: 62,
    improvement: 40,
    population: 0.8,
    image: 'https://i.postimg.cc/x1fqPGgd/5a7d8526-b397-4b7c-a22e-03ec7431df74.jpg',
    position: {
      top: '47%',
      left: '53%'
    }
  },
  {
    id: 'marsabit',
    name: 'MURANG\'A COUNTY',
    crops: ['Coffee', 'Tea'],
    description: 'High altitude coffee and tea production',
    farms: 34,
    improvement: 22,
    population: 0.5,
    image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: {
      top: '18%',
      left: '54%'
    }
  },
  
  // ========================================
  // RIFT VALLEY REGION
  // ========================================
  // Large-scale agriculture, flowers, and mixed farming
  
  {
    id: 'nakuru',
    name: 'Nakuru County',
    crops: ['Watermelons', 'Cucurbits'],
    description: 'Watermelon and cucurbit production hub',
    farms: 89,
    improvement: 45,
    population: 2.2,
    image: 'https://i.postimg.cc/Gt9RmCw0/Watermelon-field-watermelon-backgrounds-banner-summer-freshly-harvest-agriculture-farmer.jpg',
    position: {
      top: '53%',
      left: '42%'
    }
  },
  {
    id: 'uasin_gishu',
    name: 'Uasin Gishu County',
    crops: ['Maize', 'Wheat'],
    description: 'Large-scale grain farming',
    farms: 56,
    improvement: 47,
    population: 1.2,
    image: 'https://i.postimg.cc/cJZRN8sg/20250901-1335-Harvesting-Oranges-by-Lake-simple-compose-01k42de6bpfcnb5d80kj32m2em.png',
    position: {
      top: '44%',
      left: '38%'
    }
  },
  {
    id: 'kilifi',
    name: 'Kirinyaga County',
    crops: ['Rice', 'Avocados'],
    description: 'Rice and avocado farming',
    farms: 67,
    improvement: 26,
    population: 1.5,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: {
      top: '72%',
      left: '70%'
    }
  },
  
  // ========================================
  // EASTERN KENYA REGION
  // ========================================
  // Drought-resistant crops, fruits, and livestock
  
  {
    id: 'mombasa',
    name: 'Makueni County', 
    crops: ['Mangoes', 'Oranges'],
    description: 'Citrus and tropical fruits',
    farms: 43,
    improvement: 28,
    population: 1.2,
    image: 'https://i.postimg.cc/4d37P65G/20250901-1311-Avocado-Harvest-Smiles-remix-01k42c0f7pfshrrn0ey5hre4an-1.png',
    position: {
      top: '80%',
      left: '67%'
    }
  },
  {
    id: 'machakos',
    name: 'Machakos County',
    crops: ['Vegetables', 'Fruits'],
    description: 'Diverse horticultural production',
    farms: 71,
    improvement: 31,
    population: 1.4,
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: {
      top: '65%',
      left: '58%'
    }
  },
  {
    id: 'meru',
    name: 'Meru County',
    crops: ['Avocados', 'Miraa'],
    description: 'High-value crop specialization',
    farms: 58,
    improvement: 35,
    population: 1.5,
    image: 'https://i.postimg.cc/J0ZTqHM1/Khat-miraa-sn.jpg',
    position: {
      top: '43%',
      left: '60%'
    }
  },
  
  // ========================================
  // WESTERN KENYA REGION
  // ========================================
  // Maize, sugarcane, and mixed farming systems
  
  {
    id: 'kisumu',
    name: 'Kisumu County',
    crops: ['Rice', 'Sugarcane'],
    description: 'Rice and sugarcane production',
    farms: 52,
    improvement: 42,
    population: 1.2,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: {
      top: '50%',
      left: '27%'
    }
  },
  {
    id: 'kakamega',
    name: 'Kitui County',
    crops: ['Mangoes', 'Tomatoes'],
    description: 'Fruit and vegetable production',
    farms: 39,
    improvement: 39,
    population: 2.0,
    image: 'https://i.postimg.cc/L5cJmrM4/20250901-1256-Mombasa-Coastal-Harvest-simple-compose-01k42b76ygfenv8pgnw879s5tn-1.png',
    position: {
      top: '42%',
      left: '28%'
    }
  }
];

/**
 * REGIONAL IMPACT METRICS:
 * ========================
 * 
 * The improvement percentages represent:
 * - Yield increases compared to conventional methods
 * - Pest reduction effectiveness
 * - Overall farm productivity improvements
 * - Farmer satisfaction and adoption rates
 * 
 * CALCULATION METHODOLOGY:
 * - Based on field trials and farmer surveys
 * - Averaged over multiple growing seasons
 * - Adjusted for regional variations and crop types
 * - Validated through third-party assessments
 * 
 * USAGE NOTES:
 * ============
 * 
 * 1. Data Updates:
 *    - Review quarterly based on new field data
 *    - Update improvement percentages annually
 *    - Add new regions as expansion occurs
 *    - Remove or consolidate underperforming areas
 * 
 * 2. Visualization:
 *    - Position coordinates are for CSS-based maps
 *    - Colors can be assigned based on improvement levels
 *    - Interactive features can show detailed statistics
 *    - Mobile-responsive design considerations
 * 
 * 3. Performance Tracking:
 *    - Monitor regional adoption rates
 *    - Track customer satisfaction by region
 *    - Identify high-potential expansion areas
 *    - Correlate with sales and distribution data
 * 
 * 4. Marketing Applications:
 *    - Use for regional success stories
 *    - Target marketing campaigns by region
 *    - Identify testimonial opportunities
 *    - Support sales team with local data
 */