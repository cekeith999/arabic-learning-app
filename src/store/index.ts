import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { 
  User, 
  Conversation, 
  Vocabulary, 
  Achievement, 
  Notification, 
  AudioSettings,
  AppState 
} from '@/types';

interface AppStore extends AppState {
  // User Actions
  setUser: (user: User | null) => void;
  updateUserXP: (xp: number) => void;
  updateUserStreak: (streak: number) => void;
  updateUserLingots: (lingots: number) => void;
  setAuthenticated: (isAuthenticated: boolean) => void;
  
  // Conversation Actions
  setCurrentConversation: (conversation: Conversation | null) => void;
  addMessageToConversation: (message: any) => void;
  updateConversationDuration: (duration: number) => void;
  
  // Vocabulary Actions
  setVocabulary: (vocabulary: Vocabulary[]) => void;
  addVocabulary: (vocabulary: Vocabulary) => void;
  markVocabularyAsLearned: (vocabularyId: string) => void;
  
  // Achievement Actions
  setAchievements: (achievements: Achievement[]) => void;
  addAchievement: (achievement: Achievement) => void;
  
  // Notification Actions
  setNotifications: (notifications: Notification[]) => void;
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (notificationId: string) => void;
  clearNotifications: () => void;
  
  // Audio Settings Actions
  setAudioSettings: (settings: Partial<AudioSettings>) => void;
  
  // Loading and Error Actions
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Gamification Actions
  awardXP: (xp: number) => void;
  awardLingots: (lingots: number) => void;
  checkLevelUp: () => void;
  
  // Reset Actions
  resetStore: () => void;
}

const initialAudioSettings: AudioSettings = {
  volume: 0.8,
  speed: 1.0,
  autoPlay: false,
  pronunciationGuide: true,
};

const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  currentConversation: null,
  vocabulary: [],
  achievements: [],
  notifications: [],
  audioSettings: initialAudioSettings,
  isLoading: false,
  error: null,
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      // User Actions
      setUser: (user) => set({ user }),
      updateUserXP: (xp) => {
        const currentUser = get().user;
        if (currentUser) {
          const newXP = currentUser.xp + xp;
          const newLevel = Math.floor(newXP / 10) + 1;
          set({
            user: {
              ...currentUser,
              xp: newXP,
              level: newLevel,
            },
          });
          get().checkLevelUp();
        }
      },
      updateUserStreak: (streak) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              streak,
            },
          });
        }
      },
      updateUserLingots: (lingots) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: {
              ...currentUser,
              lingots: currentUser.lingots + lingots,
            },
          });
        }
      },
      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      // Conversation Actions
      setCurrentConversation: (conversation) => set({ currentConversation: conversation }),
      addMessageToConversation: (message) => {
        const currentConversation = get().currentConversation;
        if (currentConversation) {
          set({
            currentConversation: {
              ...currentConversation,
              messages: [...currentConversation.messages, message],
            },
          });
        }
      },
      updateConversationDuration: (duration) => {
        const currentConversation = get().currentConversation;
        if (currentConversation) {
          set({
            currentConversation: {
              ...currentConversation,
              duration,
            },
          });
        }
      },
      // Vocabulary Actions
      setVocabulary: (vocabulary) => set({ vocabulary }),
      addVocabulary: (vocabulary) => {
        const currentVocabulary = get().vocabulary;
        set({
          vocabulary: [...currentVocabulary, vocabulary],
        });
      },
      markVocabularyAsLearned: (vocabularyId) => {
        // This would typically update the user's vocabulary progress
        // For now, we'll just log it
        console.log(`Vocabulary ${vocabularyId} marked as learned`);
      },
      // Achievement Actions
      setAchievements: (achievements) => set({ achievements }),
      addAchievement: (achievement) => {
        const currentAchievements = get().achievements;
        set({
          achievements: [...currentAchievements, achievement],
        });
        // Award XP for achievement
        get().awardXP(achievement.xpReward);
        // Add notification
        get().addNotification({
          id: Date.now().toString(),
          userId: get().user?.id || '',
          type: 'achievement',
          title: 'Achievement Unlocked!',
          message: `You earned the "${achievement.badgeName}" badge!`,
          isRead: false,
          createdAt: new Date(),
        });
      },
      // Notification Actions
      setNotifications: (notifications) => set({ notifications }),
      addNotification: (notification) => {
        const currentNotifications = get().notifications;
        set({
          notifications: [notification, ...currentNotifications],
        });
      },
      markNotificationAsRead: (notificationId) => {
        const currentNotifications = get().notifications;
        set({
          notifications: currentNotifications.map(notification =>
            notification.id === notificationId
              ? { ...notification, isRead: true }
              : notification
          ),
        });
      },
      clearNotifications: () => set({ notifications: [] }),
      // Audio Settings Actions
      setAudioSettings: (settings) => {
        const currentSettings = get().audioSettings;
        set({
          audioSettings: { ...currentSettings, ...settings },
        });
      },
      // Loading and Error Actions
      setLoading: (isLoading) => set({ isLoading }),
      setError: (error) => set({ error }),
      // Gamification Actions
      awardXP: (xp) => {
        get().updateUserXP(xp);
        // Add XP notification
        get().addNotification({
          id: Date.now().toString(),
          userId: get().user?.id || '',
          type: 'achievement',
          title: 'XP Earned!',
          message: `+${xp} XP`,
          isRead: false,
          createdAt: new Date(),
        });
      },
      awardLingots: (lingots) => {
        get().updateUserLingots(lingots);
        // Add Lingot notification
        get().addNotification({
          id: Date.now().toString(),
          userId: get().user?.id || '',
          type: 'achievement',
          title: 'Lingots Earned!',
          message: `+${lingots} Lingots`,
          isRead: false,
          createdAt: new Date(),
        });
      },
      checkLevelUp: () => {
        const currentUser = get().user;
        if (currentUser) {
          const newLevel = Math.floor(currentUser.xp / 10) + 1;
          if (newLevel > currentUser.level) {
            // Level up notification
            get().addNotification({
              id: Date.now().toString(),
              userId: currentUser.id,
              type: 'level-up',
              title: 'Level Up!',
              message: `Congratulations! You reached level ${newLevel}!`,
              isRead: false,
              createdAt: new Date(),
            });
          }
        }
      },
      // Reset Actions
      resetStore: () => set(initialState),
    }),
    {
      name: 'arabic-learning-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        vocabulary: state.vocabulary,
        achievements: state.achievements,
        audioSettings: state.audioSettings,
      }),
    }
  )
);

// Selectors for better performance
export const useUser = () => useAppStore((state) => state.user);
export const useIsAuthenticated = () => useAppStore((state) => state.isAuthenticated);
export const useCurrentConversation = () => useAppStore((state) => state.currentConversation);
export const useVocabulary = () => useAppStore((state) => state.vocabulary);
export const useAchievements = () => useAppStore((state) => state.achievements);
export const useNotifications = () => useAppStore((state) => state.notifications);
export const useAudioSettings = () => useAppStore((state) => state.audioSettings);
export const useIsLoading = () => useAppStore((state) => state.isLoading);
export const useError = () => useAppStore((state) => state.error); 