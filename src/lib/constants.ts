// Gamification Constants
export const XP_REWARDS = {
  CONVERSATION_MESSAGE: 5,
  VOCABULARY_LEARNED: 10,
  QUIZ_CORRECT: 15,
  QUIZ_PERFECT: 50,
  DAILY_STREAK: 20,
  ACHIEVEMENT: 25,
  MINI_GAME_WIN: 30
} as const;

export const LINGOT_REWARDS = {
  DAILY_LOGIN: 5,
  WEEKLY_STREAK: 10,
  ACHIEVEMENT: 15,
  PERFECT_QUIZ: 20,
  CONVERSATION_MILESTONE: 25
} as const;

export const LEVEL_THRESHOLDS = {
  LEVEL_1: 0,
  LEVEL_2: 10,
  LEVEL_3: 250,
  LEVEL_4: 500,
  LEVEL_5: 1000,
  LEVEL_6: 2000,
  LEVEL_7: 3500,
  LEVEL_8: 5000,
  LEVEL_9: 7500,
  LEVEL_10: 10000
} as const;

// Vocabulary Categories
export const VOCABULARY_CATEGORIES = {
  GREETINGS: 'greetings',
  NUMBERS: 'numbers',
  COLORS: 'colors',
  FOOD: 'food',
  FAMILY: 'family',
  ANIMALS: 'animals',
  WEATHER: 'weather',
  TIME: 'time',
  BODY_PARTS: 'body-parts',
  CLOTHES: 'clothes',
  TRANSPORT: 'transport',
  EMOTIONS: 'emotions'
} as const;

// Achievement Types
export const ACHIEVEMENTS = {
  FIRST_CONVERSATION: {
    id: 'first-conversation',
    name: 'First Conversation',
    description: 'Complete your first conversation with Ustadh Ahmad',
    icon: '💬',
    xpReward: 50
  },
  TEN_DAY_STREAK: {
    id: 'ten-day-streak',
    name: 'Dedicated Learner',
    description: 'Maintain a 10-day learning streak',
    icon: '🔥',
    xpReward: 10
  },
  VOCABULARY_MASTER: {
    id: 'vocabulary-master',
    name: 'Vocabulary Master',
    description: 'Learn 100 vocabulary words',
    icon: '📚',
    xpReward: 150
  },
  PERFECT_QUIZ: {
    id: 'perfect-quiz',
    name: 'Perfect Score',
    description: 'Get a perfect score on any quiz',
    icon: '⭐',
    xpReward: 75
  },
  CULTURAL_EXPLORER: {
    id: 'cultural-explorer',
    name: 'Cultural Explorer',
    description: 'Unlock 10 cultural insights',
    icon: '🌍',
    xpReward: 125
  }
} as const;

// Default Vocabulary Data
export const DEFAULT_VOCABULARY = [
  {
    id: '1',
    arabicWord: 'مرحبا',
    englishTranslation: 'Hello',
    transliteration: 'marhaba',
    audioUrl: '/audio/marhaba.mp3',
    imageUrl: '/images/greeting.png',
    category: VOCABULARY_CATEGORIES.GREETINGS,
    difficulty: 'beginner',
    exampleSentence: 'مرحبا، كيف حالك؟',
    culturalNote: 'مرحبا is a friendly, informal greeting used throughout the Arab world.'
  },
  {
    id: '2',
    arabicWord: 'شكرا',
    englishTranslation: 'Thank you',
    transliteration: 'shukran',
    audioUrl: '/audio/shukran.mp3',
    imageUrl: '/images/thank-you.png',
    category: VOCABULARY_CATEGORIES.GREETINGS,
    difficulty: 'beginner',
    exampleSentence: 'شكرا لك على المساعدة',
    culturalNote: 'شكرا is the most common way to say thank you in Arabic.'
  },
  {
    id: '3',
    arabicWord: 'واحد',
    englishTranslation: 'One',
    transliteration: 'waahid',
    audioUrl: '/audio/waahid.mp3',
    imageUrl: '/images/one.png',
    category: VOCABULARY_CATEGORIES.NUMBERS,
    difficulty: 'beginner',
    exampleSentence: 'أريد واحد قهوة',
    culturalNote: 'Numbers in Arabic are written from right to left like the rest of the text.'
  },
  {
    id: '4',
    arabicWord: 'قهوة',
    englishTranslation: 'Coffee',
    transliteration: 'qahwa',
    audioUrl: '/audio/qahwa.mp3',
    imageUrl: '/images/coffee.png',
    category: VOCABULARY_CATEGORIES.FOOD,
    difficulty: 'beginner',
    exampleSentence: 'أشرب قهوة كل صباح',
    culturalNote: 'Coffee is an important part of Arab culture and hospitality.'
  },
  {
    id: '5',
    arabicWord: 'أحمر',
    englishTranslation: 'Red',
    transliteration: 'ahmar',
    audioUrl: '/audio/ahmar.mp3',
    imageUrl: '/images/red.png',
    category: VOCABULARY_CATEGORIES.COLORS,
    difficulty: 'beginner',
    exampleSentence: 'السيارة حمراء',
    culturalNote: 'Colors in Arabic have masculine and feminine forms.'
  }
] as const;

// Conversation Topics
export const CONVERSATION_TOPICS = {
  GREETINGS: {
    id: 'greetings',
    name: 'Greetings & Introductions',
    description: 'Learn basic greetings and how to introduce yourself',
    vocabulary: ['مرحبا', 'شكرا', 'اسمي', 'كيف حالك'],
    difficulty: 'beginner'
  },
  FOOD: {
    id: 'food',
    name: 'Food & Drinks',
    description: 'Talk about your favorite foods and drinks',
    vocabulary: ['قهوة', 'شاي', 'خبز'],
    difficulty: 'beginner'
  },
  FAMILY: {
    id: 'family',
    name: 'Family',
    description: 'Learn to talk about your family members',
    vocabulary: ['أم', 'أب', 'أخ'],
    difficulty: 'beginner'
  },
  WEATHER: {
    id: 'weather',
    name: 'Weather',
    description: 'Discuss the weather and seasons',
    vocabulary: ['مطر', 'شمس', 'برد'],
    difficulty: 'beginner'
  }
} as const;

// Quiz Types
export const QUIZ_TYPES = {
  VOCABULARY: 'vocabulary',
  GRAMMAR: 'grammar',
  CONVERSATION: 'conversation',
  LISTENING: 'listening'
} as const;

// Audio Settings
export const AUDIO_SPEEDS = [0.5, 0.75, 1, 1.5] as const;

// UI Constants
export const ANIMATION_DURATIONS = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const;

export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1240,
  LARGE: 1280
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  AUTH_ERROR: 'Authentication error. Please log in again.',
  CONVERSATION_ERROR: 'Unable to start conversation. Please try again.',
  AUDIO_ERROR: 'Audio playback error. Please check your device settings.',
  QUIZ_ERROR: 'Unable to load quiz. Please try again.'
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  VOCABULARY_LEARNED: 'Great job! You learned a new word!',
  QUIZ_COMPLETED: 'Excellent! Quiz completed successfully!',
  STREAK_UPDATED: 'Your streak has been updated!',
  ACHIEVEMENT_EARNED: 'Congratulations! You earned an achievement!'
} as const;

// Cultural Insights
export const CULTURAL_INSIGHTS = [
  {
    id: 1,
    title: 'Arabic Hospitality',
    content: 'In Arab culture, guests are treated with great respect and hospitality. It\'s common to offer coffee or tea to visitors.',
    category: 'customs',
    unlockRequirement: 'Complete 5 conversation',
    relatedVocabulary: ['قهوة', 'شاي', 'مرحبا']
  },
  {
    id: 2,
    title: 'The Arabic Language',
    content: 'Arabic is written from right to left and has 28 letters. It\'s one of the most widely spoken languages in the world.',
    category: 'language',
    unlockRequirement: 'Learn 10 vocabulary words',
    relatedVocabulary: ['مرحبا', 'شكرا']
  },
  {
    id: 3,
    title: 'Traditional Greetings',
    content: 'Traditional Arabic greetings often involve asking about family and health. "كيف حالك؟" means "How are you?"',
    category: 'greetings',
    unlockRequirement: 'Complete 3 greeting conversations',
    relatedVocabulary: ['كيف حالك', 'مرحبا']
  }
] as const; 