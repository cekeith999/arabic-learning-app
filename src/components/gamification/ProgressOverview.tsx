use client';

import { motion } fromframer-motion';
import [object Object] TrendingUp, BookOpen, Target, Award } from 'lucide-react';
import type { User } from@/types';

interface ProgressOverviewProps {
  user: User;
  currentLevel: number;
  progressToNextLevel: number;
}

export default function ProgressOverview({ 
  user, 
  currentLevel, 
  progressToNextLevel 
}: ProgressOverviewProps) [object Object]
  return (
    <motion.div
      initial={{ opacity:00}
      animate=[object Object]{ opacity: 1, y: 0 }}
      transition={{ duration: 00.5elay: 0.1 }}
      className=bg-white rounded-2xl shadow-lg p-6     <h2 className=text-xl font-bold text-gray-900>Progress Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2ap-6">
        {/* Level Progress */}
        <div className="space-y-4    <div className=flexitems-center space-x-3>
            <div className="w-10-10 bg-gradient-to-br from-purple-500purple-600 rounded-full flex items-center justify-center>
              <Award className="w-5-5te" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-90evel {currentLevel}</h3>
              <p className=text-sm text-gray-600user.xp} XP earned</p>
            </div>
          </div>
          
          <div className="space-y-2>
            <div className="flex justify-between text-sm>             <span className="text-gray-600">Progress to Level {currentLevel + 1}</span>
              <span className="font-medium text-gray-900ath.round(progressToNextLevel)}%</span>
            </div>
            <div className="w-full bg-gray-200ounded-full h-3>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressToNextLevel}%` }}
                transition={{ duration:1}}
                className="bg-gradient-to-r from-purple-400 to-purple-600h-3 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="space-y-4    <div className=flexitems-center space-x-3>
            <div className="w-10-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center>             <BookOpen className="w-5-5te" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-90>Vocabulary</h3>
              <p className=text-sm text-gray-600>5words learned</p>
            </div>
          </div>
          
          <div className=flexitems-center space-x-3>
            <div className="w-10-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center>           <Target className="w-5-5te" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900/h3>
              <p className=text-sm text-gray-60>2 completed • 85% avg</p>
            </div>
          </div>
          
          <div className=flexitems-center space-x-3>
            <div className="w-10-10 bg-gradient-to-br from-orange-500orange-600 rounded-full flex items-center justify-center>            <TrendingUp className="w-5-5te" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900>Conversations</h3>
              <p className=text-sm text-gray-60>3completed •15al</p>
            </div>
          </div>
        </div>
      </div>[object Object]/* Weekly Progress Chart */}
      <div className=mt-8">
        <h3 className="font-semibold text-gray-90 mb-4">This Week's Activity</h3>
        <div className=flex space-x-2>
          {[Mon,Tue,Wed,Thu,Fri',Sat, 'Sun'].map((day, index) => (
            <div key={day} className="flex-1 text-center>              <div className=text-xs text-gray-500mb-1">{day}</div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${Math.random() * 60 + 20}px` }}
                transition={{ duration:0.5, delay: index * 0.1 }}
                className="bg-gradient-to-t from-indigo-400indigo-600 rounded-t-sm mx-1
              ></motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Preview */}
      <div className=mt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Achievements</h3>
        <div className=flex space-x-4    <div className=flexitems-center space-x-3 bg-yellow-50 px-4 py-2full">
            <span className="text-2xl">💬</span>
            <div>
              <p className="text-sm font-medium text-yellow-800">First Conversation</p>
              <p className="text-xs text-yellow-600">+50 XP</p>
            </div>
          </div>
          <div className=flexitems-center space-x-3 bg-orange-50 px-4 py-2full">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-sm font-medium text-orange-800>3-Day Streak</p>
              <p className="text-xs text-orange-600">+20 XP</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 