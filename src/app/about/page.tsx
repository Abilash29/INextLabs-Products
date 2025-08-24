import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Target, Lightbulb, Shield } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation First',
      description: 'We believe in pushing the boundaries of what\'s possible with AI technology.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Quality & Security',
      description: 'Enterprise-grade security and reliability are at the core of everything we build.',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const team = [
    {
      name: 'Sachin Hridayraj',
      role: 'Co-Founder'
    },
    {
      name: 'Murugappan',
      role: 'Co-Founder & Head of Engineering'
    },
    {
      name: 'Frank Teh',
      role: 'Advisor, Enterprise Strategy'
    },
    {
      name: 'S.C. Balaji',
      role: 'Head of BFSI Strategy and Operations'
    },
    {
      name: 'Chandrabose Senaisiva',
      role: 'Senior Manager, Implementation & Support'
    },
    {
      name: 'Kavitha G',
      role: 'Senior Manager HR',
      description: 'PhD in AI from MIT, published 50+ papers in top-tier conferences.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>iNextLabs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 mx-auto">
              iNextLabs is a Gen AI-focused company dedicated to making Generative AI accessible and transformative for businesses of all sizes. Founded in 2020 and headquartered in Singapore, with offices in Malaysia, the USA, and India, we offer productized AI solutions tailored to various industries. we specialize in building truly intelligent applications powered by advanced Generative AI. With a proven track record of delivering enterprise-grade solutions for complex and mission-critical use cases, we are trusted by organizations worldwide to drive innovation and efficiency.
            </p>
            <p className="text-xl text-gray-600 mb-8 mx-auto">
              Our expertise spans autonomous agents that are not only highly intelligent but also secure, scalable, and continuously updated with the latest knowledge. From transforming customer engagement and employee experiences to enabling advanced document, media, and data analysis, our solutions are designed to address the most challenging business problems with ease.
            </p>
            <p className="text-xl text-gray-600 mb-8 mx-auto">
             In collaboration with global technology leaders like Microsoft, Salesforce, HPE, Dell, and F5, we help enterprises and small businesses alike democratize AI by bringing accessible, impactful, and future-ready solutions to the forefront.
            </p>
            <p className="text-xl text-gray-600 mb-8 mx-auto">
              iNextLabs, we redefine possibilities with Generative AI, empowering businesses to achieve their goals through truly intelligent, enterprise-grade applications.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission and Vison
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                iNextLabs, our mission is to empower businesses to harness the full potential of AI to redefine customer experiences. We are committed to leveraging advanced AI solutions to optimize marketing, support, and operations, ultimately enhancing engagement, streamlining processes, and driving growth. Through innovative AI tools, we aim to make interactions more meaningful and efficient, boosting ROI, customer satisfaction, and operational effectiveness.
              </p>
              <p className="text-lg text-gray-600">
                Our vision is to be the leading partner in AI technology, setting new standards for personalized and efficient service. We strive to drive the seamless integration of AI into business operations across industries, continuously advancing AI solutions to help businesses thrive. Our goal is to remain at the forefront of AI innovation, delivering exceptional value to our clients and transforming the way businesses interact with their customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose iNextLabs?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>State-of-the-art AI technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>24/7 expert support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Scalable solutions for any business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at iNextLabs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries behind iNextLabs' success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
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
            Join thousands of businesses already using iNextLabs to drive growth and innovation.
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
