'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Brain,
  Lightbulb,
  Sparkles,
  Home
} from 'lucide-react';

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState(null);

  const questions = [
    {
      id: 'learning_style',
      category: 'Learning Preferences',
      question: 'How do you prefer to learn new things?',
      type: 'single',
      options: [
        { value: 'hands_on', label: 'Hands-on - I like to build and experiment', icon: '🔧' },
        { value: 'visual', label: 'Visual - I prefer diagrams, videos, and demonstrations', icon: '👀' },
        { value: 'reading', label: 'Reading - I like detailed documentation and tutorials', icon: '📚' },
        { value: 'social', label: 'Collaborative - I learn best in groups and discussions', icon: '👥' }
      ]
    },
    {
      id: 'problem_solving',
      category: 'Problem Solving',
      question: 'When facing a technical problem, what\'s your first instinct?',
      type: 'single',
      options: [
        { value: 'research', label: 'Research thoroughly before attempting a solution', icon: '🔍' },
        { value: 'experiment', label: 'Try different approaches until something works', icon: '⚡' },
        { value: 'ask_help', label: 'Ask someone with more experience', icon: '💬' },
        { value: 'systematic', label: 'Break it down into smaller, manageable parts', icon: '📋' }
      ]
    },
    {
      id: 'interests',
      category: 'Technical Interests',
      question: 'Which of these technology areas interest you most? (Select all that apply)',
      type: 'multiple',
      options: [
        { value: 'gaming', label: 'Gaming and game development', icon: '🎮' },
        { value: 'security', label: 'Cybersecurity and protecting systems', icon: '🛡️' },
        { value: 'web', label: 'Building websites and web applications', icon: '🌐' },
        { value: 'data', label: 'Working with data and analytics', icon: '📊' },
        { value: 'mobile', label: 'Mobile app development', icon: '📱' },
        { value: 'ai', label: 'Artificial intelligence and machine learning', icon: '🤖' },
        { value: 'hardware', label: 'Computer hardware and building systems', icon: '💻' },
        { value: 'networks', label: 'Networking and system administration', icon: '🌐' }
      ]
    },
    {
      id: 'work_environment',
      category: 'Work Style',
      question: 'What kind of work environment appeals to you?',
      type: 'single',
      options: [
        { value: 'team', label: 'Collaborative team environment', icon: '👨‍💼' },
        { value: 'independent', label: 'Independent work with minimal supervision', icon: '🏠' },
        { value: 'client_facing', label: 'Working directly with clients and users', icon: '🤝' },
        { value: 'technical_focus', label: 'Pure technical focus without meetings', icon: '⚙️' }
      ]
    },
    {
      id: 'math_comfort',
      category: 'Academic Strengths',
      question: 'How comfortable are you with mathematics?',
      type: 'single',
      options: [
        { value: 'love_it', label: 'I love maths and find it easy', icon: '🧮' },
        { value: 'comfortable', label: 'I\'m comfortable with most maths concepts', icon: '📐' },
        { value: 'basic', label: 'I can handle basic maths but struggle with advanced topics', icon: '🔢' },
        { value: 'avoid', label: 'I prefer to avoid heavy mathematical work', icon: '😅' }
      ]
    },
    {
      id: 'career_goals',
      category: 'Future Aspirations',
      question: 'What\'s most important to you in a career?',
      type: 'single',
      options: [
        { value: 'salary', label: 'High earning potential', icon: '💰' },
        { value: 'security', label: 'Job security and stability', icon: '🛡️' },
        { value: 'growth', label: 'Opportunities for advancement', icon: '📈' },
        { value: 'impact', label: 'Making a meaningful impact', icon: '🌟' },
        { value: 'balance', label: 'Work-life balance', icon: '⚖️' },
        { value: 'learning', label: 'Continuous learning and challenges', icon: '🧠' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => {
      const currentQuestion = questions.find(q => q.id === questionId);
      if (currentQuestion?.type === 'multiple') {
        const currentAnswers = (prev[questionId] as string[]) || [];
        if (currentAnswers.includes(value)) {
          return {
            ...prev,
            [questionId]: currentAnswers.filter(v => v !== value)
          };
        } else {
          return {
            ...prev,
            [questionId]: [...currentAnswers, value]
          };
        }
      } else {
        return {
          ...prev,
          [questionId]: value
        };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateResults();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateResults = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/analyze-career', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze responses');
      }
      
      const analysisResults = await response.json();
      setResults(analysisResults);
    } catch (error) {
      console.error('Error:', error);
      // Fallback results in case of API failure
      setResults({
        topMatches: [
          {
            role: 'Full Stack Web Developer',
            match: 92,
            description: 'Perfect blend of creativity and technical skills. You\'ll build web applications that users interact with daily.',
            pathways: ['Bachelor of Computer Science (Newcastle)', 'Diploma of Website Development (TAFE)'],
            skills: ['JavaScript', 'React', 'Python', 'Database Design'],
            salaryRange: '$65k - $95k (Graduate to Mid-level)',
            growth: 'High demand - 23% growth expected'
          },
          {
            role: 'Cybersecurity Analyst',
            match: 87,
            description: 'Protect organisations from digital threats. Combines technical skills with problem-solving.',
            pathways: ['Bachelor of Cybersecurity (Newcastle)', 'Certificate IV in Cyber Security (TAFE)'],
            skills: ['Network Security', 'Risk Analysis', 'Security Tools', 'Incident Response'],
            salaryRange: '$75k - $120k (Graduate to Senior)',
            growth: 'Extremely high demand - 35% growth expected'
          }
        ],
        learningStyle: 'Hands-on learner who benefits from practical projects',
        recommendations: [
          'Consider starting with a TAFE diploma to get hands-on experience quickly',
          'Look into part-time or online study options to maintain flexibility',
          'Build a portfolio of personal projects while studying',
          'Join local tech meetups in Newcastle to network'
        ]
      });
    } finally {
      setIsGenerating(false);
    }
  };

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Analysing Your Responses</h2>
          <p className="text-gray-600">Our AI is matching your interests with the perfect IT careers...</p>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your IT Career Matches</h1>
            <p className="text-gray-600">Based on your responses, here are your top career recommendations</p>
          </div>

          <div className="space-y-6">
            {results.topMatches.map((match: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{match.role}</h3>
                    <div className="flex items-center mt-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                          style={{ width: `${match.match}%` }}
                        />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-700">{match.match}% Match</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">#{index + 1}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{match.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Education Pathways</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {match.pathways.map((pathway: string, i: number) => (
                        <li key={i}>• {pathway}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {match.skills.map((skill: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-500">Salary Range</span>
                    <div className="font-medium text-gray-900">{match.salaryRange}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Job Market</span>
                    <div className="font-medium text-green-600">{match.growth}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Personalised Recommendations</h3>
            <div className="space-y-3">
              {results.recommendations.map((rec: string, index: number) => (
                <div key={index} className="flex items-start">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">{rec}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pathways">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Explore Your Pathways
                </button>
              </Link>
              <Link href="/report">
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Generate Full Report
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const isCurrentAnswered = answers[currentQuestion?.id];
  const progressPercent = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Question {currentStep + 1} of {questions.length}</span>
            <span className="text-sm text-blue-600 font-medium">{Math.round(progressPercent)}% Complete</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm border">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Brain className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                {currentQuestion.category}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = currentQuestion.type === 'multiple' 
                ? ((answers[currentQuestion.id] as string[]) || []).includes(option.value)
                : answers[currentQuestion.id] === option.value;

              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">{option.icon}</span>
                    <span className="font-medium">{option.label}</span>
                    {isSelected && (
                      <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <button
            onClick={nextStep}
            disabled={!isCurrentAnswered}
            className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {currentStep === questions.length - 1 ? (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Get My Results
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}