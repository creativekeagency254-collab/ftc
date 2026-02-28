import React, { useMemo, useState } from 'react';
import { TrendingUp } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [landSize, setLandSize] = useState(5);

  const metrics = useMemo(() => {
    const baseYield = 1500; // KSH per acre without FarmTrack products
    const improvedYield = 2400; // KSH per acre with FarmTrack products
    const productCost = 200; // KSH per acre

    const revenueWithout = baseYield * landSize;
    const revenueWith = improvedYield * landSize;
    const totalCost = productCost * landSize;
    const profitWithFarmTrack = revenueWith - totalCost;
    const netGain = profitWithFarmTrack - revenueWithout;

    return {
      revenueWithout,
      profitWithFarmTrack,
      totalCost,
      netGain,
    };
  }, [landSize]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-800">ROI Calculator</h3>
          <p className="text-sm text-slate-600">Estimate your potential return using FarmTrack products.</p>
        </div>
        <div className="rounded-full bg-primary/10 p-2.5 shadow-inner">
          <TrendingUp className="text-primary" size={20} />
        </div>
      </div>

      <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <label htmlFor="land-size" className="mb-2 block text-sm font-semibold text-slate-700">
          Land Size: {landSize} acres
        </label>
        <input
          id="land-size"
          type="range"
          min="1"
          max="100"
          value={landSize}
          onChange={(e) => setLandSize(parseInt(e.target.value, 10))}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-300"
        />
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>1</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Revenue Without</p>
          <p className="mt-1 text-lg font-bold text-slate-900">{metrics.revenueWithout.toLocaleString()} KSH</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Product Cost</p>
          <p className="mt-1 text-lg font-bold text-slate-900">{metrics.totalCost.toLocaleString()} KSH</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Profit With FarmTrack</p>
          <p className="mt-1 text-lg font-bold text-slate-900">{metrics.profitWithFarmTrack.toLocaleString()} KSH</p>
        </div>
        <div className="rounded-xl border border-primary/30 bg-primary/10 p-3 shadow-[0_10px_18px_rgba(22,163,74,0.15)] transition-transform duration-300 hover:-translate-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">Estimated Net Gain</p>
          <p className="mt-1 text-xl font-bold text-primary">{metrics.netGain.toLocaleString()} KSH</p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
