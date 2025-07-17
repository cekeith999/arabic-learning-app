import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'OpenAI API key not configured. Please add OPENAI_API_KEY to your environment variables.',
          details: 'Add your OpenAI API key to .env.local file'
        },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { category, difficulty = 'beginner', count = 5 } = await request.json();

    const prompt = `Generate ${count} Arabic vocabulary words/phrases for the category "${category}" at ${difficulty} level. 
    
    For each word/phrase, provide:
    - Arabic word/phrase
    - English translation
    - Transliteration (how to pronounce it)
    - Example sentence in Arabic
    - Cultural note or context
    
    Return the response as a JSON array with this exact structure:
    [
      {
        "arabicWord": "Arabic text",
        "englishTranslation": "English translation",
        "transliteration": "Pronunciation guide",
        "category": "${category}",
        "difficulty": "${difficulty}",
        "exampleSentence": "Example sentence in Arabic",
        "culturalNote": "Cultural context or note"
      }
    ]
    
    Make sure the Arabic text is properly formatted and the content is appropriate for ${difficulty} level learners.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an expert Arabic language teacher. Always respond with valid JSON arrays containing Arabic vocabulary with proper formatting."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const responseText = completion.choices[0]?.message?.content;
    
    if (!responseText) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    let vocabularyData;
    try {
      vocabularyData = JSON.parse(responseText);
    } catch {
      console.error('Failed to parse OpenAI response:', responseText);
      throw new Error('Invalid response format from OpenAI');
    }

    // Add IDs to each vocabulary item
    const vocabularyWithIds = vocabularyData.map((item: {
      arabicWord: string;
      englishTranslation: string;
      transliteration: string;
      category: string;
      difficulty: string;
      exampleSentence: string;
      culturalNote: string;
    }, index: number) => ({
      id: `generated-${Date.now()}-${index}`,
      ...item,
      audioUrl: "#", // Placeholder for future audio integration
    }));

    return NextResponse.json({ 
      success: true, 
      vocabulary: vocabularyWithIds 
    });

  } catch (error) {
    console.error('Error generating vocabulary:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to generate vocabulary',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 