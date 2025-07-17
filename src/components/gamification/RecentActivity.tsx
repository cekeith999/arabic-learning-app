"use client";

import { motion } from "framer-motion";
import { Clock, Trophy, Star, MessageCircle } from "lucide-react";
import { formatTime, isToday } from "@/lib/utils";

const recentActivities = [
  {
    id: "1",
    type: "conversation",
    title: "Completed Greetings Conversation",
    description: "You practiced with Ustadh Ahmad",
    time: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    xpEarned: 15,
    icon: MessageCircle,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "2",
    type: "achievement",
    title: "First Conversation",
    description: "You earned a new badge!",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    xpEarned: 50,
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    id: "3",
    type: "vocabulary",
    title: "Learned 3 Words",
    description: "مرحبا, شكرا, اسمي",
    time: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    xpEarned: 30,
    icon: Star,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "4",
    type: "streak",
    title: "3-Day Streak!",
    description: "Keep up the great work!",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    xpEarned: 20,
    icon: Trophy,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        <Clock className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${activity.bgColor} rounded-xl p-4`}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 ${activity.bgColor} rounded-full flex items-center justify-center`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 text-sm">{activity.title}</h3>
                <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs text-gray-500">
                    {isToday(activity.time)
                      ? formatTime(activity.time)
                      : activity.time.toLocaleDateString()}
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    +{activity.xpEarned} XP
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
          View All Activity
        </button>
      </div>
    </motion.div>
  );
} 