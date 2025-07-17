"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

// Sample quiz data
const quizQuestions = [
  {
    id: "q1",
    question: "What is the Arabic word for 'Hello'?",
    options: [
      { id: "a", text: "مرحبا" },
      { id: "b", text: "شكرا" },
      { id: "c", text: "قهوة" },
      { id: "d", text: "ماء" },
    ],
    correctOptionId: "a",
    explanation: "'مرحبا' (Marhaba) means 'Hello' in Arabic.",
  },
  {
    id: "q2",
    question: "How do you say 'Thank you' in Arabic?",
    options: [
      { id: "a", text: "قهوة" },
      { id: "b", text: "شكرا" },
      { id: "c", text: "ماء" },
      { id: "d", text: "اسمي" },
    ],
    correctOptionId: "b",
    explanation: "'شكرا' (Shukran) means 'Thank you'.",
  },
  {
    id: "q3",
    question: "What is the English translation of 'ماء'?",
    options: [
      { id: "a", text: "Coffee" },
      { id: "b", text: "Water" },
      { id: "c", text: "Hello" },
      { id: "d", text: "Thank you" },
    ],
    correctOptionId: "b",
    explanation: "'ماء' (Maa) means 'Water'.",
  },
];

export default function QuizzesPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOptionId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOptionId) return;
    const correct = selectedOptionId === currentQuestion.correctOptionId;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOptionId(null);
    setIsCorrect(null);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setShowFeedback(false);
    setIsCorrect(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-700">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Quiz</h1>
        </div>

        {/* Quiz Content */}
        {!quizFinished ? (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </h2>
              <p className="text-xl text-gray-800 mb-4">{currentQuestion.question}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-6">
              {currentQuestion.options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  disabled={showFeedback}
                  className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all focus:outline-none ${
                    selectedOptionId === option.id
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-200 bg-white hover:border-indigo-300"
                  }`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{option.text}</span>
                </motion.button>
              ))}
            </div>
            {/* Feedback */}
            {showFeedback && (
              <div className="mb-6">
                {isCorrect ? (
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span>Correct!</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-red-600">
                    <XCircle className="w-5 h-5" />
                    <span>Incorrect.</span>
                  </div>
                )}
                <div className="mt-2 text-gray-700 text-sm">
                  {currentQuestion.explanation}
                </div>
              </div>
            )}
            {/* Actions */}
            <div className="flex justify-end space-x-4">
              {!showFeedback ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedOptionId}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                >
                  {currentQuestionIndex < quizQuestions.length - 1 ? "Next" : "Finish"}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quiz Finished!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Your score: <span className="font-semibold text-indigo-600">{score} / {quizQuestions.length}</span>
            </p>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 