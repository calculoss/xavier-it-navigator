'use client';

import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  TrendingUp, 
  Calculator, 
  Users, 
  FileText, 
  ArrowRight,
  Smartphone,
  Brain,
  MapPin
} from 'lucide-react';

export default function Homepage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "Smart Career Assessment",
      description: "Discover your learning style and interests with our AI-powered questionnaire",
      action: "Start Assessment",
      href: "/assessment"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      title: "NSW Pathway Explorer", 
      description: "Explore universities and TAFE options right here in Newcastle and across NSW",
      action: "Explore Pathways",
      href: "/pathways"
    },
    {
      icon: <Calculator className="w-8 h-8 text-purple-600" />,
      title: "Financial Calculator",
      description: "Understand costs, HECS debt, and potential salaries for different IT careers",
      action: "Calculate Costs",
      href: "/calculator"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Day in the Life",
      description: "Real stories from IT professionals - see what different roles actually do",
      action: "Read Stories",
      href: "/profiles"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Industry Trends",
      description: "Stay ahead with insights on growing areas like cybersecurity and automation",
      action: "View Trends", 
      href: "/trends"
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: "Personal Report",
      description: "Get a customised career roadmap you can export and share with family",
      action: "Create Report",
      href: "/report"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">IT Career Navigator</h1>
                <p className="text-sm text-gray-600">Newcastle & NSW Pathways</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              Newcastle, NSW
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hey Xavier! 👋 <br />
            <span className="text-blue-600">Your IT Journey Starts Here</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the perfect IT career path that matches your interests, explore local universities and TAFE options, 
            and understand the real costs and opportunities in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Start Your Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link href="/pathways">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Explore Pathways
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">NSW Universities with IT Programs</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-green-600 mb-2">$75k+</div>
            <div className="text-gray-600">Average Graduate IT Salary</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-3xl font-bold text-purple-600 mb-2">25%</div>
            <div className="text-gray-600">Job Growth in Cybersecurity</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link href={feature.href}>
                <button className="w-full bg-gray-50 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
                  {feature.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Why This Matters Section */}
        <section className="mt-20 bg-white rounded-2xl p-8 shadow-sm border">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Your IT Career Choice Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Growing Industry 📈</h4>
              <p className="text-gray-600 mb-4">
                IT is one of the fastest-growing sectors in Australia. From cybersecurity to automation, 
                new opportunities are emerging faster than ever.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Stay Local 🏠</h4>
              <p className="text-gray-600">
                Newcastle has a thriving tech scene with opportunities at local councils, startups, 
                and major companies - you can build a great career without leaving home.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Multiple Pathways 🛤️</h4>
              <p className="text-gray-600 mb-4">
                Whether through university, TAFE, or industry certifications, there are many 
                ways to get into IT that suit different learning styles and budgets.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Future-Proof Skills 🚀</h4>
              <p className="text-gray-600">
                IT skills are becoming essential across all industries. You're not just choosing 
                a career - you're building skills for the future economy.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>Built to help Newcastle students navigate their IT career journey</p>
            <p className="text-sm mt-2">Data current as of June 2025 • Export your results anytime</p>
          </div>
        </div>
      </footer>
    </div>
  );
}