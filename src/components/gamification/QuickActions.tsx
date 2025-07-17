use client';

import { motion } fromframer-motion';
import [object Object] MessageCircle, BookOpen, Target, Globe } from 'lucide-react';
import Link from 'next/link';

const quickActions = [object Object] id: 'conversation',
    title: 'Start Conversation,
    description:Chat with Ustadh Ahmad',
    icon: MessageCircle,
    href:/conversation',
    color:from-blue-500 to-blue-600,
    bgColor:bg-blue-50,
    textColor:text-blue-70,
    xpReward: '+10 XP,
  },
  {
    id:vocabulary',
    title:Vocabulary,
    description: 'Learn new words',
    icon: BookOpen,
    href: /vocabulary',
    color: from-green-50to-green-600,
    bgColor: bg-green-50,
    textColor: text-green-70,
    xpReward: +5 XP,
  },
  [object Object]   id: quiz',
    title: 'Take Quiz,
    description: 'Test your knowledge',
    icon: Target,
    href: '/quizzes',
    color: 'from-purple-500o-purple-600,
    bgColor: 'bg-purple-50,
    textColor: 'text-purple-70,
    xpReward: '+15 XP,
  },
  {
    id: 'cultural',
    title: Cultural Insights,
    description:Learnabout Arab culture,
    icon: Globe,
    href: '/cultural-insights',
    color: 'from-orange-500o-orange-600,
    bgColor: 'bg-orange-50,
    textColor: 'text-orange-70,
    xpReward: +5 XP,
  },];

export default function QuickActions() [object Object]
  return (
    <motion.div
      initial={{ opacity:00}
      animate=[object Object]{ opacity: 1, y: 0 }}
      transition={{ duration: 00.5elay: 0.3 }}
      className=bg-white rounded-2xl shadow-lg p-6     <h2 className=text-xl font-bold text-gray-900 mb-6>Quick Actions</h2>
      
      <div className="space-y-4    [object Object]quickActions.map((action, index) => (
          <motion.div
            key={action.id}
            initial={[object Object]opacity: 0, x: -20           animate=[object Object]{ opacity: 1, x: 0 }}
            transition={{ duration:0.5, delay: index * 0.1
            whileHover={{ scale: 10.02
            whileTap={{ scale:098     >
            <Link href={action.href}>
              <div className={`
                ${action.bgColor} rounded-xl p-4er
                transition-all duration-300md
                border border-transparent hover:border-gray-20              `}>
                <div className=flex items-center justify-between">
                  <div className=flexitems-center space-x-3">
                    <div className={`
                      w-12-12g-gradient-to-r ${action.color} 
                      rounded-full flex items-center justify-center
                    `}>
                      <action.icon className="w-6-6                   </div>
                    <div>
                      <h3assName={`font-semibold ${action.textColor}`}>
                        {action.title}
                      </h3>
                      <p className=text-sm text-gray-600">
             [object Object]action.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-xs font-medium ${action.textColor}`}>
                      {action.xpReward}
                    </div>
                    <div className=text-xs text-gray-500">
                      Tap to start
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    [object Object]/* Daily Challenge */}
      <div className="mt-6 pt-6rder-t border-gray-200    <div className="bg-gradient-to-r from-indigo-500purple-600ounded-xl p-4 text-white">
          <div className=flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Daily Challenge</h3>
              <p className="text-sm opacity-90">Complete 3lessons today</p>
              <div className=flexitems-center space-x-2 mt-2>
                <div className=w-2-green-300ounded-full"></div>
                <div className=w-2-green-300ounded-full"></div>
                <div className="w-2g-gray-300ounded-full"></div>
                <div className="w-2g-gray-300ounded-full"></div>
                <div className="w-2g-gray-300ounded-full"></div>
              </div>
            </div>
            <div className="text-right>              <div className=text-2xl">🎯</div>
              <div className="text-xs opacity-90</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 