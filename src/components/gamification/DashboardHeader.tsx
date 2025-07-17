use client';

import { motion } fromframer-motion;
import [object Object] Flame, Star, Gem, Trophy } from 'lucide-react';
import type { User } from@/types';
import { calculateLevel } from '@/lib/utils';

interface DashboardHeaderProps {
  user: User;
}

export default function DashboardHeader({ user }: DashboardHeaderProps)[object Object]const currentLevel = calculateLevel(user.xp);

  return (
    <motion.div
      initial={[object Object]opacity: 00}
      animate=[object Object]{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=bg-white rounded-2l shadow-lg p-6 mb-6
    >    <div className=flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* User Info */}
        <div className=flexitems-center space-x-4m:mb-0    <div className="relative">
            <div className="w-16-16 bg-gradient-to-br from-indigo-500purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold>             [object Object]user.name.charAt(0ase()}
            </div>
            <div className=absolute -bottom-1 -right-1 bg-green-500ounded-full p-1>              <div className="w-4 h-4white rounded-full flex items-center justify-center>
                <div className=w-2-green-500ounded-full"></div>
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-2ont-bold text-gray-90
              مرحباً، {user.name}! 👋
            </h1>
            <p className="text-gray-60             Level {currentLevel} • {user.dialectPreference} Arabic
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-4          {/* Streak */}
          <motion.div
            whileHover={{ scale: 10.05         className=flexitems-center space-x-2 bg-orange-50 px-4 py-2 rounded-full"
          >
            <Flame className="w-5-5-orange-500 streak-flame />
            <div>
              <p className="text-sm font-medium text-orange-700>{user.streak}</p>
              <p className="text-xs text-orange-600ak</p>
            </div>
          </motion.div>

          {/* XP */}
          <motion.div
            whileHover={{ scale: 10.05         className=flexitems-center space-x-2bg-blue-50 px-4 py-2 rounded-full"
          >
            <Star className=w-5 h-5 text-blue-50 />
            <div>
              <p className="text-sm font-medium text-blue-70</p>
              <p className=text-xs text-blue-600XP</p>
            </div>
          </motion.div>

          {/* Lingots */}
          <motion.div
            whileHover={{ scale: 10.05         className=flexitems-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full"
          >
            <Gem className="w-5-5xt-yellow-50 />
            <div>
              <p className="text-sm font-medium text-yellow-700>{user.lingots}</p>
              <p className="text-xs text-yellow-600ts</p>
            </div>
          </motion.div>

          {/* Level */}
          <motion.div
            whileHover={{ scale: 10.05         className=flexitems-center space-x-2 bg-purple-50 px-4 py-2 rounded-full"
          >
            <Trophy className="w-5-5xt-purple-50 />
            <div>
              <p className="text-sm font-medium text-purple-700>{currentLevel}</p>
              <p className="text-xs text-purple-600">Level</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Daily Goal Progress */}
      <div className="mt-6">
        <div className=flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-700Goal</p>
          <p className=text-sm text-gray-500">3/5 lessons completed</p>
        </div>
        <div className="w-full bg-gray-200ounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '60        transition={{ duration:10.5         className="bg-gradient-to-r from-green-400en-600h-2 rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
} 