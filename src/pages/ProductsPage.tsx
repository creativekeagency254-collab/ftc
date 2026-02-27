import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import ProductCard, { Product } from '../components/products/ProductCard';
import ProductOverlay from '../components/products/ProductOverlay';
import SearchBar from '../components/products/SearchBar';
import { products, ProductCategory } from '../data/products';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('fruit-fly-solutions');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories: { id: ProductCategory; name: string }[] = [
    { id: 'fruit-fly-solutions', name: 'Fruit Fly Solutions' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'biopesticide-solutions', name: 'Biopesticide Solutions' },
    { id: 'lepidopteran-solutions', name: 'Lepidopteran / Moth Solutions' },
    { id: 'fungicide-solutions', name: 'Fungicide Solutions' }
  ];

  const filteredProducts = products
    .filter(product => product.subCategory === activeCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseOverlay = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const handleProductSelect = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setActiveCategory(product.subCategory);
      // Scroll to product or highlight it
      setTimeout(() => {
        const productElement = document.getElementById(`product-${productId}`);
        if (productElement) {
          productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <>
      <Helmet>
        <title>Biopesticides & Organic Pest Control Products | FarmTrack BioSciences - Complete Agricultural Solutions</title>
        <meta name="description" content="Explore FarmTrack's comprehensive range of biopesticides, organic pest control solutions, and sustainable agricultural products. BACTROLURE for fruit fly control, TUTALURE for tomato leaf miner, METATRACK PLUS with entomopathogenic fungi, CUELURE for melon fly, FCM LURE for false codling moth, FAW LURE for fall armyworm, organic fungicides, pheromone traps, sticky cards, and monitoring equipment. Eco-friendly alternatives to chemical pesticides for sustainable agriculture in Kenya and East Africa." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Comprehensive Biopesticides & Organic Pest Control Products | FarmTrack BioSciences" />
        <meta property="og:description" content="Discover our complete range of biopesticides, organic solutions, and sustainable agricultural products. From BACTROLURE to METATRACK PLUS - eco-friendly alternatives for modern farming." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://farmtrack.com/products" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://farmtrack.com/products" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "FarmTrack BioSciences Product Catalog",
            "description": "Comprehensive collection of biopesticides, organic pest control solutions, and sustainable agricultural products",
            "url": "https://farmtrack.com/products",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": products.length,
              "itemListElement": products.map((product, index) => ({
                "@type": "Product",
                "position": index + 1,
                "name": product.name,
                "description": product.summary,
                "category": product.subCategory,
                "brand": {
                  "@type": "Brand",
                  "name": "FarmTrack BioSciences"
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-secondary min-h-screen">
        <div className="section-padding">
          <div className="container mx-auto">
            <SectionTitle 
              title="Our Biopesticides & Organic Solutions" 
              subtitle="Innovative biological pest control products for sustainable agriculture" 
            />

            {/* Search Bar */}
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onProductSelect={handleProductSelect}
            />

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} id={`product-${product.id}`}>
                  <ProductCard 
                    product={product} 
                    onClick={handleProductClick} 
                  />
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredProducts.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No biopesticides found matching "{searchTerm}"</p>
                <p className="text-gray-500 mt-2">Try adjusting your search terms or browse different categories</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Overlay */}
      <ProductOverlay 
        product={selectedProduct} 
        onClose={handleCloseOverlay} 
      />
</>
  );
};

export default ProductsPage;