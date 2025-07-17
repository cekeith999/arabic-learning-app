use client;

import [object Object]useState, useEffect } fromreact;
import { motion } fromframer-motion';
import [object Object] Send, Volume2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Message } from@/types';

const demoMessages: Message[] = 
  object Object] id: '1',
    conversationId: 'demo-1,
    content:مرحبا! أنا أستاذ أحمد. كيف حالك؟',
    isUser: false,
    timestamp: new Date(Date.now() - 5 * 60 * 100,
    audioUrl: /audio/marhaba.mp3,
    visualCue: '👋',
  },
  object Object] id: '2',
    conversationId: 'demo-1,
    content:مرحبا! أنا بخير، شكرا',
    isUser: true,
    timestamp: new Date(Date.now() -4 60 * 1000,
  object Object] id: '3',
    conversationId: 'demo-1,
    content: ممتاز! هل تريد أن تتعلم بعض الكلمات الجديدة؟',
    isUser: false,
    timestamp: new Date(Date.now() - 3 * 60 * 100,
    audioUrl: '/audio/learn-words.mp3,
    visualCue: '📚',
  },
  object Object] id: '4',
    conversationId: 'demo-1,
    content: 'نعم، من فضلك',
    isUser: true,
    timestamp: new Date(Date.now() -2 60 * 1000,
  object Object] id: '5',
    conversationId: 'demo-1,
    content: حسناً! دعنا نتعلم كلمة قهوة (coffee). كرر معي: قهوة',
    isUser: false,
    timestamp: new Date(Date.now() - 1 * 60 * 100,
    audioUrl:/audio/qahwa.mp3,
    visualCue: '☕,
  },];

export default function ConversationPage() {
  const [messages, setMessages] = useState<Message[]>(demoMessages);
  const [inputMessage, setInputMessage] = useState(');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      conversationId: 'demo-1    content: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        conversationId:demo-1,
        content:ممتاز! أنت تتعلم بسرعة. هل تريد أن تتعلم المزيد؟,     isUser: false,
        timestamp: new Date(),
        audioUrl:/audio/excellent.mp3,
        visualCue: '👏',
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 200};

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50indigo-100">
      <div className=container mx-auto px-4 py-6">
        {/* Header */}
        <div className=flex items-center justify-between mb-6>        <Link href="/dashboard" className=flexitems-center space-x-2 text-gray-600over:text-gray-80            <ArrowLeft className="w-5 h-5 />
            <span>Back to Dashboard</span>
          </Link>
          <div className="text-center>     <h1 className="text-2ont-bold text-gray-900>Chat with Ustadh Ahmad</h1>
            <p className="text-gray-600rabic conversation</p>
          </div>
          <div className="w-20></div> {/* Spacer for centering */}
        </div>

        {/* Chat Container */}
        <div className=bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-50-blue-600 p-4 text-white">
            <div className=flexitems-center space-x-3>              <div className="w-10-10g-white bg-opacity-20 rounded-full flex items-center justify-center>
                <span className="text-xl">👨‍🏫</span>
              </div>
              <div>
                <h2 className="font-semibold>Ustadh Ahmad</h2
                <p className="text-sm opacity-90>Arabic Tutor</p>
              </div>
              <div className="ml-auto>
                <div className=w-3-green-400ounded-full"></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4         {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate=[object Object]{ opacity: 1, y: 0 }}
                transition={{ duration:0.3, delay: index * 0.1 }}
                className={`flex ${message.isUser ?justify-end :justify-start}`}
              >
                <div className={`max-w-xs lg:max-w-md ${message.isUser ? order-2 : 
                  <div className={`rounded-2                   message.isUser 
                      ?bg-blue-500                   :bg-gray-10
                  }`}>
                    {message.visualCue && (
                      <div className="text-2xl mb-1>{message.visualCue}</div>
                    )}
                    <div className="arabic-text text-right>{message.content}</div>
                    {message.audioUrl && (
                      <button className="mt-2text-sm opacity-70 hover:opacity-100">
                        <Volume2 className=w-44                   Listen
                      </button>
                    )}
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${
                    message.isUser ? 'text-right' : 'text-left'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start >
                <div className="bg-gray-100ounded-2xl px-4 py-2">
                  <div className=flex space-x-1                   <div className="w-2g-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2g-gray-400 rounded-full animate-bounce" style={{ animationDelay:0.1s                   <div className="w-2g-gray-400 rounded-full animate-bounce" style={{ animationDelay:0.2s
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4>
            <div className=flex space-x-2>            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder=Type your message in Arabic..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2ocus:ring-blue-500
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 disabled:opacity-50isabled:cursor-not-allowed >
                <Send className="w-5 h-5 />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Phrases */}
        <div className="mt-6     <h3 className="text-lg font-semibold text-gray-900 mb-3>Quick Phrases</h3>
          <div className="flex flex-wrap gap-2>
            {[مرحبا', شكرا,كيف حالك؟,أنابخير].map((phrase) => (
              <button
                key={phrase}
                onClick={() => setInputMessage(phrase)}
                className="bg-white border border-gray-300 rounded-full px-4 py-2t-sm hover:bg-gray-50 transition-colors >
                {phrase}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 