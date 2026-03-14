# SwipeAway Changelog

## Version 0.1

- Created Expo project with React Native 0.81 + TypeScript
- Added tab navigation (Home, Explore)
- Added light/dark theme support
- Added parallax scroll view component
- Added hello wave animation component

## Version 0.2

- Created project roadmap (PROJECT_PLAN.md)
- Created development TODO with 18 phased task lists
- Reorganised repo structure (docs/, tasks/, app/, backend/)
- Moved components and hooks into app/ directory
- Updated all import paths to match new structure

## Version 0.3

- Added CLAUDE.md with development workflow and session rules
- Added docs/FEATURES.md with categorised feature list
- Added docs/CHANGELOG.md for version tracking
- Added docs/PROJECT_MAP.md for quick file navigation
- Added tasks/DONE.md for completed task logging

## Version 0.4

- Installed zustand, @tanstack/react-query, axios
- Created folder structure: services/, stores/, types/, utils/, data/
- Defined TypeScript types for all core models (Destination, User, Swipe, Wishlist, Flight, Hotel)
- Built Zustand stores: useUserStore, useSwipeStore, useWishlistStore
- Added TanStack Query provider to root layout
- Set up Axios instance with auth interceptors
- Extended theme with Spacing, BorderRadius, FontSize scales and new colours
- Created reusable UI components: Button, Input, Badge, Card, Avatar
