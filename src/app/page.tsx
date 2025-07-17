use client';

import [object Object]useEffect } fromreact';
import [object Object]useRouter } from 'next/navigation;
import { motion } fromframer-motion';
import { MessageCircle, BookOpen, Target, Globe, Star } fromlucide-react;

export default function HomePage() [object Object]const router = useRouter();

  useEffect(() =>[object Object]    // Redirect to dashboard after a brief delay
    const timer = setTimeout(() => {
      router.push(/dashboard');
    }, 3000

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className=text-center max-w-2xl mx-auto px-6>       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate=[object Object]{ opacity: 1, y: 0 }}
          transition={{ duration:0.8       >
          {/* Logo and Title */}
          <div className="mb-8>
            <div className=text-6xl mb-4">🌍</div>
            <h1 className="text-4ont-bold text-gray-900 mb-4            Arabic Learning App
            </h1>
            <p className=text-xl text-gray-600 mb-2             Learn Arabic with Ustadh Ahmad
            </p>
            <p className=text-lg text-gray-50            Master Arabic through interactive conversations and gamified lessons
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8           <motion.div
              initial={{ opacity:08           animate={{ opacity: 1, scale: 1        transition={{ duration: 00.52         className="text-center"
            >
              <MessageCircle className=w-8 h-8t-blue-600 mx-auto mb-2/>
              <p className=text-sm text-gray-600>AI Conversations</p>
            </motion.div>
            <motion.div
              initial={{ opacity:08           animate={{ opacity: 1, scale: 1        transition={{ duration: 00.53         className="text-center"
            >
              <BookOpen className="w-8h-8 text-green-600 mx-auto mb-2/>
              <p className=text-sm text-gray-600ry</p>
            </motion.div>
            <motion.div
              initial={{ opacity:08           animate={{ opacity: 1, scale: 1        transition={{ duration: 00.54         className="text-center"
            >
              <Target className="w-8-8text-purple-600 mx-auto mb-2/>
              <p className=text-sm text-gray-600es</p>
            </motion.div>
            <motion.div
              initial={{ opacity:08           animate={{ opacity: 1, scale: 1        transition={{ duration: 00.55         className="text-center"
            >
              <Globe className="w-8-8text-orange-600 mx-auto mb-2/>
              <p className=text-sm text-gray-600re</p>
            </motion.div>
          </div>

          {/* Loading Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 00.50.6         className=flex items-center justify-center space-x-2"
          >
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
            <p className="text-gray-600ding your learning journey...</p>
          </motion.div>

      [object Object]/* Demo Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration:0.5: 1 }}
            className=mt-8 flex justify-center space-x-6 text-sm text-gray-500     >
            <div className=flexitems-center space-x-1>             <Star className="w-4-4xt-yellow-500/>
              <span>25 XP</span>
            </div>
            <div className=flexitems-center space-x-1>             <span>🔥</span>
              <span>3Day Streak</span>
            </div>
            <div className=flexitems-center space-x-1>             <span>💎</span>
              <span>15/span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
