import { NextRequest, NextResponse } from 'next/server';
import { analyzeCareerFit } from '@/lib/claude';

export async function POST(request: NextRequest) {
  try {
    const { answers } = await request.json();
    
    if (!answers || Object.keys(answers).length === 0) {
      return NextResponse.json(
        { error: 'Assessment answers are required' },
        { status: 400 }
      );
    }

    console.log('Received assessment answers:', answers);
    
    const analysis = await analyzeCareerFit(answers);
    
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Career analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze career fit. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Career analysis API endpoint. Use POST method with assessment answers.' },
    { status: 200 }
  );
}