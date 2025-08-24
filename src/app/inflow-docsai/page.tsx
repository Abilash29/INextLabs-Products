import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Sparkles, FileText, MessageSquare, Users, CheckCircle } from 'lucide-react';

export default function DocsAIPage() {
  const features = [
    {
      title: '10X Faster Document Processing',
      description: 'Transform weeks of manual data entry into minutes of automated intelligence. Your team can focus on strategic decisions instead of tedious paperwork.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Slash Operating Costs by 70%',
      description: 'Eliminate manual errors, reduce processing time, and cut administrative overhead. See ROI within the first quarter.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: '99.9% Accuracy Guaranteed',
      description: 'Our advanced AI doesn’t just read documents—it understands context, validates data, and flags inconsistencies before they become costly mistakes.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Scale Without Limits',
      description: 'Handle 10 documents or 10,000 documents with the same effortless precision. Your growth doesn’t have to mean more manual work.',
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const benefits = [
    'Reduce document processing time by 80%',
    'Improve accuracy with AI-powered validation',
    'Enhance team collaboration and productivity',
    'Secure document handling with enterprise-grade encryption',
    'Seamless integration with existing workflows',
    '24/7 automated document processing'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Document Processing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Offload Paperwork to AI Agents with inFlow DocsAI
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop drowning in paperwork. inFlow DocsAI instantly transforms invoices, contracts, and policies into competitive advantage while competitors waste hours manually processing
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Document Processing Demo</h3>
                    <p className="text-gray-600">See how DocsAI transforms your workflow</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Processing document...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Extracting key information...</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Generating insights...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Document Workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Why Your Business Needs inFlow DocsAI Today?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Document Workflow
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience unprecedented efficiency and accuracy in document processing with our AI-powered platform.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Processing Speed</span>
                    <span className="font-semibold text-gray-900">80% Faster</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Accuracy Rate</span>
                    <span className="font-semibold text-gray-900">99.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '99.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Cost Reduction</span>
                    <span className="font-semibold text-gray-900">60% Less</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Document Workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using inFlow DocsAI to transform their document processing.
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
