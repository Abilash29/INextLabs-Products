import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Sparkles, BarChart3, PieChart, MessageSquare, ArrowRight, CheckCircle, Users, Zap } from 'lucide-react';

export default function Home() {
  const products = [
    {
      title: 'inFlow DocsAI',
      description: 'Offload Paperwork to AI Agents with inFlow DocsAI',
      href: '/inflow-docsai',
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        '10X Faster Document Processing',
        'Slash Operating Costs by 70%',
        '99.9% Accuracy Guaranteed',
        'Scale Without Limits'
      ],
      gradient: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'inFlow InsightsAI',
      description: 'Stop Drowning in Data.Start Dominating with Intelligence.',
      href: '/inflow-insightsai',
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        'Future-Scenario Modeling',
        'Predictive analytics',
        'Real-Time Intelligence Dashboard',
        'Natural Language Queries'
      ],
      gradient: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      title: 'inFlow EngageAI',
      description: 'The AI Revolution That Making Chatbots Obsolete',
      href: '/inflow-engageai',
      icon: <PieChart className="w-6 h-6" />,
      features: [
        'Workflows That Drive Real Results',
        'Enterprise-Grade Security & Compliance',
        'Boost Productivity with AI + Human Collaboration',
        'Omnichannel Excellence on 45+ Platforms'
      ],
      gradient: 'bg-gradient-to-br from-green-500 to-emerald-500'
    },
    {
      title: 'inFlow AssistAI',
      description: 'Elevate customer interactions with AI-powered chatbots and intelligent support systems.',
      href: '/inflow-assistai',
      icon: <MessageSquare className="w-6 h-6" />,
      features: [
        '24/7 customer support',
        'Natural language processing',
        'Multi-language support',
        'Seamless integration'
      ],
      gradient: 'bg-gradient-to-br from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Active Users', value: '10K+', icon: Users },
    { label: 'Documents Processed', value: '1M+', icon: Zap },
    { label: 'Customer Satisfaction', value: '98%', icon: CheckCircle },
    { label: 'Response Time', value: '<2s', icon: Zap }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building{' '}
              <span className="text-orange-500">Agentic AI</span>
              {' '}for Enterprise Excellence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Empower your business with state-of-the-art Generative AI solutions designed to enhance efficiency, accuracy, and growth. From telco to FSI, healthcare to government, we have delivered transformative AI solutions that drive real-world impact and value across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105">
                Start Your Free Trial
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-medium border-2 border-gray-300 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">*No credit card required</p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Feature Card Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Quotation Marks */}
            <div className="absolute top-0 left-0 w-32 h-32 text-pink-200 opacity-30 -translate-x-8 -translate-y-8">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40c0-11 9-20 20-20s20 9 20 20c0 11-9 20-20 20s-20-9-20-20zm40 0c0-11 9-20 20-20s20 9 20 20c0 11-9 20-20 20s-20-9-20-20z"/>
              </svg>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
              {/* Left Section - Text Content */}
              <div className="lg:col-span-2 flex items-center">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Go beyond chatbots, IVR, and RPA to transform your business with advanced AI solutions encompassing Gen-AI powered data analytics, document intelligence, and process optimization.
                </p>
              </div>
              
              {/* Right Section - Illustration */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <img 
                    src="/gen-ai.png" 
                    alt="Generative AI Illustration" 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Product Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of AI-powered solutions designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose iNextLabs?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                    <p className="text-gray-600">Bank-level encryption and compliance with industry standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast Performance</h3>
                    <p className="text-gray-600">Optimized AI models for real-time processing and responses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support and customer service.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Join thousands of businesses already transforming their operations with iNextLabs AI solutions.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven solutions. Start your free trial today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
