import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import PerformanceChart from '../components/performance/PerformanceChart';
import ROICalculator from '../components/performance/ROICalculator';
import { 
  yieldComparisonData, 
  profitTrendData, 
  cropDistributionData,
  impactMatrixData,
  regionalStatsData,
  seasonalPerformanceData,
  productEffectivenessData,
  sustainabilityMetricsData,
  farmSizeComparisonData,
  returnOnInvestmentData
} from '../data/performanceData';

const PerformancePage: React.FC = () => {
  const chartColors = ['#25D366', '#000000', '#1a1a1a', '#333333'];

  return (
    <>
      <Helmet>
        <title>Performance Analytics | FarmTrack BioSciences - Data-Driven Agricultural Results & ROI</title>
        <meta name="description" content="View comprehensive performance metrics and ROI data for FarmTrack biopesticides and organic agricultural solutions. Analyze yield improvements, profit trends, cost-benefit analysis, sustainability metrics, regional performance, seasonal variations, product effectiveness, and farm productivity data. Data-driven insights showing 37% average yield increases, 52% profit improvements, 95% chemical reduction, and measurable environmental benefits across Kenya and East Africa." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Performance Analytics & ROI Data | FarmTrack BioSciences" />
        <meta property="og:description" content="Comprehensive performance metrics showing 37% yield increases, 52% profit improvements, and measurable environmental benefits from our biopesticides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://farmtrack.com/performance" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://farmtrack.com/performance" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "FarmTrack BioSciences Agricultural Performance Data",
            "description": "Comprehensive performance metrics and analytics for biopesticides and organic agricultural solutions",
            "url": "https://farmtrack.com/performance",
            "creator": {
              "@type": "Organization",
              "name": "FarmTrack BioSciences"
            },
            "keywords": [
              "agricultural performance",
              "yield improvement",
              "ROI analysis",
              "sustainability metrics",
              "farm productivity"
            ]
          })}
        </script>
      </Helmet>

      <div className="pt-20 bg-secondary bg-opacity-70 min-h-screen">
        <div className="section-padding">
          <div className="container mx-auto">
            <SectionTitle 
              title="Performance Analysis" 
              subtitle="Data-driven insights into how our solutions improve agricultural outcomes" 
            />

            <div className="mb-12">
              <ROICalculator />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <PerformanceChart
                type="bar"
                data={yieldComparisonData}
                title="Yield Improvement (%)"
                description="Average yield increase by crop type when using FarmTrack products"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="line"
                data={profitTrendData}
                title="Profit Trend (KSH '000)"
                description="Average profit increase for farmers over 5 years"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="pie"
                data={cropDistributionData}
                title="Crop Distribution"
                description="Breakdown of crop types using FarmTrack solutions"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="bar"
                data={impactMatrixData}
                title="Impact Matrix (%)"
                description="Key performance indicators showing impact across multiple dimensions"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="bar"
                data={regionalStatsData}
                title="Regional Performance (%)"
                description="Effectiveness of FarmTrack products across different regions of Kenya"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="line"
                data={seasonalPerformanceData}
                title="Seasonal Performance (%)"
                description="Monthly performance variations throughout the year"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="bar"
                data={productEffectivenessData}
                title="Product Effectiveness (%)"
                description="Comparative effectiveness of our top products"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="area"
                data={sustainabilityMetricsData}
                title="Sustainability Improvement (%)"
                description="Environmental sustainability metrics over time"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="bar"
                data={farmSizeComparisonData}
                title="Farm Size Comparison (%)"
                description="Performance across different farm sizes"
                colors={chartColors}
              />
              
              <PerformanceChart
                type="line"
                data={returnOnInvestmentData}
                title="Return on Investment Timeline"
                description="How quickly farmers see returns on their investment"
                colors={chartColors}
              />
            </div>

            <div className="bg-black rounded-2xl overflow-hidden text-white">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 title-animation">
                    The FarmTrack Difference
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Our solutions don't just promise results - they deliver them consistently. The data speaks for itself: FarmTrack products provide measurable improvements in yield, profit, and sustainability across all major agricultural sectors in Kenya.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary">37%</p>
                      <p className="text-sm text-gray-400">Average Yield Increase</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary">45%</p>
                      <p className="text-sm text-gray-400">Pest Reduction</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary">28%</p>
                      <p className="text-sm text-gray-400">Cost Savings</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-primary">52%</p>
                      <p className="text-sm text-gray-400">Profit Increase</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg" 
                    alt="Thriving farm" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  );
};

export default PerformancePage;