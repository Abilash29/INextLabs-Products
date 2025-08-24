'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-[#2C3E50] text-white overflow-hidden">
      {/* Animated Background Elements - Moving Pebbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#1a252f] rounded-full opacity-30 animate-blob"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#1a252f] rounded-full opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#1a252f] rounded-full opacity-25 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-[#1a252f] rounded-full opacity-35 animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 w-18 h-18 bg-[#1a252f] rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-[#1a252f] rounded-full opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-[#1a252f] rounded-full opacity-25 animate-blob"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="https://cdn.inextlabs.ai/images/general/inextlabs-logo-footer.webp" 
                alt="iNextLabs" 
                width={100}
                height={100}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses with cutting-edge AI solutions. From document processing to customer engagement, 
              we provide comprehensive AI-powered tools to drive your success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/inflow-docsai" className="text-gray-300 hover:text-orange-400 transition-colors">
                  inFlow DocsAI
                </Link>
              </li>
              <li>
                <Link href="/inflow-insightsai" className="text-gray-300 hover:text-orange-400 transition-colors">
                  inFlow InsightsAI
                </Link>
              </li>
              <li>
                <Link href="/inflow-engageai" className="text-gray-300 hover:text-orange-400 transition-colors">
                  inFlow EngageAI
                </Link>
              </li>
              <li>
                <Link href="/inflow-assistai" className="text-gray-300 hover:text-orange-400 transition-colors">
                  inFlow AssistAI
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#34495E] mt-8 pt-8 text-center text-gray-300">
          <p>Copyright © 2025 iNextLabs - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
