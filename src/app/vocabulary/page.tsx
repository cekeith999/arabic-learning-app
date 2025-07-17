use client';

import[object Object] useState } fromreact;
import { motion } fromframer-motion;
import { Volume2ArrowLeft, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import[object Object]DEFAULT_VOCABULARY } from '@/lib/constants;

export default function VocabularyPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const currentWord = DEFAULT_VOCABULARY[currentIndex];

  const handleNext = () =>[object Object]  if (currentIndex < DEFAULT_VOCABULARY.length - 1) [object Object]   setCurrentIndex(currentIndex +1setShowTranslation(false);
    }
  };

  const handlePrevious = () =>[object Object]  if (currentIndex > 0) [object Object]   setCurrentIndex(currentIndex -1setShowTranslation(false);
    }
  };

  const toggleFavorite = () => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(currentWord.id)) {
      newFavorites.delete(currentWord.id);
    } else {
      newFavorites.add(currentWord.id);
    }
    setFavorites(newFavorites);
  };

  const playAudio = () => [object Object]  // In a real app, this would play the actual audio file
    console.log(Playing audio for:', currentWord.arabicWord);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50indigo-100">
      <div className=container mx-auto px-4 py-6">
        {/* Header */}
        <div className=flex items-center justify-between mb-6>        <Link href="/dashboard" className=flexitems-center space-x-2 text-gray-600over:text-gray-80            <ArrowLeft className="w-5 h-5 />
            <span>Back to Dashboard</span>
          </Link>
          <div className="text-center>     <h1 className="text-2ont-bold text-gray-90>Vocabulary</h1>
            <p className="text-gray-600Learn Arabic words with flashcards</p>
          </div>
          <div className="w-20></div>
        </div>

        {/* Progress */}
        <div className="mb-6    <div className="flex justify-between text-sm text-gray-600 mb-2
            <span>Progress</span>
            <span>{currentIndex +1} / {DEFAULT_VOCABULARY.length}</span>
          </div>
          <div className="w-full bg-gray-200ounded-full h-2           <motion.div
              initial={{ width: 0           animate={{ width: `$[object Object]((currentIndex + 1 / DEFAULT_VOCABULARY.length) * 100}%` }}
              transition={{ duration: 0.5         className="bg-gradient-to-r from-green-400en-600h-2 rounded-full         ></motion.div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="max-w-md mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity:00.8           animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3         className=bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-50-blue-600 p-4 text-white>              <div className=flex items-center justify-between>
                <span className="text-sm opacity-90">{currentWord.category}</span>
                <button
                  onClick={toggleFavorite}
                  className={`${favorites.has(currentWord.id) ?text-yellow-300text-white opacity-70 hover:opacity-100'}`}
                >
                  <Star className="w-5 h-5ill={favorites.has(currentWord.id) ? currentColor' : 'none'} />
                </button>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 text-center">
              {/* Arabic Word */}
              <div className="mb-6>
                <div className="text-4ont-bold text-gray-900b-2 arabic-text">
                 [object Object]currentWord.arabicWord}
                </div>
                <div className=text-lg text-gray-600 mb-4">
                  {currentWord.transliteration}
                </div>
                <button
                  onClick={playAudio}
                  className=inline-flex items-center space-x-2-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Listen</span>
                </button>
              </div>

              {/* Translation */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: showTranslation ? 1 : 0, height: showTranslation ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className=overflow-hidden >
                <div className="border-t border-gray-200 pt-4">
                  <div className=text-2font-semibold text-gray-900 mb-2">
                    {currentWord.englishTranslation}
                  </div>
                  {currentWord.exampleSentence && (
                    <div className=text-sm text-gray-600b-3 arabic-text">
                      {currentWord.exampleSentence}
                    </div>
                  )}
                  {currentWord.culturalNote && (
                    <div className=text-xs text-gray-500ray-50 p-3 rounded-lg">
                      💡 {currentWord.culturalNote}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Show/Hide Button */}
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="mt-4gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors >
                {showTranslation ? Hide Translation' :Show Translation'}
              </button>
            </div>
          </motion.div>

      [object Object]/* Navigation */}
          <div className=flex items-center justify-between mt-6           <button
              onClick={handlePrevious}
              disabled=[object Object]currentIndex === 0}
              className=flexitems-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg disabled:opacity-50isabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5/>
              <span>Previous</span>
            </button>

            <div className=text-sm text-gray-60>          {currentIndex + 1 of {DEFAULT_VOCABULARY.length}
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === DEFAULT_VOCABULARY.length - 1}
              className=flexitems-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg disabled:opacity-50isabled:cursor-not-allowed transition-all"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5 />
            </button>
          </div>
        </div>

        {/* Word List */}
        <div className="mt-8     <h3 className="text-lg font-semibold text-gray-90 mb-4rds</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4        [object Object]DEFAULT_VOCABULARY.map((word, index) => (
              <motion.button
                key={word.id}
                initial={{ opacity: 0, y: 20 }}
                animate=[object Object]{ opacity: 1, y: 0 }}
                transition={{ duration:0.3, delay: index * 0.1 }}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-xl border-2transition-all ${
                  index === currentIndex
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-20white hover:border-gray-300
                }`}
              >
                <div className=text-right arabic-text text-lg font-semibold mb-1">
                  {word.arabicWord}
                </div>
                <div className=text-sm text-gray-600">
                  {word.englishTranslation}
                </div>
                <div className=text-xs text-gray-500 mt-1">
                  {word.category}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 