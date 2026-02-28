import React, { useState } from 'react';
import { X, ArrowRight, Leaf, TrendingUp, Award, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

interface FeatureTile {
  id: string;
  title: string;
  subheading1: string;
  subheading2: string;
  description: string;
  image1: string;
  caption1: string;
  expandedContent: string;
  benefits: string[];
  statistics: { label: string; value: string }[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  keywords: string[];
  backgroundImage: string;
}

const FeatureTiles: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureTile | null>(null);

  const features: FeatureTile[] = [
    {
      id: 'innovation',
      title: 'Revolutionary Biopesticide Innovation',
      subheading1: 'Cutting-Edge Biological Solutions',
      subheading2: 'Advanced Biotechnology Research',
      description:
        'Our groundbreaking pest and disease control technology replaces harmful synthetic chemicals with natural, bio-based alternatives.',
      image1: 'https://i.postimg.cc/66GR2zZd/assets-task-01jyp7agvsfxds4grdf4vms3q2-1750945425-img-0.webp',
      caption1: 'Advanced Biotechnology Research Laboratory',
      backgroundImage: 'https://i.postimg.cc/DZmfynqZ/BACTTOLURE-AI.png',
      expandedContent:
        'FarmTrack BioSciences leads the agricultural revolution through innovative pest and disease control that completely replaces harmful synthetic chemicals with natural, bio-based alternatives.',
      benefits: [
        'Zero chemical residue on crops ensuring food safety',
        'Preserves beneficial insects and pollinators like bees',
        'Prevents pest resistance development through biological diversity',
        'Improves soil health and microbial ecosystem balance',
      ],
      statistics: [
        { label: 'Chemical Reduction', value: '95%' },
        { label: 'Beneficial Insect Safety', value: '100%' },
        { label: 'Organic Certification', value: 'Certified' },
        { label: 'Research Investment', value: '$2M+' },
      ],
      icon: Leaf,
      keywords: ['biopesticides', 'organic pest control', 'biological control', 'sustainable agriculture'],
    },
    {
      id: 'yield-increase',
      title: 'Dramatic Loss Reduction & Yield Maximization',
      subheading1: 'Maximize Agricultural Production',
      subheading2: 'Optimize Crop Performance',
      description:
        'FarmTrack BioSciences reduces agricultural produce loss and dramatically boosts yields by up to 80% through our advanced bioscience solutions.',
      image1: 'https://i.postimg.cc/15W2GPH1/Untitled-design-66.png',
      caption1: 'Documented Yield Improvement Results',
      backgroundImage: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      expandedContent:
        'FarmTrack BioSciences delivers unprecedented agricultural results by reducing produce loss and boosting yields by up to 80% through our comprehensive suite of advanced bioscience solutions.',
      benefits: [
        'Increases crop yields by 60-80% compared to conventional methods',
        'Reduces post-harvest losses through improved crop quality',
        'Enhances plant immunity and natural disease resistance',
        'Improves fruit size, color, and nutritional content',
      ],
      statistics: [
        { label: 'Average Yield Increase', value: '80%' },
        { label: 'Loss Reduction', value: '75%' },
        { label: 'Quality Improvement', value: '90%' },
        { label: 'Farmer Satisfaction', value: '98%' },
      ],
      icon: TrendingUp,
      keywords: ['yield increase', 'crop productivity', 'agricultural efficiency', 'harvest optimization'],
    },
    {
      id: 'market-compliance',
      title: 'Global Market Compliance & Quality Assurance',
      subheading1: 'International Standards Excellence',
      subheading2: 'Premium Quality Certification',
      description:
        'FarmTrack BioSciences ensures all farm produce meets and exceeds international and local market standards through our natural, residue-free bioscience solutions.',
      image1: 'https://i.postimg.cc/4d37P65G/20250901-1311-Avocado-Harvest-Smiles-remix-01k42c0f7pfshrrn0ey5hre4an-1.png',
      caption1: 'International Market Compliance Standards',
      backgroundImage: 'https://i.postimg.cc/4d37P65G/20250901-1311-Avocado-Harvest-Smiles-remix-01k42c0f7pfshrrn0ey5hre4an-1.png',
      expandedContent:
        'FarmTrack BioSciences guarantees that all farm produce meets and exceeds the most stringent international and local market standards through our comprehensive natural, residue-free bioscience solutions.',
      benefits: [
        'Meets EU, US, and Asian export quality standards',
        'Zero chemical residue detection in laboratory tests',
        'Organic certification eligibility and support',
        'Premium pricing opportunities in global markets',
      ],
      statistics: [
        { label: 'Export Approval Rate', value: '99.8%' },
        { label: 'Quality Standards Met', value: '100%' },
        { label: 'Premium Price Increase', value: '35%' },
        { label: 'Market Access', value: '50+ Countries' },
      ],
      icon: Award,
      keywords: ['export quality', 'market compliance', 'food safety', 'organic certification'],
    },
    {
      id: 'one-health',
      title: 'One Health+ Environmental Stewardship',
      subheading1: 'Comprehensive Environmental Safety',
      subheading2: 'Sustainable Future Agriculture',
      description:
        "FarmTrack BioSciences' revolutionary bioscience solutions promote comprehensive user health, environmental safety, and ecological balance.",
      image1: 'https://i.postimg.cc/jS1FwXhH/Untitled-design-70.png',
      caption1: 'Environmental Protection and Conservation',
      backgroundImage: 'https://i.postimg.cc/3NvKm1fQ/ONE-HELTH.png',
      expandedContent:
        "FarmTrack BioSciences' revolutionary bioscience solutions promote comprehensive user health, environmental safety, and ecological balance through precision biological control.",
      benefits: [
        'Protects beneficial insects including bees and butterflies',
        'Preserves soil microbiome diversity and health',
        'Maintains groundwater and surface water quality',
        'Supports biodiversity conservation in farming areas',
      ],
      statistics: [
        { label: 'Pollinator Safety', value: '100%' },
        { label: 'Soil Health Improvement', value: '85%' },
        { label: 'Water Quality Protection', value: '100%' },
        { label: 'Ecosystem Balance', value: '95%' },
      ],
      icon: Shield,
      keywords: ['environmental safety', 'one health', 'pollinator protection', 'soil health'],
    },
  ];

  return (
    <>
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle
            title="More About Us"
            subtitle="Practical innovation for real farm outcomes, stronger markets, and long-term sustainability."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.id}
                  className="group relative h-[380px] overflow-hidden rounded-2xl border border-slate-200 shadow-md"
                >
                  <img
                    src={feature.backgroundImage}
                    alt={feature.caption1}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-xl border border-white/20 bg-black/15 p-4 transition-all duration-500 group-hover:bg-black/45 group-hover:backdrop-blur-[2px]">
                      <div className="mb-2 flex items-center gap-2 text-white">
                        <Icon size={18} className="text-primary" />
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                      </div>
                      <p className="text-sm text-slate-100">{feature.subheading1}</p>

                      <div className="mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-40 group-hover:opacity-100">
                        <p className="mb-3 text-sm leading-6 text-slate-100">
                          {feature.description}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSelectedFeature(feature)}
                          className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
                        >
                          Learn More
                          <ArrowRight size={15} className="ml-1.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#030303] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl shadow-black/40">
              <img
                src="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg"
                alt="Transforming agriculture in East Africa"
                className="h-full w-full object-cover saturate-110"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Regional Impact</p>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Transforming Agriculture Across East Africa</h2>
              <p className="mb-6 text-slate-300">
                Through product innovation, farmer support, and sustainable pest management, FarmTrack helps growers produce cleaner, stronger, and market-ready harvests.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">200k+</p>
                  <p className="text-sm text-slate-300">Farmers reached</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">8</p>
                  <p className="text-sm text-slate-300">Countries served</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">37%</p>
                  <p className="text-sm text-slate-300">Average yield increase</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-bold text-white">52%</p>
                  <p className="text-sm text-slate-300">Profit improvement</p>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-slate-200">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  Crop-specific solutions for fruit, vegetable, and cereal systems
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  Improved quality for domestic and export-oriented markets
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-300" />
                  Reduced dependence on harsh synthetic chemical programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <selectedFeature.icon size={24} className="text-primary" />
                <h2 className="text-2xl font-bold text-slate-800">{selectedFeature.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                className="rounded-md border border-slate-300 p-2 text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <img
                src={selectedFeature.image1}
                alt={selectedFeature.caption1}
                className="h-56 w-full rounded-xl border border-slate-200 bg-slate-50 object-contain p-2"
              />
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-600">{selectedFeature.expandedContent}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-bold text-slate-800">Key Benefits</h3>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {selectedFeature.benefits.map((benefit, idx) => (
                  <p key={idx} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                    {benefit}
                  </p>
                ))}
              </div>
            </div>

            <div className="mb-7 grid grid-cols-2 gap-3 md:grid-cols-4">
              {selectedFeature.statistics.map((stat, idx) => (
                <div key={idx} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-center">
                  <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/products"
              onClick={() => {
                setSelectedFeature(null);
                window.scrollTo(0, 0);
              }}
              className="btn btn-primary"
            >
              Go to Products
              <ArrowRight size={16} className="ml-2 inline" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureTiles;
