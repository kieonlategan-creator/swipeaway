import { create } from 'zustand';
import type { User, AuthState, UserPreferences } from '@/app/types';

interface UserStore extends AuthState {
  login: (token: string, user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,

  login: (token, user) =>
    set({ token, user, isAuthenticated: true }),

  logout: () =>
    set({ token: null, user: null, isAuthenticated: false }),

  updateUser: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),

  updatePreferences: (preferences) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            preferences: { ...state.user.preferences, ...preferences },
          }
        : null,
    })),
}));
