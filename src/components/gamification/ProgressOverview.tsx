"use client";

import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Target, Award } from "lucide-react";
import type { User } from "@/types";

interface ProgressOverviewProps {
  user: User;
  currentLevel: number;
  progressToNextLevel: number;
}

export default function ProgressOverview({ user, currentLevel, progressToNextLevel }: ProgressOverviewProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Progress Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Level {currentLevel}</h3>
              <p className="text-sm text-gray-600">{user.xp} XP earned</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progress to Level {currentLevel + 1}</span>
              <span className="font-medium text-gray-900">{Math.round(progressToNextLevel)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div initial={{ width: 0 }} animate={{ width: `${progressToNextLevel}%` }} transition={{ duration: 1 }} className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full"></motion.div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Vocabulary</h3>
              <p className="text-sm text-gray-600">50 words learned</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Quizzes</h3>
              <p className="text-sm text-gray-600">2 completed • 85% avg</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Conversations</h3>
              <p className="text-sm text-gray-600">3 completed • 15 total</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 