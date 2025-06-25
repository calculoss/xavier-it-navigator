'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star,
  Filter,
  Search,
  ExternalLink,
  Calendar,
  Users,
  Award,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Home,
  TrendingUp,
  Phone,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// Import the data
import universitiesData from '@/data/nsw-universities.json';
import tafeData from '@/data/tafe-courses.json';

export default function PathwayExplorer() {
  const [activeTab, setActiveTab] = useState('university');
  const [selectedFilters, setSelectedFilters] = useState({
    location: 'all',
    atar: 'all',
    cost: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filterInstitutions = () => {
    const data = activeTab === 'university' ? universitiesData.universities : tafeData.institutions;
    
    return data.filter(institution => {
      const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           institution.programs.some(program => 
                             program.title.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      
      const matchesLocation = selectedFilters.location === 'all' || 
                             (selectedFilters.location === 'newcastle' && institution.location.includes('Newcastle')) ||
                             (selectedFilters.location === 'sydney' && institution.location.includes('Sydney'));
      
      return matchesSearch && matchesLocation;
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const filteredInstitutions = filterInstitutions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">NSW IT Education Pathways</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore universities and TAFE options to kickstart your IT career. All options include Commonwealth Supported Places (CSP) where available.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('university')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'university'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center justify-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Universities ({universitiesData.universities.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('tafe')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'tafe'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center justify-center">
                <Award className="w-5 h-5 mr-2" />
                TAFE ({tafeData.institutions.length})
              </div>
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search institutions or programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <select
                value={selectedFilters.location}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, location: e.target.value }))}
                className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="newcastle">Newcastle</option>
                <option value="sydney">Sydney</option>
              </select>

              {activeTab === 'university' && (
                <select
                  value={selectedFilters.atar}
                  onChange={(e) => setSelectedFilters(prev => ({ ...prev, atar: e.target.value }))}
                  className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All ATAR Levels</option>
                  <option value="low">65-75</option>
                  <option value="medium">75-85</option>
                  <option value="high">85-95</option>
                  <option value="very-high">95+</option>
                </select>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredInstitutions.map((institution: any) => (
            <div key={institution.id} className="bg-white rounded-xl shadow-sm border overflow-hidden">
              {/* Institution Header */}
              <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{institution.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{institution.location}</span>
                      {institution.distance && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{institution.distance}</span>
                        </>
                      )}
                    </div>
                    {institution.ranking && (
                      <div className="flex items-center text-green-600">
                        <Star className="w-5 h-5 mr-2" />
                        <span className="font-medium">{institution.ranking}</span>
                      </div>
                    )}
                    <div className="flex items-center text-blue-600 mt-2">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-sm">{institution.contactPhone}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="flex flex-wrap gap-2">
                      {institution.advantages.slice(0, 2).map((advantage: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                          {advantage}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Programs */}
              <div className="p-6">
                <div className="space-y-4">
                  {institution.programs.map((program: any, index: number) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div 
                        className="cursor-pointer"
                        onClick={() => setExpandedCard(expandedCard === `${institution.id}-${index}` ? null : `${institution.id}-${index}`)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{program.title}</h4>
                            <div className="flex items-center text-gray-600 mt-1 space-x-4">
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">{program.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-1" />
                                <span className="text-sm">
                                  {activeTab === 'university' 
                                    ? formatCurrency(program.cspCostPerYear || 0) + '/year (CSP)'
                                    : formatCurrency(program.cost || 0) + '/year'
                                  }
                                </span>
                              </div>
                              {activeTab === 'university' && program.atar && (
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  <span className="text-sm">ATAR: {program.atar}</span>
                                </div>
                              )}
                              {activeTab === 'tafe' && (
                                <div className="flex items-center">
                                  <Award className="w-4 h-4 mr-1" />
                                  <span className="text-sm">{program.entryRequirements}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          {expandedCard === `${institution.id}-${index}` ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>

                      {expandedCard === `${institution.id}-${index}` && (
                        <div className="mt-4 pt-4 border-t">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Specialisations</h5>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {program.specialisations.map((spec: string, i: number) => (
                                  <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                                    {spec}
                                  </span>
                                ))}
                              </div>
                              
                              <h5 className="font-medium text-gray-900 mb-2">Career Outcomes</h5>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {program.careerOutcomes.map((outcome: string, i: number) => (
                                  <li key={i} className="flex items-center">
                                    <Briefcase className="w-4 h-4 mr-2 text-gray-400" />
                                    {outcome}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h5 className="font-medium text-gray-900 mb-2">Work Integrated Learning</h5>
                              <p className="text-sm text-gray-600 mb-4">{program.workIntegrated}</p>
                              
                              {activeTab === 'university' && program.fullCostPerYear && (
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                                  <h6 className="text-sm font-medium text-yellow-800 mb-1">Cost Comparison</h6>
                                  <div className="text-sm text-yellow-700">
                                    <div>CSP (with govt. support): {formatCurrency(program.cspCostPerYear)}/year</div>
                                    <div>Full fee: {formatCurrency(program.fullCostPerYear)}/year</div>
                                    <div className="mt-1 text-xs">Most students pay CSP rates through HECS-HELP</div>
                                  </div>
                                </div>
                              )}

                              {activeTab === 'tafe' && program.pathways && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                  <h6 className="text-sm font-medium text-green-800 mb-1">Pathways</h6>
                                  <div className="text-sm text-green-700">
                                    <div className="mb-2">
                                      <strong>To University:</strong> {program.pathways.toUniversity}
                                    </div>
                                    <div>
                                      <strong>To Employment:</strong> {program.pathways.toEmployment}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {program.graduateEmploymentRate && (
                                <div className="mt-3 flex items-center">
                                  <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                                  <span className="text-sm text-gray-600">
                                    {program.graduateEmploymentRate}% graduate employment rate
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact and Additional Info */}
                <div className="mt-6 pt-6 border-t">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Why Choose {institution.name}?</h5>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {institution.advantages.map((advantage: string, i: number) => (
                          <span key={i} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            {advantage}
                          </span>
                        ))}
                      </div>
                      {activeTab === 'tafe' && tafeData.pathwayInformation && (
                        <p className="text-sm text-green-600 mt-2">
                          📈 TAFE graduates can get up to 2 years advanced standing at university
                        </p>
                      )}
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <div className="text-sm text-gray-600 mb-2">{institution.contactPhone}</div>
                      <a 
                        href={institution.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Information Panel */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Understanding Your Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Commonwealth Supported Places (CSP)</h4>
              <p className="text-blue-700 text-sm mb-3">
                The government subsidises your tuition, making it much more affordable. You pay the student contribution 
                (around {formatCurrency(10500)}/year for IT) and can defer this through HECS-HELP.
              </p>
              <h4 className="font-medium text-blue-800 mb-2">HECS-HELP</h4>
              <p className="text-blue-700 text-sm">
                No upfront fees! You start repaying through the tax system once you earn over {formatCurrency(47014)}/year. 
                No interest - just indexed to inflation.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">TAFE to University Pathways</h4>
              <p className="text-blue-700 text-sm mb-3">
                Complete a TAFE diploma first, then get credit recognition for up to 1-2 years of university study. 
                Great way to start hands-on and save money.
              </p>
              <h4 className="font-medium text-blue-800 mb-2">Entry Requirements</h4>
              <p className="text-blue-700 text-sm">
                Don&apos;t meet the ATAR? Many universities offer alternative entry through TAFE qualifications, 
                portfolios, or bridging courses.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Found some interesting options? Take our career assessment to see which pathways align best with your interests and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/assessment">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Take Career Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            <Link href="/calculator">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Calculate Costs & ROI
              </button>
       