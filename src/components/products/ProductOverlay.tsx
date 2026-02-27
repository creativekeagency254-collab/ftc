import React, { useEffect, useState } from 'react';
import { X, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { Product } from './ProductCard';
import OrderForm from './OrderForm';

interface ProductOverlayProps {
  product: Product | null;
  onClose: () => void;
}

const ProductOverlay: React.FC<ProductOverlayProps> = ({ product, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  useEffect(() => {
    if (product) {
      setTimeout(() => {
        setIsActive(true);
      }, 10);
    } else {
      setIsActive(false);
    }
  }, [product]);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleOrderClick = () => {
    setShowOrderForm(true);
  };

  const handleOrderFormClose = () => {
    setShowOrderForm(false);
  };

  if (!product) return null;

  return (
    <>
      <div 
        className={`product-overlay ${isActive ? 'active' : ''}`}
        onClick={handleBackdropClick}
      >
        <div className={`overlay-content max-w-5xl ${isActive ? 'active' : ''}`}>
          <button 
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <X size={24} />
          </button>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5">
              <div className="w-full h-auto rounded-xl overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold mb-4 text-gray-800">Key Advantages</h3>
                <ul className="space-y-3">
                  {product.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-primary mr-2 flex-shrink-0 mt-1" size={18} />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleOrderClick}
                  className="btn btn-primary flex justify-center items-center flex-1"
                >
                  <span>Order Product Now</span>
                  <ArrowRight size={18} className="ml-2" />
                </button>
                
                <a 
                  href="https://lambent-kashata-21b32b.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex justify-center items-center flex-1"
                >
                  <span>Applications</span>
                  <ExternalLink size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showOrderForm && (
        <OrderForm 
          productName={product.name}
          onClose={handleOrderFormClose}
        />
      )}
    </>
  );
};

export default ProductOverlay;