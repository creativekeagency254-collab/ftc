import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { products } from '../../data/products';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onProductSelect?: (productId: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  onSearchChange, 
  onProductSelect 
}) => {
  const [suggestions, setSuggestions] = useState<typeof products>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.advantages.some(advantage => 
          advantage.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ).slice(0, 5);
      
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (product: typeof products[0]) => {
    onSearchChange(product.name);
    setShowSuggestions(false);
    onProductSelect?.(product.id);
  };

  return (
    <div ref={searchRef} className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search biopesticides and organic products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => searchTerm.length > 0 && setShowSuggestions(true)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((product) => (
            <div
              key={product.id}
              className="search-suggestion-item"
              onClick={() => handleSuggestionClick(product)}
            >
              <div className="font-medium text-gray-800">{product.name}</div>
              <div className="text-sm text-gray-600 truncate">{product.summary}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
