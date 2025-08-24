import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BarChart3, TrendingUp, Database, Zap, CheckCircle, PieChart, LineChart } from 'lucide-react';

export default function InsightsAIPage() {
  const features = [
    {
      title: 'Future-Scenario Modeling',
      description: 'Run unlimited "what-if" scenarios powered by AI. Test strategies, predict outcomes, and optimize decisions before risking real resources.',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Predict outcomes with 94% accuracy using machine learning that analyzes trends, patterns, and anomalies in your data.',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Real-Time Intelligence Dashboard',
      description: 'Access critical business metrics instantly through personalized, mobile-friendly dashboards and real-time alerts.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Natural Language Queries',
      description: 'Ask complex data questions in plain English and get instant, accurate answers—no code or training needed.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const capabilities = [
    'Advanced statistical analysis and modeling',
    'Natural language query processing',
    'Automated data quality assessment',
    'Interactive data exploration tools',
    'Custom report generation and scheduling',
    'Integration with popular BI tools'
  ];

  const metrics = [
    { label: 'Data Sources Supported', value: '50+', icon: Database },
    { label: 'Analysis Speed', value: '10x Faster', icon: Zap },
    { label: 'Accuracy Rate', value: '99.9%', icon: CheckCircle },
    { label: 'Real-time Updates', value: '<1s', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                Comprehensive Data Analysis
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stop Drowning in Data.Start Dominating with Intelligence.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              InFlow InsightsAI transforms scattered data into clear predictions and actionable insights that drive real growth. While traditional tools show what&apos;s next and tells you exactly how to act.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Analytics Dashboard</h3>
                    <p className="text-gray-600">Real-time insights and metrics</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Revenue Growth</span>
                    <span className="text-sm font-semibold text-green-600">+24.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Customer Satisfaction</span>
                    <span className="text-sm font-semibold text-blue-600">94.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Conversion Rate</span>
                    <span className="text-sm font-semibold text-purple-600">+12.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <metric.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
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
            Let Your Business Move at The Speed of Insight
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your data into actionable insights and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
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
                Powerful Analytics Engine
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our AI-powered analytics platform provides comprehensive insights across all your data sources.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">AI-Powered Insights</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Predictive Analytics</h4>
                    <p className="text-purple-100 text-sm">Forecast trends and patterns</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Visualization</h4>
                    <p className="text-purple-100 text-sm">Interactive charts and graphs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Real-time Monitoring</h4>
                    <p className="text-purple-100 text-sm">Live data tracking and alerts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data&apos;s Potential?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Transform your business with AI-powered insights. Start analyzing your data today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
