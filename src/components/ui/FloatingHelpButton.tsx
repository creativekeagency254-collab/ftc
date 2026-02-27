import React, { useState } from 'react';
import { HelpCircle, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingHelpButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const helpOptions = [
    {
      label: 'Product Information',
      action: () => window.open('tel:+254727941659', '_self'),
      icon: Phone
    },
    {
      label: 'Ordering & Shipping',
      path: '/faq',
      icon: null
    },
    {
      label: 'Technical Support',
      action: () => window.open('https://wa.me/254711495522', '_blank'),
      icon: null
    },
    {
      label: 'Contact Sales Team',
      action: () => window.open('tel:+254722863252', '_self'),
      icon: Phone
    }
  ];

  return (
    <>
      <button 
        className="help-button fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-105 transition"
        onClick={() => setIsModalOpen(true)}
        aria-label="Get help"
      >
        <HelpCircle size={24} />
      </button>

      {/* Help Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-scaleUp">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Need Help?</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <p>How can we assist you today?</p>
              <div className="space-y-2">
                {helpOptions.map((option, index) => (
                  option.path ? (
                    <Link
                      key={index}
                      to={option.path}
                      className="btn btn-outline w-full text-left flex justify-between items-center hover:bg-gray-100 transition"
                      onClick={() => setIsModalOpen(false)}
                    >
                      <span>{option.label}</span>
                      <span>→</span>
                    </Link>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        option.action?.();
                        setIsModalOpen(false);
                      }}
                      className="btn btn-outline w-full text-left flex justify-between items-center hover:bg-gray-100 transition"
                    >
                      <span>{option.label}</span>
                      <span className="flex items-center">
                        {option.icon && <option.icon size={16} className="ml-2" />}
                        →
                      </span>
                    </button>
                  )
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Or email us directly at <a href="mailto:farmtrack.consulting@gmail.com" className="text-primary">farmtrack.consulting@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingHelpButton;