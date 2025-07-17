"use client";

import { motion } from "framer-motion";
import { Flame, Star, Gem, Trophy } from "lucide-react";
import type { User } from "@/types";
import { calculateLevel } from "@/lib/utils";

interface DashboardHeaderProps {
  user: User;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  const currentLevel = calculateLevel(user.xp);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">مرحبا، {user.name}! 👋</h1>
            <p className="text-gray-600">Level {currentLevel} • {user.dialectPreference} Arabic</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full">
            <Flame className="w-5 h-5 text-orange-500" />
            <div>
              <p className="text-sm font-medium text-orange-700">{user.streak}</p>
              <p className="text-xs text-orange-600">Streak</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-blue-700">{user.xp}</p>
              <p className="text-xs text-blue-600">XP</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
            <Gem className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="text-sm font-medium text-yellow-700">{user.lingots}</p>
              <p className="text-xs text-yellow-600">Lingots</p>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
            <Trophy className="w-5 h-5 text-purple-500" />
            <div>
              <p className="text-sm font-medium text-purple-700">{currentLevel}</p>
              <p className="text-xs text-purple-600">Level</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-700">Goal</p>
          <p className="text-sm text-gray-500">3/5 lessons completed</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 1 }} className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"></motion.div>
        </div>
      </div>
    </motion.div>
  );
} 