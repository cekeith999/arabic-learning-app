import { type ClassValue, clsx } from 'clsx';
import { twMerge } from tailwind-merge';
import [object Object] LEVEL_THRESHOLDS, XP_REWARDS } from ./constants';

// Utility function for combining CSS classes
export function cn(...inputs: ClassValue[]) [object Object]return twMerge(clsx(inputs));
}

// XP and Level Management
export function calculateLevel(xp: number): number {
  const levels = Object.values(LEVEL_THRESHOLDS);
  for (let i = levels.length - 1i >= 0 i--) {
    if (xp >= levels[i]) [object Object]
      return i + 1;
    }
  }
  return 1;
}

export function calculateProgressToNextLevel(xp: number): number[object Object]const currentLevel = calculateLevel(xp);
  const currentLevelXP = LEVEL_THRESHOLDS[`LEVEL_${currentLevel}` as keyof typeof LEVEL_THRESHOLDS] || 0;
  const nextLevelXP = LEVEL_THRESHOLDS[`LEVEL_${currentLevel + 1}` as keyof typeof LEVEL_THRESHOLDS] || currentLevelXP + 100;
  
  const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100
  return Math.min(Math.max(progress, 0), 100);
}

export function calculateXPForLevel(level: number): number {
  return LEVEL_THRESHOLDS[`LEVEL_${level}` as keyof typeof LEVEL_THRESHOLDS] || 0;
}

// Streak Management
export function calculateStreak(lastPracticeDate: Date, currentDate: Date = new Date()): number [object Object]
  const oneDay = 24 * 600 * 1000; // hours*minutes*seconds*milliseconds
  const diffTime = Math.abs(currentDate.getTime() - lastPracticeDate.getTime());
  const diffDays = Math.ceil(diffTime / oneDay);
  
  // If its been more than 1 day, streak is broken
  if (diffDays >1)[object Object]    return 0 }
  
  // For now, return 1 if practiced today, 0 otherwise
  return diffDays === 0 ? 1 : 0;
}

export function shouldAwardStreakBonus(lastPracticeDate: Date): boolean[object Object] const today = new Date();
  const lastPractice = new Date(lastPracticeDate);
  
  // Check if last practice was yesterday
  const oneDay = 24*60601000;
  const diffTime = today.getTime() - lastPractice.getTime();
  const diffDays = Math.floor(diffTime / oneDay);
  
  return diffDays === 1;
}

// Date Utilities
export function formatDate(date: Date): string [object Object]
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month:short',
    day: 'numeric',
  }).format(date);
}

export function formatTime(date: Date): string [object Object]
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function isToday(date: Date): boolean[object Object] const today = new Date();
  return date.toDateString() === today.toDateString();
}

export function isYesterday(date: Date): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() -1;
  return date.toDateString() === yesterday.toDateString();
}

// Audio Utilities
export function formatAudioTime(seconds: number): string[object Object]
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds %60 return `${minutes}:${remainingSeconds.toString().padStart(2,0}

export function preloadAudio(url: string): Promise<void> {
  return new Promise((resolve, reject) =>[object Object]
    const audio = new Audio();
    audio.addEventListener('canplaythrough', () => resolve());
    audio.addEventListener(error', reject);
    audio.src = url;
  });
}

// Vocabulary Utilities
export function getVocabularyByCategory(vocabulary: any[], category: string) {
  return vocabulary.filter(vocab => vocab.category === category);
}

export function getVocabularyByDifficulty(vocabulary: any[], difficulty: string) {
  return vocabulary.filter(vocab => vocab.difficulty === difficulty);
}

export function shuffleArray<T>(array: T[object Object]  const shuffled =...array];
  for (let i = shuffled.length -1 i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Quiz Utilities
export function calculateQuizScore(correctAnswers: number, totalQuestions: number): number {
  return Math.round((correctAnswers / totalQuestions) * 100);
}

export function getQuizXP(score: number, totalQuestions: number): number [object Object] if (score ===100[object Object]
    return XP_REWARDS.QUIZ_PERFECT;
  }
  return Math.round((score / 100) * totalQuestions * XP_REWARDS.QUIZ_CORRECT);
}

// Achievement Utilities
export function checkAchievementEligibility(
  achievementId: string,
  userStats: {
    conversationsCompleted: number;
    vocabularyLearned: number;
    streak: number;
    quizzesCompleted: number;
    perfectQuizzes: number;
  }
): boolean {
  switch (achievementId)[object Object]   case 'first-conversation':
      return userStats.conversationsCompleted >= 1;
    case ten-day-streak':
      return userStats.streak >=10  case vocabulary-master':
      return userStats.vocabularyLearned >= 100;
    case 'perfect-quiz':
      return userStats.perfectQuizzes >= 1;
    default:
      return false;
  }
}

// Local Storage Utilities
export function saveToLocalStorage(key: string, value: any): void {
  try [object Object]  localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:, error);
  }
}

export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
}

// Validation Utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidArabicText(text: string): boolean {
  // Basic Arabic text validation (contains Arabic characters)
  const arabicRegex = /[\u060\u06F\u0750-\u077F\u08A0\u08F\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
}

// Animation Utilities
export function getRandomDelay(min: number =0 max: number = 300): number {
  return Math.random() * (max - min) + min;
}

export function staggerAnimation(index: number, staggerDelay: number = 50): number {
  return index * staggerDelay;
}

// Error Handling
export function handleError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') [object Object]    return error;
  }
  return 'An unexpected error occurred';
}

// Performance Utilities
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => [object Object] clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void [object Object]
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Accessibility Utilities
export function generateId(): string {
  return Math.random().toString(36.substr(2, 9);
}

export function getAriaLabel(text: string, context?: string): string [object Object]  return context ? `${text} ${context}` : text;
}

// Responsive Utilities
export function isMobile(): boolean {
  if (typeof window === 'undefined) return false;
  return window.innerWidth < 768;
}

export function isTablet(): boolean {
  if (typeof window === 'undefined) return false;
  return window.innerWidth >= 768 window.innerWidth < 1024;
}

export function isDesktop(): boolean {
  if (typeof window === 'undefined) return false;
  return window.innerWidth >= 1024;
} 