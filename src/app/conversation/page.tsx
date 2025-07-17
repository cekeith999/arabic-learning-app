"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Mic, Settings } from "lucide-react";
import Link from "next/link";
import type { Message } from "@/types";

// Sample conversation data
const initialMessages: Message[] = [
  {
    id: "1",
    conversationId: "conv-1",
    content: "مرحبا! أنا أستاذ أحمد، مدرس اللغة العربية. كيف يمكنني مساعدتك اليوم؟",
    isUser: false,
    timestamp: new Date(Date.now() - 60000),
    visualCue: "👨‍🏫",
  },
  {
    id: "2",
    conversationId: "conv-1",
    content: "مرحبا أستاذ أحمد! أريد أن أتعلم العربية",
    isUser: true,
    timestamp: new Date(Date.now() - 30000),
  },
  {
    id: "3",
    conversationId: "conv-1",
    content: "ممتاز! سنبدأ بالأساسيات. هل تعرف كيف تقول 'مرحبا'؟",
    isUser: false,
    timestamp: new Date(Date.now() - 15000),
    visualCue: "👋",
  },
];

const suggestedTopics = [
  { id: "greetings", title: "Greetings", arabic: "التحيات", icon: "👋" },
  { id: "introductions", title: "Introductions", arabic: "التعارف", icon: "🤝" },
  { id: "food", title: "Food & Drinks", arabic: "الطعام والشراب", icon: "🍽️" },
  { id: "family", title: "Family", arabic: "العائلة", icon: "👨‍👩‍👧‍👦" },
  { id: "numbers", title: "Numbers", arabic: "الأرقام", icon: "🔢" },
  { id: "weather", title: "Weather", arabic: "الطقس", icon: "🌤️" },
];

export default function ConversationPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      conversationId: "conv-1",
      content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        conversationId: "conv-1",
        content: generateAIResponse(),
        isUser: false,
        timestamp: new Date(),
        visualCue: "👨‍🏫",
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (): string => {
    const responses = [
      "ممتاز! هذا صحيح تماماً. هل تريد أن نتعلم المزيد؟",
      "جيد جداً! دعني أعلمك كلمة جديدة...",
      "أحسنت! الآن دعنا نتدرب على النطق الصحيح.",
      "هذا رائع! هل تعرف معنى هذه الكلمة؟",
      "ممتاز! أنت تتعلم بسرعة. هل تريد أن نتعلم شيئاً آخر؟",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    const topicMessage: Message = {
      id: Date.now().toString(),
      conversationId: "conv-1",
      content: `Let's learn about ${suggestedTopics.find(t => t.id === topicId)?.title}!`,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, topicMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        conversationId: "conv-1",
        content: `ممتاز! سنتعلم عن ${suggestedTopics.find(t => t.id === topicId)?.arabic}. هل أنت مستعد؟`,
        isUser: false,
        timestamp: new Date(),
        visualCue: "📚",
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    // Simulate voice input
    setTimeout(() => {
      setIsRecording(false);
      setInputMessage("مرحبا أستاذ أحمد");
    }, 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-700">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Chat with Ustadh Ahmad</h1>
                <p className="text-sm text-gray-600">Your Arabic tutor</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.isUser
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                }`}
              >
                {!message.isUser && message.visualCue && (
                  <div className="text-2xl mb-2">{message.visualCue}</div>
                )}
                <div className={`${!message.isUser ? 'arabic-text' : ''}`}>
                  {message.content}
                </div>
                <div className={`text-xs mt-2 ${
                  message.isUser ? 'text-indigo-200' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white text-gray-900 shadow-sm border border-gray-200 px-4 py-3 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl">👨‍🏫</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Topics */}
        {!selectedTopic && (
          <div className="bg-white border-t border-gray-200 p-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Suggested Topics:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {suggestedTopics.map((topic) => (
                <motion.button
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic.id)}
                  className="flex items-center space-x-2 p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{topic.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{topic.title}</div>
                    <div className="text-xs text-gray-600 arabic-text">{topic.arabic}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={handleVoiceInput}
              disabled={isRecording}
              className={`p-3 rounded-full ${
                isRecording 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Mic className="w-5 h-5" />
            </button>
            
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message in Arabic or English..."
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          {isRecording && (
            <div className="mt-3 text-center">
              <div className="flex items-center justify-center space-x-2 text-red-600">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-sm">Recording...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 