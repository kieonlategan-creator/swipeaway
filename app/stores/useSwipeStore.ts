import { create } from 'zustand';
import type { Swipe, SwipeDirection } from '@/app/types';

interface SwipeStore {
  swipes: Swipe[];
  currentIndex: number;
  addSwipe: (destinationId: string, direction: SwipeDirection) => void;
  undoLastSwipe: () => Swipe | null;
  resetSwipes: () => void;
}

export const useSwipeStore = create<SwipeStore>((set, get) => ({
  swipes: [],
  currentIndex: 0,

  addSwipe: (destinationId, direction) =>
    set((state) => ({
      swipes: [
        ...state.swipes,
        {
          id: Date.now().toString(),
          userId: '',
          destinationId,
          direction,
          createdAt: new Date().toISOString(),
        },
      ],
      currentIndex: state.currentIndex + 1,
    })),

  undoLastSwipe: () => {
    const { swipes } = get();
    if (swipes.length === 0) return null;
    const last = swipes[swipes.length - 1];
    set((state) => ({
      swipes: state.swipes.slice(0, -1),
      currentIndex: Math.max(0, state.currentIndex - 1),
    }));
    return last;
  },

  resetSwipes: () => set({ swipes: [], currentIndex: 0 }),
}));
