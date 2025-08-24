'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const products = [
    { name: 'inFlow DocsAI', href: '/inflow-docsai', description: 'Gen AI-powered omnichannel assistants' },
    { name: 'inFlow InsightsAI', href: '/inflow-insightsai', description: 'Comprehensive analysis for all your data types' },
    { name: 'inFlow EngageAI', href: '/inflow-engageai', description: 'Transform data into insightful visuals instantly' },
    { name: 'inFlow AssistAI', href: '/inflow-assistai', description: 'Elevate customer interactions with AI' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#343e61] border-b border-[#2a3249] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="https://cdn.inextlabs.ai/images/general/inextlabs-logo-footer.webp" 
              alt="iNextLabs" 
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-orange-400 transition-colors">
              Home
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                >
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block flex items-center space-x-4">
            <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border-2 border-gray-300 transition-all duration-300 hover:bg-gray-50 hover:border-gray-400">
              Contact Us
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105">
              Start Your Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-orange-400 hover:bg-[#2a3249] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2a3249] bg-[#343e61]">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-white hover:bg-[#2a3249] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
                             <div className="px-4 py-2">
                 <button
                   onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                   className="flex items-center justify-between w-full text-white hover:text-orange-400 transition-colors"
                 >
                   <span className="font-medium">Products</span>
                   <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                 </button>
                 {isMobileProductsOpen && (
                   <div className="space-y-1 ml-4 mt-2">
                     {products.map((product) => (
                       <Link
                         key={product.name}
                         href={product.href}
                         className="block py-1 text-gray-300 hover:text-orange-400 transition-colors"
                         onClick={() => {
                           setIsMenuOpen(false);
                           setIsMobileProductsOpen(false);
                         }}
                       >
                         {product.name}
                       </Link>
                     ))}
                   </div>
                 )}
               </div>
              
              <Link
                href="/about"
                className="block px-4 py-2 text-white hover:bg-[#2a3249] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-white hover:bg-[#2a3249] rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            <div className="px-4 pt-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105 w-full">
                Start Your Free Trial
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
