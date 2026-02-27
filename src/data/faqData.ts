/**
 * FARMTRACK BIOSCIENCES FAQ DATA STRUCTURE
 * ========================================
 * 
 * This file contains frequently asked questions organized by category.
 * The FAQ system helps customers find answers quickly and reduces support load.
 * 
 * STRUCTURE OVERVIEW:
 * - FAQItem: Interface defining the structure of each FAQ item
 * - faqItems: Array containing all FAQ entries
 * 
 * CATEGORIES:
 * 1. products: Questions about biopesticides and organic solutions
 * 2. equipment: Questions about traps, accessories, and monitoring tools
 * 3. ordering: Questions about purchasing, payment, and delivery
 * 4. support: Questions about technical assistance and customer service
 * 
 * FAQ ITEM FIELDS:
 * - id: Unique identifier for each FAQ
 * - question: The customer's question
 * - answer: Detailed response providing helpful information
 * - category: Classification for filtering and organization
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'products' | 'equipment' | 'ordering' | 'support';
}

export const faqItems: FAQItem[] = [
  // ========================================
  // PRODUCTS CATEGORY
  // ========================================
  // Questions about biopesticides, organic solutions, and product safety
  
  {
    id: 'products-1',
    question: 'Are FarmTrack products safe for organic farming?',
    answer: ' We offer integrated pest management solutions that minimize synthetic chemical use while maintaining effectiveness.',
    category: 'products'
  },
  {
    id: 'products-2',
    question: 'How long do your products last after application?',
    answer: 'The effective duration varies by product. Our pest control solutions  typically remain active for 2-3 months. For specific products, please refer to the application instructions on the packaging or product documentation.',
    category: 'products'
  },
  {
    id: 'products-3',
    question: 'Can I mix different FarmTrack products together?',
    answer: 'Some of our products are designed to work synergistically and can be tank-mixed. However, not all combinations are recommended. We provide a compatibility chart with each product and in our catalog. For specific mixing questions, please contact our technical support team for guidance to ensure product effectiveness and prevent potential negative interactions.',
    category: 'products'
  },
  {
    id: 'products-4',
    question: 'What is the shelf life of unopened products?',
    answer: 'Most FarmTrack biochemical products have a shelf life of 2-3 years when stored according to instructions (typically in a cool, dry place away from direct sunlight). The manufacturing date and expiration date are clearly printed on each package. We recommend using products within their shelf life for maximum effectiveness.',
    category: 'products'
  },
  {
    id: 'products-5',
    question: 'Are your products safe for beneficial insects like bees?',
    answer: 'We design our products with ecological balance in mind. Many of our solutions, particularly the ORGANICARE line, are formulated to target specific pests while minimizing impact on beneficial insects. Always follow application timing recommendations to avoid pollinator exposure. For sensitive crops or areas with active pollinators, we can recommend specific products with the lowest impact on beneficial insects.',
    category: 'products'
  },
  
  // ========================================
  // EQUIPMENT CATEGORY
  // ========================================
  // Questions about traps, accessories, and monitoring equipment
  
  {
    id: 'equipment-4',
    question: 'How often should PRO-STICKY TRAPs be replaced?',
    answer: 'PRO-STICKY TRAPs should generally be replaced every 2-3 months for monitoring purposes, or when approximately 60-70% of the surface is covered with insects. In high-pest pressure situations, more frequent replacement may be necessary. Our UV-resistant formulation extends field life significantly compared to standard sticky traps. We recommend regular inspection and replacement schedules based on your specific pest monitoring program.',
    category: 'equipment'
  },
  
  // ========================================
  // ORDERING CATEGORY
  // ========================================
  // Questions about purchasing, payment methods, and delivery
  
  {
    id: 'ordering-1',
    question: 'What are your minimum order quantities?',
    answer: 'There is  no minimum oder quantity for any case.However for very large commercial operations, we offer customized bulk pricing—please contact our sales team to discuss your specific requirements.',
    category: 'ordering'
  },
  {
    id: 'ordering-2',
    question: 'Do you offer discounts for bulk orders?',
    answer: 'Yes, we provide tiered pricing based on order volume. Agricultural cooperatives and registered farmer groups may qualify for additional program discounts. Please contact our sales department or your local representative for a detailed quote on bulk orders.',
    category: 'ordering'
  },
  {
    id: 'ordering-3',
    question: 'What payment methods do you accept?',
    answer: 'We accept multiple payment methods including M-Pesa, bank transfers and cheques. All pricing and payments are processed in Kenyan Shillings (KSH) OR (USD).',
    category: 'ordering'
  },
  {
    id: 'ordering-4',
    question: 'How long does delivery take?',
    answer: 'Standard delivery procedures are same day for orders within nairobi and its environs , and one business day for rural areas across Kenya. For other  African countries, delivery typically takes 7-14 business days . Express delivery options are available for an additional fee. During peak agricultural seasons, please allow extra time for delivery. You can track your order status through our website or by contacting customer service.',
    category: 'ordering'
  },
  
  // ========================================
  // SUPPORT CATEGORY
  // ========================================
  // Questions about technical assistance, customer service, and training
  
  {
    id: 'support-1',
    question: 'Do you provide technical support for product application?',
    answer: 'Yes, we offer comprehensive technical support through multiple channels. Our team of agricultural specialists is available via phone and email Monday t0 Friday, 8:00 AM to 5:00 PM EAT. For larger operations, we can arrange on-site technical visits for product demonstrations and application training. We also provide detailed application guides, instructional videos, and regular farmer workshops throughout the growing season.',
    category: 'support'
  },
  {
    id: 'support-2',
    question: 'How can I determine which products are right for my farm?',
    answer: 'We recommend starting with our Farm Assessment service, which evaluates your specific crops,  pest pressures, and goals. Based on this assessment, our agronomists will recommend a customized product program. This service is free for any orders bought. You can request an assessment through our website, mobile app, or by calling our customer service line.',
    category: 'support'
  },
  {
    id: 'support-3',
    question: 'What if a product doesn\'t work as expected?',
    answer: 'Customer satisfaction is our priority. If you experience issues with any product, please contact our support team immediately. We\'ll work with you to determine if adjustments to application methods might improve results, or if there might be other factors affecting performance.',
    category: 'support'
  },
  {
    id: 'support-4',
    question: 'Do you offer training on using your equipment?',
    answer: 'Yes, we provide multiple training options for our equipment products. These include detailed instruction manuals, online video tutorials, and regional training workshops. For commercial customers purchasing multiple units, we offer on-site training sessions for your team. Our mobile app also includes step-by-step guides and troubleshooting assistance for all our equipment. Training resources are available in English and Swahili.',
    category: 'support'
  },
  {
    id: 'support-5',
    question: 'Where can I find safety data sheets for your products?',
    answer: 'Safety Data Sheets (SDS) for all our biochemical products are included in product packaging. If you need additional copies, you can request them from our customer service team. We follow international standards for SDS content and update them regularly with the latest safety information and handling recommendations.',
    category: 'support'
  }
];

/**
 * USAGE NOTES:
 * ============
 * 
 * 1. To add a new FAQ:
 *    - Create a new object with unique ID
 *    - Choose appropriate category
 *    - Write clear, helpful answers
 *    - Consider SEO keywords in questions
 * 
 * 2. FAQ Categories:
 *    - products: Product-specific questions
 *    - equipment: Hardware and accessories
 *    - ordering: Sales and delivery process
 *    - support: Technical and customer service
 * 
 * 3. Best Practices:
 *    - Keep answers concise but comprehensive
 *    - Include contact information when appropriate
 *    - Update regularly based on customer feedback
 *    - Use consistent terminology across answers
 * 
 * 4. SEO Considerations:
 *    - Include relevant keywords in questions
 *    - Structure answers for featured snippets
 *    - Address common search queries
 *    - Link to relevant product pages when helpful
 */