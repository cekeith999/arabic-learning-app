"use client";

import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Target, Globe } from "lucide-react";
import Link from "next/link";

const quickActions = [
  {
    id: "conversation",
    title: "Start Conversation",
    description: "Chat with Ustadh Ahmad",
    icon: MessageCircle,
    href: "/conversation",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    xpReward: "+10 XP",
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    description: "Learn new words",
    icon: BookOpen,
    href: "/vocabulary",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    xpReward: "+5 XP",
  },
  {
    id: "quiz",
    title: "Take Quiz",
    description: "Test your knowledge",
    icon: Target,
    href: "/quizzes",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    xpReward: "+15 XP",
  },
  {
    id: "cultural",
    title: "Cultural Insights",
    description: "Learn about Arab culture",
    icon: Globe,
    href: "/cultural-insights",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    xpReward: "+5 XP",
  },
];

export default function QuickActions() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
      <div className="space-y-4">
        {quickActions.map((action, index) => (
          <motion.div
            key={action.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={action.href}>
              <div className={`${action.bgColor} rounded-xl p-4 transition-all duration-300 border border-transparent hover:border-gray-200`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-full flex items-center justify-center`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${action.textColor}`}>{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
                <div className="text-right mt-2">
                  <div className={`text-xs font-medium ${action.textColor}`}>{action.xpReward}</div>
                  <div className="text-xs text-gray-500">Tap to start</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 