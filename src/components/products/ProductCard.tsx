import React from 'react';

export interface Product {
  id: string;
  name: string;
  summary: string;
  description: string;
  advantages: string[];
  image: string;
  category: 'pest-control' | 'equipment';
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="product-card group"
      onClick={() => onClick(product)}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="w-full h-48 bg-gray-50 rounded-xl overflow-hidden">
          <img 
            src={product.image} 
            alt={`${product.name} organic biopesticide for ${product.summary.toLowerCase()}`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600">{product.summary}</p>
      </div>
    </div>
  );
};

export default ProductCard;