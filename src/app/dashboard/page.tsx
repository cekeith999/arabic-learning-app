"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardHeader from "@/components/gamification/DashboardHeader";
import ProgressOverview from "@/components/gamification/ProgressOverview";
import QuickActions from "@/components/gamification/QuickActions";
import RecentActivity from "@/components/gamification/RecentActivity";
import SkillTree from "@/components/gamification/SkillTree";
import ProfileSettings from "@/components/auth/ProfileSettings";
import { useAppStore } from "@/store";
import { calculateLevel, calculateProgressToNextLevel } from "@/lib/utils";
import { LogOut } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, setUser, setAuthenticated } = useAppStore();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [progressToNextLevel, setProgressToNextLevel] = useState(0);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      router.push("/");
      return;
    }

    const level = calculateLevel(user.xp);
    const progress = calculateProgressToNextLevel(user.xp);
    setCurrentLevel(level);
    setProgressToNextLevel(progress);
  }, [user, isAuthenticated, router]);

  const handleLogout = () => {
    setUser(null);
    setAuthenticated(false);
    router.push("/");
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (showProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl p-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setShowProfile(false)}
              className="text-indigo-600 hover:text-indigo-700 medium"
            >
              ← Back to Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
          <ProfileSettings />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between pt-6">
          <div></div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowProfile(true)}
              className="text-indigo-600 hover:text-indigo-700 medium"
            >
              Profile Settings
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        
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