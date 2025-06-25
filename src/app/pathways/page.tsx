import Link from 'next/link';
import { Home, GraduationCap, Award, MapPin, Clock, DollarSign, Users, ExternalLink, ArrowRight } from 'lucide-react';

export default function PathwaysPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">NSW IT Education Pathways</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore universities and TAFE options to kickstart your IT career in Newcastle and NSW.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Universities</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">University of Newcastle</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Newcastle (Callaghan) • 12km from CBD</span>
                </div>
                <div className="text-sm text-green-600 font-medium">#8 in Australia for Computer Science</div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Bachelor of Computer Science</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      <span>3 years • ATAR: 75-85 • $10,500/year (CSP)</span>
                    </div>
                    <div className="mt-2 text-xs text-blue-700">
                      Software Engineering • Cybersecurity • Data Science
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Bachelor of Information Technology</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      <span>3 years • ATAR: 70-80 • $10,500/year (CSP)</span>
                    </div>
                    <div className="mt-2 text-xs text-green-700">
                      Web Development • Network Administration • Mobile Apps
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">Contact: 1300 UON UON</div>
                  <div className="text-sm text-blue-600 mb-3">Close to home • Strong industry connections</div>
                  <a 
                    href="https://www.newcastle.edu.au" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-700 flex items-center text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b bg-gradient-to-r from-purple-50 to-pink-50">
                <h3 className="text-xl font-bold text-gray-900 mb-2">University of Sydney</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Sydney (Camperdown) • 160km from Newcastle</span>
                </div>
                <div className="text-sm text-purple-600 font-medium">#3 in Australia for Computer Science</div>
              </div>
              
              <div className="p-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Bachelor of Computer Science</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    <span>3 years • ATAR: 95+ • $10,500/year (CSP)</span>
                  </div>
                  <div className="mt-2 text-xs text-purple-700">
                    Software Engineering • AI Research • Cybersecurity
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">Contact: 1800 SYD UNI</div>
                  <div className="text-sm text-purple-600 mb-3">Prestigious Go8 • World-class research</div>
                  <a 
                    href="https://www.sydney.edu.au" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 flex items-center text-sm"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">TAFE NSW Options</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b bg-gradient-to-r from-green-50 to-blue-50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">TAFE NSW - Newcastle</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Newcastle City • Multiple campuses</span>
              </div>
              <div className="text-sm text-green-600 font-medium">Hands-on learning with industry-standard equipment</div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Diploma of Information Technology</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    <span>2 years • $8,500/year</span>
                  </div>
                  <div className="mt-2 text-xs text-green-700">
                    Programming • Web Development • Network Security
                  </div>
                  <div className="mt-3 text-sm text-green-600">
                    120 hours industry placement • University pathway available
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Certificate IV in Cyber Security</h4>
                  <div className="text-sm text-gray-600 mt-1">
                    <span>1 year • $6,500/year</span>
                  </div>
                  <div className="mt-2 text-xs text-orange-700">
                    Network Security • Incident Response • Risk Assessment
                  </div>
                  <div className="mt-3 text-sm text-orange-600">
                    Fast entry to high-demand field • 80 hours workplace learning
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="text-sm text-gray-600 mb-2">Contact: 131 601</div>
                <div className="text-sm text-green-600 mb-3">Lower cost than university • Faster entry to workforce</div>
                <a 
                  href="https://www.tafensw.edu.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 flex items-center text-sm"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Understanding Your Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">Commonwealth Supported Places (CSP)</h4>
              <p className="text-blue-700 mb-3">
                Government subsidises your tuition. You pay around $10,500/year for IT and can defer through HECS-HELP.
              </p>
              <h4 className="font-medium text-blue-800 mb-2">HECS-HELP</h4>
              <p className="text-blue-700">
                No upfront fees! Start repaying when you earn over $47,014/year. No interest - just inflation indexing.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">TAFE to University Pathway</h4>
              <p className="text-blue-700 mb-3">
                Complete TAFE diploma first, then get credit for 1-2 years of university. Great way to start hands-on!
              </p>
              <h4 className="font-medium text-blue-800 mb-2">Alternative Entry</h4>
              <p className="text-blue-700">
                Do not meet ATAR requirements? TAFE qualifications, portfolios, or bridging courses can get you in.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Choose Your Path?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Take our career assessment to get personalized recommendations based on your interests and learning style.
          </p>
          <Link href="/assessment">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
              Take Career Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}