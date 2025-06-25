import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function analyzeCareerFit(answers: Record<string, any>) {
  const prompt = `
You are an expert IT career counselor for Newcastle, NSW students. 
Analyze these career assessment responses and provide personalised recommendations.

Student Assessment Data:
${JSON.stringify(answers, null, 2)}

Provide analysis in this JSON format:
{
  "topMatches": [
    {
      "role": "Career Title",
      "match": 85,
      "description": "Why this role suits them based on their responses",
      "pathways": ["Newcastle University option", "TAFE NSW option"],
      "skills": ["Key skill 1", "Key skill 2", "Key skill 3", "Key skill 4"],
      "salaryRange": "$X - $Y (Graduate to Mid-level)",
      "growth": "Job market outlook and demand level"
    }
  ],
  "learningStyle": "Brief analysis of their learning preferences",
  "recommendations": [
    "Specific actionable tip 1",
    "Specific actionable tip 2", 
    "Specific actionable tip 3",
    "Specific actionable tip 4"
  ]
}

Focus on:
- Newcastle/NSW specific opportunities and education providers
- Practical career advice for an average student interested in technology
- Current IT market trends in Australia
- Specific education pathways available at University of Newcastle and TAFE NSW
- Consider their responses about learning style, technical interests, and career goals
- Be encouraging but realistic about pathways and timelines
`;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    });

    const content = response.content[0];
    if (content.type === 'text') {
      return JSON.parse(content.text);
    }
    throw new Error('Unexpected response format');
  } catch (error) {
    console.error('Claude API error:', error);
    
    // Fallback response in case of API failure
    return {
      topMatches: [
        {
          role: "Full Stack Web Developer",
          match: 90,
          description: "Great fit for hands-on learners who enjoy building user-facing applications",
          pathways: ["Bachelor of Computer Science (Newcastle)", "Diploma of IT (TAFE) → University"],
          skills: ["JavaScript", "React", "Python", "Database Design"],
          salaryRange: "$70k - $95k (Graduate to Mid-level)",
          growth: "Strong demand with 25% growth expected"
        },
        {
          role: "Cybersecurity Analyst", 
          match: 85,
          description: "Excellent for logical thinkers interested in protecting digital systems",
          pathways: ["Bachelor of Cybersecurity (Newcastle)", "Certificate IV in Cyber Security (TAFE)"],
          skills: ["Network Security", "Risk Assessment", "Incident Response", "Security Tools"],
          salaryRange: "$75k - $120k (Graduate to Senior)",
          growth: "Extremely high demand - 35% growth expected"
        }
      ],
      learningStyle: "Hands-on learner who benefits from practical projects and visual demonstrations",
      recommendations: [
        "Start with basic programming tutorials to build confidence",
        "Visit University of Newcastle open day to see facilities",
        "Consider TAFE pathway for faster entry to workforce",
        "Join local tech meetups to network with professionals"
      ]
    };
  }
}