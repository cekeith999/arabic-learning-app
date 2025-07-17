"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/gamification/DashboardHeader";
import ProgressOverview from "@/components/gamification/ProgressOverview";
import QuickActions from "@/components/gamification/QuickActions";
import RecentActivity from "@/components/gamification/RecentActivity";
import SkillTree from "@/components/gamification/SkillTree";
import { useAppStore } from "@/store";
import { calculateLevel, calculateProgressToNextLevel } from "@/lib/utils";

export default function DashboardPage() {
  const { user } = useAppStore();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [progressToNextLevel, setProgressToNextLevel] = useState(0);

  useEffect(() => {
    if (user) {
      const level = calculateLevel(user.xp);
      const progress = calculateProgressToNextLevel(user.xp);
      setCurrentLevel(level);
      setProgressToNextLevel(progress);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto space-y-6">
        <DashboardHeader user={user} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <ProgressOverview 
              user={user} 
              currentLevel={currentLevel} 
              progressToNextLevel={progressToNextLevel} 
            />
            <SkillTree />
          </div>
          <div className="space-y-6">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
} 