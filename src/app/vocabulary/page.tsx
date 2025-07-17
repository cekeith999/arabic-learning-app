"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useAppStore } from "@/store";
import { ArrowLeft, Play, Volume2, BookOpen, Target, Star } from "lucide-react";
import Link from "next/link";
import type { Vocabulary } from "@/types";

// Sample vocabulary data
const sampleVocabulary: Vocabulary[] = [
  {
    id: "1",
    arabicWord: "مرحبا",
    englishTranslation: "Hello",
    transliteration: "Marhaba",
    audioUrl: "#",
    category: "greetings",
    difficulty: "beginner",
    exampleSentence: "مرحبا، كيف حالك؟",
    culturalNote: "Used as a general greeting in most Arabic-speaking countries",
  },
  {
    id: "2",
    arabicWord: "شكرا",
    englishTranslation: "Thank you",
    transliteration: "Shukran",
    audioUrl: "#",
    category: "greetings",
    difficulty: "beginner",
    exampleSentence: "شكرا لك على المساعدة",
    culturalNote: "Very important in Arabic culture to express gratitude",
  },
  {
    id: "3",
    arabicWord: "اسمي",
    englishTranslation: "My name is",
    transliteration: "Ismi",
    audioUrl: "#",
    category: "introductions",
    difficulty: "beginner",
    exampleSentence: "اسمي أحمد",
    culturalNote: "Used when introducing yourself",
  },
  {
    id: "4",
    arabicWord: "قهوة",
    englishTranslation: "Coffee",
    transliteration: "Qahwa",
    audioUrl: "#",
    category: "food-drinks",
    difficulty: "beginner",
    exampleSentence: "أريد قهوة، من فضلك",
    culturalNote: "Coffee is very important in Arabic culture and hospitality",
  },
  {
    id: "5",
    arabicWord: "ماء",
    englishTranslation: "Water",
    transliteration: "Maa",
    audioUrl: "#",
    category: "food-drinks",
    difficulty: "beginner",
    exampleSentence: "أحتاج ماء",
    culturalNote: "Essential word for basic needs",
  },
];

const categories = [
  { id: "greetings", name: "Greetings", icon: "👋", count: 2 },
  { id: "introductions", name: "Introductions", icon: "🤝", count: 1 },
  { id: "food-drinks", name: "Food & Drinks", icon: "🍽️", count: 2 },
];

export default function VocabularyPage() {
  const { user } = useAppStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [learnedWords, setLearnedWords] = useState<string[]>([]);

  const filteredVocabulary = selectedCategory 
    ? sampleVocabulary.filter(word => word.category === selectedCategory)
    : sampleVocabulary;

  const currentWord = filteredVocabulary[currentWordIndex];

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const handleNextWord = () => {
    if (currentWordIndex < filteredVocabulary.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const handlePreviousWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  const handleMarkAsLearned = () => {
    if (currentWord && !learnedWords.includes(currentWord.id)) {
      setLearnedWords([...learnedWords, currentWord.id]);
    }
  };

  const isWordLearned = currentWord ? learnedWords.includes(currentWord.id) : false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-700">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Vocabulary</h1>
              <p className="text-gray-600">Learn Arabic words and phrases</p>
            </div>
          </div>
          {user && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{learnedWords.length} words learned</span>
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(selectedCategory === category.id ? null : category.id);
                  setCurrentWordIndex(0);
                }}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedCategory === category.id
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-gray-200 bg-white hover:border-indigo-300"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} words</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Word Card */}
        {currentWord && (
          <motion.div
            key={currentWord.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="text-center">
              {/* Arabic Word */}
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-2 arabic-text">
                  {currentWord.arabicWord}
                </h2>
                <p className="text-lg text-gray-600">{currentWord.transliteration}</p>
              </div>

              {/* Translation */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {currentWord.englishTranslation}
                </h3>
              </div>

              {/* Audio Button */}
              <div className="mb-6">
                <button
                  onClick={handlePlayAudio}
                  disabled={isPlaying}
                  className="flex items-center space-x-2 mx-auto bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                >
                  {isPlaying ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                  <span>{isPlaying ? "Playing..." : "Listen"}</span>
                </button>
              </div>

              {/* Example Sentence */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Example:</h4>
                <p className="text-lg arabic-text text-gray-900">{currentWord.exampleSentence}</p>
              </div>

              {/* Cultural Note */}
              <div className="mb-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="text-sm font-medium text-yellow-800 mb-2">Cultural Note:</h4>
                <p className="text-sm text-yellow-700">{currentWord.culturalNote}</p>
              </div>

              {/* Navigation and Actions */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePreviousWord}
                  disabled={currentWordIndex === 0}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  ← Previous
                </button>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleMarkAsLearned}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      isWordLearned
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isWordLearned ? "Learned" : "Mark as Learned"}</span>
                  </button>
                </div>

                <button
                  onClick={handleNextWord}
                  disabled={currentWordIndex === filteredVocabulary.length - 1}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  Next →
                </button>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{currentWordIndex + 1} of {filteredVocabulary.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentWordIndex + 1) / filteredVocabulary.length) * 100}%` }}
                    className="bg-indigo-600 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/quizzes">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Take Vocabulary Quiz</h3>
                  <p className="text-sm text-gray-600">Test your knowledge</p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/conversation">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <Play className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Practice in Conversation</h3>
                  <p className="text-sm text-gray-600">Use words in context</p>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
} 