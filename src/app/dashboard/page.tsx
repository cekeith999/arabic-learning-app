"use client";

import { useEffect, useState } from "react";
import DashboardHeader from "@/components/gamification/DashboardHeader";
import ProgressOverview from "@/components/gamification/ProgressOverview";
import QuickActions from "@/components/gamification/QuickActions";
import RecentActivity from "@/components/gamification/RecentActivity";
import SkillTree from "@/components/gamification/SkillTree";
import { useAppStore } from "@/store";
import { calculateLevel, calculateProgressToNextLevel } from "@/lib/utils";
import type { User } from "@/types";

// Default user for demo purposes
const defaultUser: User = {
  id: "demo-user-1",
  email: "demo@arabiclearning.com",
  name: "Ahmed",
  level: 1,
  dialectPreference: "MSA",
  xp: 150,
  streak: 3,
  lingots: 25,
  createdAt: new Date(),
  lastActive: new Date(),
};

export default function DashboardPage() {
  const { user, setUser } = useAppStore();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [progressToNextLevel, setProgressToNextLevel] = useState(0);

  useEffect(() => {
    // Initialize default user if none exists
    if (!user) {
      setUser(defaultUser);
    }
  }, [user, setUser]);

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