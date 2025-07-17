// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  level: number;
  dialectPreference: 'MSA' | 'Egyptian';
  xp: number;
  streak: number;
  lingots: number;
  createdAt: Date;
  lastActive: Date;
}

export interface UserProgress {
  userId: string;
  vocabularyCount: number;
  quizScore: number;
  lastActive: Date;
  totalConversationTime: number;
  lessonsCompleted: number;
}

// Gamification Types
export interface Achievement {
  id: string;
  userId: string;
  badgeName: string;
  description: string;
  icon: string;
  earnedAt: Date;
  xpReward: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate: Date;
  streakBonus: number;
}

export interface LeaderboardEntry {
  userId: string;
  name: string;
  xp: number;
  level: number;
  streak: number;
  rank: number;
}

// Conversation Types
export interface Conversation {
  id: string;
  userId: string;
  topic: string;
  createdAt: Date;
  duration: number;
  messages: Message[];
  vocabularyLearned: string[];
  corrections: Correction[];
}

export interface Message {
  id: string;
  conversationId: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  audioUrl?: string;
  corrections?: Correction[];
  visualCue?: string; // emoji or image description
}

export interface Correction {
  originalText: string;
  correctedText: string;
  explanation: string;
  grammarTip?: string;
  example?: string;
}

// Vocabulary Types
export interface Vocabulary {
  id: string;
  arabicWord: string;
  englishTranslation: string;
  transliteration: string;
  audioUrl: string;
  imageUrl?: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  exampleSentence?: string;
  culturalNote?: string;
}

export interface UserVocabulary {
  userId: string;
  vocabularyId: string;
  learnedAt: Date;
  reviewCount: number;
  lastReviewed: Date;
  masteryLevel: number; // 0-100
  nextReviewDate: Date;
}

// Quiz Types
export interface Quiz {
  id: string;
  userId: string;
  type: 'vocabulary' | 'grammar' | 'conversation' | 'listening';
  score: number;
  totalQuestions: number;
  xpEarned: number;
  completedAt: Date;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  quizId: string;
  question: string;
  questionType: 'multiple-choice' | 'fill-blank' | 'audio' | 'matching';
  options?: string[];
  correctAnswer: string;
  explanation: string;
  audioUrl?: string;
  imageUrl?: string;
  arabicText?: string;
}

// Skill Tree Types
export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: number;
  xpRequired: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  vocabulary: string[];
  grammarTopics: string[];
  prerequisites: string[];
}

export interface SkillTree {
  skills: Skill[];
  userProgress: Record<string, number>; // skillId -> progress percentage
}

// Cultural Insights Types
export interface CulturalInsight {
  id: string;
  title: string;
  content: string;
  category: 'greetings' | 'food' | 'customs' | 'history' | 'language';
  unlockRequirement: string;
  isUnlocked: boolean;
  imageUrl?: string;
  videoUrl?: string;
  relatedVocabulary: string[];
}

// Audio Types
export interface AudioSettings {
  volume: number;
  speed: number;
  autoPlay: boolean;
  pronunciationGuide: boolean;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'streak' | 'achievement' | 'reminder' | 'level-up';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ConversationResponse {
  message: Message;
  suggestions: string[];
  vocabularyLearned: Vocabulary;
  culturalFact?: string;
  xpEarned: number;
}

// Store Types
export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  currentConversation: Conversation | null;
  vocabulary: Vocabulary[];
  achievements: Achievement[];
  notifications: Notification[];
  audioSettings: AudioSettings;
  isLoading: boolean;
  error: string | null;
}

// Learning Path Types
export interface LearningPath {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: number; // in minutes
  skills: string[];
  vocabulary: string[];
  quizzes: string[];
  culturalInsights: string[];
}

// Mini-Game Types
export interface MiniGame {
  id: string;
  name: string;
  type: 'matching' | 'translation' | 'pronunciation' | 'memory';
  description: string;
  xpReward: number;
  timeLimit?: number;
  difficulty: 'easy' | 'medium' | 'hard';
  isUnlocked: boolean;
}

export interface GameSession {
  id: string;
  gameId: string;
  userId: string;
  score: number;
  timeSpent: number;
  completedAt: Date;
  mistakes: number;
  xpEarned: number;
} 