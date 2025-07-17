"use client";

import { motion } from "framer-motion";
import { Lock, CheckCircle, Play } from "lucide-react";

const skills = [
  {
    id: "greetings",
    name: "Greetings",
    description: "Learn basic greetings and introductions",
    icon: "👋",
    level: 1,
    xpRequired: 0,
    isUnlocked: true,
    isCompleted: true,
    progress: 100,
    vocabulary: ["مرحبا", "شكرا", "اسمي"],
    color: "from-green-400 to-green-600",
  },
  {
    id: "numbers",
    name: "Numbers",
    description: "Count from 1 to 10 in Arabic",
    icon: "🔢",
    level: 1,
    xpRequired: 50,
    isUnlocked: true,
    isCompleted: false,
    progress: 60,
    vocabulary: ["واحد", "اثنان", "ثلاثة"],
    color: "from-blue-400 to-blue-600",
  },
  {
    id: "food",
    name: "Food & Drinks",
    description: "Talk about your favorite foods",
    icon: "🍽️",
    level: 2,
    xpRequired: 100,
    isUnlocked: true,
    isCompleted: false,
    progress: 30,
    vocabulary: ["قهوة", "شاي", "خبز"],
    color: "from-orange-400 to-orange-600",
  },
  {
    id: "family",
    name: "Family",
    description: "Learn family member names",
    icon: "👨‍👩‍👧‍👦",
    level: 2,
    xpRequired: 150,
    isUnlocked: false,
    isCompleted: false,
    progress: 0,
    vocabulary: ["أم", "أب", "أخ"],
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "colors",
    name: "Colors",
    description: "Learn basic colors in Arabic",
    icon: "🎨",
    level: 3,
    xpRequired: 200,
    isUnlocked: false,
    isCompleted: false,
    progress: 0,
    vocabulary: ["أحمر", "أزرق", "أخضر"],
    color: "from-pink-400 to-pink-600",
  },
];

export default function SkillTree() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Path</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative ${index < skills.length - 1 ? "pb-8" : ""}`}
          >
            {/* Skill Card */}
            <div
              className={`relative bg-gradient-to-r ${skill.color} rounded-xl p-4 text-white ${
                !skill.isUnlocked ? "opacity-50" : ""
              } ${skill.isCompleted ? "ring-4 ring-green-300" : ""} transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <p className="text-sm opacity-90">{skill.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-1">Level {skill.level}</span>
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-1">{skill.vocabulary.length} words</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Status Icon */}
                  {skill.isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-green-200" />
                  ) : !skill.isUnlocked ? (
                    <Lock className="w-6 h-6 text-gray-400" />
                  ) : (
                    <Play className="w-6 h-6 text-blue-500" />
                  )}
                </div>
              </div>
              {/* Progress Bar */}
              {skill.isUnlocked && !skill.isCompleted && (
                <div className="mt-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1 }}
                      className="bg-white h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              )}
            </div>
            {/* Connection Line */}
            {index < skills.length - 1 && (
              <div className="absolute left-6 top-full w-0.5 h-8 bg-gray-300"></div>
            )}
          </motion.div>
        ))}
      </div>
      {/* Legend */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Legend</h4>
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-gray-600">Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <Play className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Locked</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 