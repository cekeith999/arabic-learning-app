use client;

import [object Object]useState } fromreact;
import { motion } fromframer-motion';
import [object Object] ArrowLeft, CheckCircle, XCircle, Trophy } from 'lucide-react';
import Link from 'next/link';

const quizQuestions = [
  {
    id: 1,   question: What does "مرحبا" mean?,  options: ['Thank you',Hello', Goodbye', 'Please'],
    correctAnswer: 'Hello,
    explanation: 'مرحبا (marhaba) is a friendly greeting meaningHello inArabic.,
    arabicText: مرحبا,
  },
  {
    id: 2,   question:What does شكراean?,  options: ['Hello',Goodbye', 'Thank you', 'Please'],
    correctAnswer: 'Thank you,
    explanation: 'شكرا (shukran) means "Thank you inArabic.,
    arabicText:شكرا,
  },
  {
    id: 3,   question:What does قهوةean?,
    options:Tea, Coffee', Water', 'Milk'],
    correctAnswer: 'Coffee,
    explanation: 'قهوة (qahwa) means Coffee inArabic.,
    arabicText:قهوة,
  },
  {
    id: 4,   question:What does واحدean?,    options: ['Two,One', Three', 'Zero'],
    correctAnswer: 'One,
    explanation: 'واحد (waahid) means "One inArabic.,
    arabicText:واحد,
  },
  {
    id: 5,   question:What does أحمرean?,   options:Blue,Green', Red', 'Yellow'],
    correctAnswer: 'Red,
    explanation: 'أحمر (ahmar) means "Red inArabic.,
    arabicText:أحمر,
  },];

export default function QuizzesPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  constscore, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return;
    setSelectedAnswer(answer);
  };

  const handleNext = () => [object Object]if (selectedAnswer === currentQuestion.correctAnswer)[object Object]    setScore(score +1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) [object Object]setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const progressPercentage = ((currentQuestionIndex + 1izQuestions.length) * 100;

  if (quizCompleted)[object Object]  const finalScore = score + (selectedAnswer === currentQuestion.correctAnswer ?1  const percentage = Math.round((finalScore / quizQuestions.length) * 100   const isPerfect = percentage === 10    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50digo-100    <div className=container mx-auto px-4py-6    <div className="max-w-md mx-auto text-center">
            <motion.div
              initial={{ opacity:08           animate={{ opacity: 1, scale: 1        transition={{ duration: 0.5         className=bg-white rounded-2xl shadow-lg p-8   >
              {isPerfect ? (
                <div className=text-6xl mb-4">🎉</div>
              ) : (
                <div className=text-6xl mb-4">🏆</div>
              )}
              
              <h1 className="text-2ont-bold text-gray-900 mb-4>              Quiz Completed!
              </h1    
              <div className="text-4ont-bold text-blue-600 mb-4>
                {finalScore}/{quizQuestions.length}
              </div>
              
              <div className=text-lg text-gray-600 mb-6>
                {percentage}% -[object Object]percentage >=80ent!: percentage >= 60 ? 'Good job!' : Keep practicing!'}
              </div>

              <div className="space-y-4>
                <button
                  onClick={handleRetry}
                  className="w-full bg-blue-50white py-3 rounded-full hover:bg-blue-600 transition-colors"
                >
                  Try Again
                </button>
                <Link
                  href="/dashboard"
                  className="block w-full bg-gray-100 text-gray-700 py-3 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Back to Dashboard
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50indigo-100">
      <div className=container mx-auto px-4 py-6">
        {/* Header */}
        <div className=flex items-center justify-between mb-6>        <Link href="/dashboard" className=flexitems-center space-x-2 text-gray-600over:text-gray-80            <ArrowLeft className="w-5 h-5 />
            <span>Back to Dashboard</span>
          </Link>
          <div className="text-center>     <h1 className="text-2ont-bold text-gray-900>Arabic Quiz</h1>
            <p className="text-gray-600">Test your knowledge</p>
          </div>
          <div className="w-20></div>
        </div>

        {/* Progress */}
        <div className="mb-6    <div className="flex justify-between text-sm text-gray-600 mb-2
            <span>Progress</span>
            <span>{currentQuestionIndex + 1} / {quizQuestions.length}</span>
          </div>
          <div className="w-full bg-gray-200ounded-full h-2           <motion.div
              initial={{ width: 0           animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5         className="bg-gradient-to-r from-green-400en-600h-2 rounded-full         ></motion.div>
          </div>
        </div>

        {/* Question Card */}
        <div className=max-w-2xl mx-auto">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x:20           animate=[object Object]{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3         className=bg-white rounded-2xl shadow-lg p-6"
          >
            {/* Question */}
            <div className="mb-6>
              <h2 className="text-xl font-semibold text-gray-900 mb-4>
                {currentQuestion.question}
              </h2          {currentQuestion.arabicText && (
                <div className="text-3ont-bold text-gray-8004c-text text-center">
                  {currentQuestion.arabicText}
                </div>
              )}
            </div>

            {/* Options */}
            <div className=space-y-3 mb-6>          {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate=[object Object]{ opacity: 1, y: 0 }}
                  transition={{ duration:0.3, delay: index * 0.1 }}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedAnswer === option
                      ? isCorrect
                        ?border-green-500                   : border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${showResult ? cursor-default' : cursor-pointer'}`}
                >
                  <div className=flex items-center justify-between">
                    <span className="font-medium>{option}</span>                   {showResult && selectedAnswer === option && (
                      isCorrect ? (
                        <CheckCircle className="w-5h-5ext-green-500" />
                      ) : (
                        <XCircle className=w-5 h-5 text-red-500" />
                      )
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Result */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity:1height: 'auto' }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-lg mb-6 ${
                  isCorrect ? 'bg-green-50 border border-green-200bg-red-50 border border-red-200
                }`}
              >
                <div className=flexitems-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="w-5h-5ext-green-500" />
                  ) : (
                    <XCircle className=w-5 h-5 text-red-500" />
                  )}
                  <span className={`font-medium ${isCorrect ? text-green-800: 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                <p className=text-sm text-gray-700>{currentQuestion.explanation}</p>
              </motion.div>
            )}

        [object Object]/* Navigation */}
            <div className="flex justify-end>
              {!showResult ? (
                <button
                  onClick={() => setShowResult(true)}
                  disabled={!selectedAnswer}
                  className="bg-blue-50text-white px-6 py-2 rounded-full hover:bg-blue-600 disabled:opacity-50isabled:cursor-not-allowed transition-colors"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className=bg-green-50text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  {currentQuestionIndex === quizQuestions.length -1 ?Finish Quiz :Next Question}                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 