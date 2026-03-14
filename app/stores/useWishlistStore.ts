import { create } from 'zustand';
import type { WishlistItem } from '@/app/types';

interface WishlistStore {
  items: WishlistItem[];
  addItem: (destinationId: string) => void;
  removeItem: (destinationId: string) => void;
  updateItem: (destinationId: string, updates: Partial<WishlistItem>) => void;
  isWishlisted: (destinationId: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],

  addItem: (destinationId) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: Date.now().toString(),
          userId: '',
          destinationId,
          notes: null,
          travelDates: null,
          budget: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    })),

  removeItem: (destinationId) =>
    set((state) => ({
      items: state.items.filter((item) => item.destinationId !== destinationId),
    })),

  updateItem: (destinationId, updates) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.destinationId === destinationId
          ? { ...item, ...updates, updatedAt: new Date().toISOString() }
          : item
      ),
    })),

  isWishlisted: (destinationId) =>
    get().items.some((item) => item.destinationId === destinationId),
}));
