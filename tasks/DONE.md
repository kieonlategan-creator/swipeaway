# SwipeAway — Completed Tasks

Tasks moved here from TODO.md upon completion.

---

## Phase 0: Project Setup

- [x] Initialise Expo project with TypeScript template
- [x] Create project roadmap and documentation (PROJECT_PLAN.md, PRODUCT_SPEC.md, ARCHITECTURE.md)
- [x] Create development TODO with phased task breakdown
- [x] Reorganise repo structure (docs/, tasks/, app/, backend/, assets/)

## Phase 1: Foundation & Setup

- [x] Install core dependencies (zustand, tanstack-query, axios, expo-image)
- [x] Install animation dependencies (react-native-reanimated, react-native-gesture-handler) — already included
- [x] Set up path aliases in tsconfig (`@/` already configured)
- [x] Create folder structure: services/, stores/, types/, utils/, data/
- [x] Define TypeScript types for Destination, User, Swipe, Wishlist, Flight, Hotel
- [x] Set up Zustand stores: useUserStore, useSwipeStore, useWishlistStore
- [x] Configure TanStack Query provider in root layout
- [x] Set up Axios instance with base URL and interceptors
- [x] Extend existing theme constants with full colour palette, spacing, and typography scales
- [x] Create reusable UI components: Button, Input, Badge, Card, Avatar
