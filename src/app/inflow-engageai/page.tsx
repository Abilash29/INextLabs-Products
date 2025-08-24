import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { PieChart, BarChart3, TrendingUp, Eye, CheckCircle, ArrowRight, Palette, Share2 } from 'lucide-react';

export default function EngageAIPage() {
  const features = [
    {
      title: 'Workflows That Drive Real Results',
      description: 'Guide prospects, resolve tickets fast, and turn browsers into buyers with dynamic, goal-driven workflows.',
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: 'Enterprise-Grade Security & Compliance',
      description: 'End-to-end encryption, PII masking, and governance controls keep your data safe.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Boost Productivity with AI + Human Collaboration',
      description: 'AI suggestions, real-time translation, and seamless handoffs supercharge your support team.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Omnichannel Excellence on 45+ Platforms',
      description: 'One AI, every channel—web, mobile, voice, WhatsApp, IVR email, SMS, and more. Consistent experiences, everywhere.',
      icon: <Share2 className="w-6 h-6" />
    }
  ];

  const capabilities = [
    'Drag-and-drop visualization builder',
    '100+ chart types and templates',
    'Real-time data integration',
    'Interactive filtering and drilling',
    'Mobile-responsive designs',
    'Advanced animation and transitions'
  ];

  const chartTypes = [
    { name: 'Bar Charts', icon: <BarChart3 className="w-5 h-5" />, color: 'bg-blue-500' },
    { name: 'Pie Charts', icon: <PieChart className="w-5 h-5" />, color: 'bg-green-500' },
    { name: 'Line Charts', icon: <TrendingUp className="w-5 h-5" />, color: 'bg-purple-500' },
    { name: 'Scatter Plots', icon: <Eye className="w-5 h-5" />, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <PieChart className="w-4 h-4 mr-2" />
                Data Visualization Platform
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The AI Revolution That's Making Chatbots Obsolete
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Meet the next generation of AI agents that don't just respond, but sell, solve, and scale your success 24/7. Turn every conversation into results with purpose-built agents that convert, resolve, and transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105">
                  Start Free Trial
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-lg font-medium border-2 border-gray-300 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400">
                  Watch Demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <PieChart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Interactive Dashboard</h3>
                    <p className="text-gray-600">Real-time data visualization</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm opacity-90">Engagement Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Real-time Updates</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm opacity-90">Chart Types</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-4 text-white">
                    <div className="text-2xl font-bold">5x</div>
                    <div className="text-sm opacity-90">Faster Creation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">100+ Chart Types Available</h2>
            <p className="text-xl text-gray-600">Choose from our extensive library of visualization options</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {chartTypes.map((chart, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className={`w-12 h-12 ${chart.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  {chart.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{chart.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Visualization Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create stunning, interactive data visualizations that engage your audience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Visualization Engine
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our platform provides everything you need to create professional, engaging data visualizations.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Visualization Benefits</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Better Understanding</h4>
                    <p className="text-green-100 text-sm">Visual data is easier to comprehend</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Increased Engagement</h4>
                    <p className="text-green-100 text-sm">Interactive charts boost user engagement</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Professional Design</h4>
                    <p className="text-green-100 text-sm">Beautiful, customizable templates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data into Visual Stories?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Create engaging, interactive visualizations that captivate your audience and drive insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
