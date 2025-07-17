use client';

import [object Object]useEffect } fromreact;
import { useAppStore } from@/store';
import { calculateLevel, calculateProgressToNextLevel } from '@/lib/utils';
import[object Object]DEFAULT_VOCABULARY } from '@/lib/constants';
import DashboardHeader from@/components/gamification/DashboardHeader';
import SkillTree from@/components/gamification/SkillTree;
import ProgressOverview from@/components/gamification/ProgressOverview';
import QuickActions from@/components/gamification/QuickActions';
import RecentActivity from@/components/gamification/RecentActivity;

export default function DashboardPage() {
  const[object Object]    user, 
    setUser, 
    setVocabulary, 
    setLoading, 
    setError 
  } = useAppStore();

  useEffect(() => {
    // Initialize with demo user if no user exists
    if (!user) [object Object]    const demoUser = {
        id: 'demo-user-1,
        email: 'demo@arabiclearning.com,       name: 'Demo User,
        level: 1        dialectPreference: 'MSA' as const,
        xp: 25,
        streak: 3,
        lingots: 15,
        createdAt: new Date(),
        lastActive: new Date(),
      };
      setUser(demoUser);
    }

    // Initialize vocabulary
    setVocabulary(DEFAULT_VOCABULARY);
  }, [user, setUser, setVocabulary]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 border-b-2 border-indigo-600x-auto mb-4></div>
          <p className="text-gray-600ding your learning journey...</p>
        </div>
      </div>
    );
  }

  const currentLevel = calculateLevel(user.xp);
  const progressToNextLevel = calculateProgressToNextLevel(user.xp);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50indigo-100">
      <div className=container mx-auto px-4 py-6">
        {/* Header */}
        <DashboardHeader user={user} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6-6          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6>      {/* Progress Overview */}
            <ProgressOverview 
              user={user}
              currentLevel={currentLevel}
              progressToNextLevel={progressToNextLevel}
            />
            
        [object Object]/* Skill Tree */}
            <SkillTree />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6>         {/* Quick Actions */}
            <QuickActions />
            
    [object Object]/* Recent Activity */}
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
} 