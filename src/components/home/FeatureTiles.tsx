import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ArrowRight, Leaf, TrendingUp, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  icon: React.ComponentType<any>;
  keywords: string[];
  backgroundImage: string;
}

const FeatureTiles: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureTile | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: FeatureTile[] = [
    {
      id: 'innovation',
      title: 'Revolutionary Biopesticide Innovation',
      subheading1: 'Cutting-Edge Biological Solutions',
      subheading2: 'Advanced Biotechnology Research',
      description: 'Our groundbreaking pest and disease control technology replaces harmful synthetic chemicals with natural, bio-based alternatives.',
      image1: 'https://i.postimg.cc/66GR2zZd/assets-task-01jyp7agvsfxds4grdf4vms3q2-1750945425-img-0.webp',
      caption1: 'Advanced Biotechnology Research Laboratory',
      backgroundImage: 'https://i.postimg.cc/DZmfynqZ/BACTTOLURE-AI.png',
      expandedContent: 'FarmTrack BioSciences leads the agricultural revolution through innovative pest and disease control that completely replaces harmful synthetic chemicals with natural, bio-based alternatives.',
      benefits: [
        'Zero chemical residue on crops ensuring food safety',
        'Preserves beneficial insects and pollinators like bees',
        'Prevents pest resistance development through biological diversity',
        'Improves soil health and microbial ecosystem balance'
      ],
      statistics: [
        { label: 'Chemical Reduction', value: '95%' },
        { label: 'Beneficial Insect Safety', value: '100%' },
        { label: 'Organic Certification', value: 'Certified' },
        { label: 'Research Investment', value: '$2M+' }
      ],
      icon: Leaf,
      keywords: ['biopesticides', 'organic pest control', 'biological control', 'sustainable agriculture']
    },
    {
      id: 'yield-increase',
      title: 'Dramatic Loss Reduction & Yield Maximization',
      subheading1: 'Maximize Agricultural Production',
      subheading2: 'Optimize Crop Performance',
      description: 'FarmTrack BioSciences reduces agricultural produce loss and dramatically boosts yields by up to 80% through our advanced bioscience solutions.',
      image1: 'https://i.postimg.cc/15W2GPH1/Untitled-design-66.png',
      caption1: 'Documented Yield Improvement Results',
      backgroundImage: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      expandedContent: 'FarmTrack BioSciences delivers unprecedented agricultural results by reducing produce loss and boosting yields by up to 80% through our comprehensive suite of advanced bioscience solutions.',
      benefits: [
        'Increases crop yields by 60-80% compared to conventional methods',
        'Reduces post-harvest losses through improved crop quality',
        'Enhances plant immunity and natural disease resistance',
        'Improves fruit size, color, and nutritional content'
      ],
      statistics: [
        { label: 'Average Yield Increase', value: '80%' },
        { label: 'Loss Reduction', value: '75%' },
        { label: 'Quality Improvement', value: '90%' },
        { label: 'Farmer Satisfaction', value: '98%' }
      ],
      icon: TrendingUp,
      keywords: ['yield increase', 'crop productivity', 'agricultural efficiency', 'harvest optimization']
    },
    {
      id: 'market-compliance',
      title: 'Global Market Compliance & Quality Assurance',
      subheading1: 'International Standards Excellence',
      subheading2: 'Premium Quality Certification',
      description: 'FarmTrack BioSciences ensures all farm produce meets and exceeds international and local market standards through our natural, residue-free bioscience solutions.',
      image1: 'https://i.postimg.cc/BZx9rdBd/Untitled-design-69.png',
      caption1: 'International Market Compliance Standards',
      backgroundImage: 'https://i.postimg.cc/zBMzy6jk/ALL.png',
      expandedContent: 'FarmTrack BioSciences guarantees that all farm produce meets and exceeds the most stringent international and local market standards through our comprehensive natural, residue-free bioscience solutions.',
      benefits: [
        'Meets EU, US, and Asian export quality standards',
        'Zero chemical residue detection in laboratory tests',
        'Organic certification eligibility and support',
        'Premium pricing opportunities in global markets'
      ],
      statistics: [
        { label: 'Export Approval Rate', value: '99.8%' },
        { label: 'Quality Standards Met', value: '100%' },
        { label: 'Premium Price Increase', value: '35%' },
        { label: 'Market Access', value: '50+ Countries' }
      ],
      icon: Award,
      keywords: ['export quality', 'market compliance', 'food safety', 'organic certification']
    },
    {
      id: 'one-health',
      title: 'One Health+ Environmental Stewardship',
      subheading1: 'Comprehensive Environmental Safety',
      subheading2: 'Sustainable Future Agriculture',
      description: 'FarmTrack BioSciences\' revolutionary bioscience solutions promote comprehensive user health, environmental safety, and ecological balance.',
      image1: 'https://i.postimg.cc/jS1FwXhH/Untitled-design-70.png',
      caption1: 'Environmental Protection and Conservation',
      backgroundImage: 'https://i.postimg.cc/3NvKm1fQ/ONE-HELTH.png',
      expandedContent: 'FarmTrack BioSciences\' revolutionary bioscience solutions promote comprehensive user health, environmental safety, and ecological balance through precision biological control.',
      benefits: [
        'Protects beneficial insects including bees and butterflies',
        'Preserves soil microbiome diversity and health',
        'Maintains groundwater and surface water quality',
        'Supports biodiversity conservation in farming areas'
      ],
      statistics: [
        { label: 'Pollinator Safety', value: '100%' },
        { label: 'Soil Health Improvement', value: '85%' },
        { label: 'Water Quality Protection', value: '100%' },
        { label: 'Ecosystem Balance', value: '95%' }
      ],
      icon: Shield,
      keywords: ['environmental safety', 'one health', 'pollinator protection', 'soil health']
    }
  ];

  return (
    <>
      {/* Moving Title Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAF5EE' }}>
        <div className="container mx-auto max-w-7xl">
          <div className="overflow-hidden mb-12">
            <div className="whitespace-nowrap animate-marquee">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block">
                More About Us • More About Us • More About Us • More About Us • More About Us • More About Us • 
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tiles Grid */}
      <section className="py-20 px-4 bg-gray-50 relative">
        {/* Decorative Left Side Element */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block transition-all duration-500">
          <button
            onClick={() => window.location.href = 'mailto:farmtrack.consulting@gmail.com?subject=Inquiry from FarmTrack Website&body=Hello FarmTrack Team,%0D%0A%0D%0AI would like to learn more about your products and services.'}
            className="w-24 h-24 bg-gradient-to-br from-black/30 via-black/20 to-transparent rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-12 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(255,255,255,0.1) 100%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.2)',
              transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)'
            }}
          >
            {/* Glass reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* 3D highlight */}
            <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
            
            <Leaf size={32} className="text-white drop-shadow-lg group-hover:text-green-200 transition-colors duration-300 relative z-10" />
          </button>
          </div>

        <div className="container mx-auto max-w-6xl">
          <div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <div
                  key={feature.id}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${
                    inView ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    height: '450px'
                  }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${feature.backgroundImage})`
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500" />
                  
                  {/* Content - Hidden by default, appears on hover with longer duration */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-12 group-hover:translate-y-0">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-white/90 mb-6 leading-relaxed text-sm">{feature.description}</p>
                      
                      {/* Statistics Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {feature.statistics.slice(0, 4).map((stat, idx) => (
                          <div key={idx} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg text-center">
                            <div className="text-lg font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-white/80">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFeature(feature);
                          }}
                          className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center text-sm btn-enhanced"
                        >
                          Learn More
                          <ArrowRight size={14} className="ml-2" />
                        </button>
                        
                        <Link
                          to="/products"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.scrollTo(0, 0);
                          }}
                          className="bg-primary/80 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-primary hover:scale-105 transition-all duration-300 flex items-center text-sm btn-enhanced"
                        >
                          Explore Products
                          <ArrowRight size={14} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Minimal Title - Always visible */}
                  <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                      <div className="flex items-center">
                        <IconComponent size={20} className="text-primary mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800 truncate">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creative Section Below */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Transforming Agriculture Across East Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our innovative solutions are creating sustainable farming communities and protecting the environment for future generations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Protecting crops while preserving the environment and beneficial insects.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={40} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Increased Productivity</h3>
              <p className="text-gray-600">Boosting yields and farmer incomes through innovative biological solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={40} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Meeting international standards for export-quality agricultural products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 animate-scaleUp">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <selectedFeature.icon className="text-primary mr-3" size={32} />
                <h2 className="text-3xl font-bold text-gray-800">{selectedFeature.title}</h2>
              </div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <img
                src={selectedFeature.image1}
                alt={selectedFeature.title}
                className="w-full h-48 object-contain bg-gray-50 rounded-lg"
              />
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                <p className="text-gray-600 text-center">Additional visual content and demonstrations</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">{selectedFeature.expandedContent}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedFeature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {selectedFeature.statistics.map((stat, idx) => (
                <div key={idx} className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Link
              to="/products"
              onClick={() => {
                setSelectedFeature(null);
                window.scrollTo(0, 0);
              }}
              className="w-full btn btn-primary flex items-center justify-center"
            >
              Go to Products
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureTiles;