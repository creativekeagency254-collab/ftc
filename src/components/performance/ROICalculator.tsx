import React, { useState, useEffect } from 'react';
import { ChevronsRight } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [landSize, setLandSize] = useState(5);
  const [roi, setRoi] = useState(0);

  useEffect(() => {
    // Basic ROI calculation formula (simplified for demo)
    const baseYield = 1500; // KSH per acre without FarmTrack products
    const improvedYield = 2400; // KSH per acre with FarmTrack products
    const productCost = 200; // KSH per acre
    
    const totalBaseRevenue = baseYield * landSize;
    const totalImprovedRevenue = improvedYield * landSize;
    const totalProductCost = productCost * landSize;
    
    const profitWithout = totalBaseRevenue;
    const profitWith = totalImprovedRevenue - totalProductCost;
    
    const calculatedRoi = profitWith - profitWithout;
    
    setRoi(calculatedRoi);
  }, [landSize]);

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4 text-gray-800">ROI Calculator</h3>
      <p className="text-gray-600 mb-6">
        Estimate your potential return on investment when using FarmTrack products.
      </p>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          Land Size (acres): {landSize}
        </label>
        <input
          type="range"
          min="1"
          max="100"
          value={landSize}
          onChange={(e) => setLandSize(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
      
      <div className="bg-primary bg-opacity-10 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-700">Estimated ROI:</span>
          </div>
          <div className="flex items-center">
            <ChevronsRight className="text-primary mr-2" />
            <span className="text-2xl font-bold text-gray-800">
              {roi.toLocaleString()} KSH
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;