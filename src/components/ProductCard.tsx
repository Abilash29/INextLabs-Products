'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, BarChart3, PieChart, MessageSquare } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
}

const ProductCard = ({ title, description, href, icon, features, gradient }: ProductCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg card-hover border border-gray-100`}>
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Icon */}
      <div className={`relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${gradient} text-white`}>
        {icon}
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-6 text-gray-600 leading-relaxed">{description}</p>
        
        {/* Features */}
        <ul className="mb-8 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
              {feature}
            </li>
          ))}
        </ul>
        
        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
