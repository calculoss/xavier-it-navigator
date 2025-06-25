'use client';

import Link from 'next/link';
import { Home, Calculator } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
          <Calculator className="w-16 h-16 mx-auto mb-4 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Financial Calculator</h1>
          <p className="text-gray-600 mb-6">
            HECS calculator and salary projections coming soon!
          </p>
          <Link href="/assessment">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Take Assessment First
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}