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

## Phase 2: Navigation & Layout

- [x] Restructure tab navigation: Discover, Wishlist, Trips, Profile
- [x] Create tab icons using existing icon system (extend icon mappings)
- [x] Set up stack navigators within each tab
- [x] Create screen placeholder files for all screens
- [x] Add header configuration and styling per screen
- [x] Implement deep linking configuration in app.json
