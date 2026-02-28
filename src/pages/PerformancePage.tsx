import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, Sprout, Coins, TrendingUp } from 'lucide-react';
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
  returnOnInvestmentData,
} from '../data/performanceData';

const PerformancePage: React.FC = () => {
  const chartColors = ['#2f855a', '#276749', '#1f2937', '#4b5563'];
  const performanceHighlights = [
    { icon: Sprout, value: '37%', label: 'Average Yield Increase', progress: 'w-[37%]' },
    { icon: BarChart3, value: '45%', label: 'Pest Reduction', progress: 'w-[45%]' },
    { icon: Coins, value: '28%', label: 'Cost Savings', progress: 'w-[28%]' },
    { icon: TrendingUp, value: '52%', label: 'Profit Increase', progress: 'w-[52%]' },
  ];

  const chartConfigs = [
    {
      type: 'bar' as const,
      data: yieldComparisonData,
      title: 'Yield Improvement (%)',
      description: 'Average yield increase by crop type when using FarmTrack products.',
    },
    {
      type: 'line' as const,
      data: profitTrendData,
      title: "Profit Trend (KSH '000)",
      description: 'Average profit increase for farmers over 5 years.',
    },
    {
      type: 'pie' as const,
      data: cropDistributionData,
      title: 'Crop Distribution',
      description: 'Breakdown of crop types using FarmTrack solutions.',
    },
    {
      type: 'bar' as const,
      data: impactMatrixData,
      title: 'Impact Matrix (%)',
      description: 'Key performance indicators showing impact across multiple dimensions.',
    },
    {
      type: 'bar' as const,
      data: regionalStatsData,
      title: 'Regional Performance (%)',
      description: 'Effectiveness of FarmTrack products across regions of Kenya.',
    },
    {
      type: 'line' as const,
      data: seasonalPerformanceData,
      title: 'Seasonal Performance (%)',
      description: 'Monthly performance variations throughout the year.',
    },
    {
      type: 'bar' as const,
      data: productEffectivenessData,
      title: 'Product Effectiveness (%)',
      description: 'Comparative effectiveness of our top products.',
    },
    {
      type: 'area' as const,
      data: sustainabilityMetricsData,
      title: 'Sustainability Improvement (%)',
      description: 'Environmental sustainability metrics over time.',
    },
    {
      type: 'bar' as const,
      data: farmSizeComparisonData,
      title: 'Farm Size Comparison (%)',
      description: 'Performance across different farm sizes.',
    },
    {
      type: 'line' as const,
      data: returnOnInvestmentData,
      title: 'Return on Investment Timeline',
      description: 'How quickly farmers see returns on their investment.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Performance Analytics | FarmTrack BioSciences - Data-Driven Agricultural Results & ROI</title>
        <meta
          name="description"
          content="View comprehensive performance metrics and ROI data for FarmTrack biopesticides and organic agricultural solutions. Analyze yield improvements, profit trends, cost-benefit analysis, sustainability metrics, regional performance, seasonal variations, product effectiveness, and farm productivity data. Data-driven insights showing 37% average yield increases, 52% profit improvements, 95% chemical reduction, and measurable environmental benefits across Kenya and East Africa."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content="Performance Analytics & ROI Data | FarmTrack BioSciences" />
        <meta
          property="og:description"
          content="Comprehensive performance metrics showing 37% yield increases, 52% profit improvements, and measurable environmental benefits from our biopesticides."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://farmtrack.co.ke/performance" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="http://farmtrack.co.ke/performance" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dataset',
            name: 'FarmTrack BioSciences Agricultural Performance Data',
            description: 'Comprehensive performance metrics and analytics for biopesticides and organic agricultural solutions',
            url: 'http://farmtrack.co.ke/performance',
            creator: {
              '@type': 'Organization',
              name: 'FarmTrack BioSciences',
            },
            keywords: ['agricultural performance', 'yield improvement', 'ROI analysis', 'sustainability metrics', 'farm productivity'],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 pt-24">
        <div className="container mx-auto px-4 pb-16">
          <section className="performance-hero overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">Data-Driven Decisions</p>
                <h1 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">Performance Analysis</h1>
                <p className="text-slate-600">
                  Track measurable outcomes from FarmTrack solutions with yield, profitability, and sustainability metrics built for practical farm management.
                </p>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg"
                  alt="Thriving farm"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </section>

          <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceHighlights.map((item, index) => (
              <div
                key={item.label}
                className="performance-stat-card rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2.5">
                  <item.icon size={16} className="text-primary" />
                </div>
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                <p className="mb-3 text-sm text-slate-600">{item.label}</p>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className={`h-full rounded-full bg-primary ${item.progress} performance-progress`} />
                </div>
              </div>
            ))}
          </section>

          <section className="mt-8">
            <ROICalculator />
          </section>

          <section className="mt-12">
            <SectionTitle
              title="Detailed Performance Dashboard"
              subtitle="Comprehensive charts showing trends across regions, seasons, products, and sustainability outcomes."
              centered={false}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {chartConfigs.map((chart, index) => (
                <div key={chart.title} style={{ animationDelay: `${index * 85}ms` }}>
                  <PerformanceChart
                    type={chart.type}
                    data={chart.data}
                    title={chart.title}
                    description={chart.description}
                    colors={chartColors}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PerformancePage;
