# SwipeAway — Development TODO

Step-by-step tasks to build the app from the current Expo template to a full travel discovery platform.

---

## Phase 1: Foundation & Setup

- [x] Install core dependencies (zustand, tanstack-query, axios, expo-image)
- [x] Install animation dependencies (react-native-reanimated, react-native-gesture-handler) — verify versions
- [x] Set up path aliases in tsconfig (`@/` already configured)
- [x] Create folder structure: `services/`, `stores/`, `types/`, `utils/`, `data/`
- [x] Define TypeScript types for Destination, User, Swipe, Wishlist, Flight, Hotel
- [x] Set up Zustand stores: `useUserStore`, `useSwipeStore`, `useWishlistStore`
- [x] Configure TanStack Query provider in root layout
- [x] Set up Axios instance with base URL and interceptors
- [x] Extend existing theme constants with full colour palette, spacing, and typography scales
- [x] Create reusable UI components: Button, Input, Badge, Card, Avatar

## Phase 2: Navigation & Layout

- [ ] Restructure tab navigation: Discover, Wishlist, Trips, Profile
- [ ] Create tab icons using existing icon system (extend icon mappings)
- [ ] Set up stack navigators within each tab
- [ ] Create screen placeholder files for all screens
- [ ] Add header configuration and styling per screen
- [ ] Implement deep linking configuration in app.json

## Phase 3: Authentication

- [ ] Build Sign Up screen (email, password, display name)
- [ ] Build Login screen (email + password)
- [ ] Build onboarding flow (3 screens: welcome, preferences, home airport)
- [ ] Add auth state management in Zustand (token, user, isAuthenticated)
- [ ] Store tokens with Expo Secure Store
- [ ] Add auth guard — redirect unauthenticated users to login
- [ ] Wire up Google OAuth (expo-auth-session)
- [ ] Wire up Apple Sign In (expo-apple-authentication)

## Phase 4: Mock Data & Destination Cards

- [ ] Create mock destination dataset (30+ destinations with images, costs, tags)
- [ ] Source free destination images from Unsplash and save URLs
- [ ] Build DestinationCard component (image, name, country, cost, tags)
- [ ] Style card with rounded corners, shadow, gradient text overlay
- [ ] Add loading skeleton state for cards
- [ ] Build card stack layout (3 cards visible, top card interactive)

## Phase 5: Swipe Mechanics

- [ ] Implement pan gesture on top card using Gesture Handler
- [ ] Add horizontal drag tracking with Reanimated shared values
- [ ] Animate card rotation based on horizontal drag distance
- [ ] Add swipe threshold detection (>40% of screen width = commit)
- [ ] Animate card exit: right swipe (save), left swipe (skip), up swipe (book)
- [ ] Show action indicators during drag (heart icon right, X icon left, arrow up)
- [ ] Bring next card to top position with spring animation on commit
- [ ] Add swipe-back / undo last swipe feature
- [ ] Record swipe events in Zustand store
- [ ] Add haptic feedback on swipe commit (expo-haptics)

## Phase 6: Destination Detail Screen

- [ ] Create full-screen destination detail view
- [ ] Build image carousel/gallery at top
- [ ] Add destination info section (description, best months, daily cost)
- [ ] Add weather widget (current conditions, temperature)
- [ ] Add "Flights from £X" teaser section
- [ ] Add "Hotels from £X" teaser section
- [ ] Add tags/interests chips
- [ ] Add "Save to Wishlist" and "Find Flights" action buttons
- [ ] Navigate to detail screen on card tap

## Phase 7: Wishlist

- [ ] Build Wishlist screen with grid layout of saved destinations
- [ ] Add destination thumbnail card component for grid
- [ ] Implement pull-to-refresh
- [ ] Add sort options (date saved, price, alphabetical)
- [ ] Add filter by tag/continent
- [ ] Swipe-to-remove from wishlist
- [ ] Show estimated flight price on each card
- [ ] Navigate to destination detail on tap
- [ ] Handle empty state with illustration and CTA

## Phase 8: Search & Filters

- [ ] Build Search screen with text input
- [ ] Add filter bar: budget range, continent, trip type, duration
- [ ] Implement debounced search against destination list
- [ ] Show search results as scrollable card list
- [ ] Add recent searches (persisted in AsyncStorage)
- [ ] Add popular/trending destinations section

## Phase 9: Profile & Settings

- [ ] Build Profile screen (avatar, display name, travel stats)
- [ ] Add travel stats: countries swiped, wishlisted, visited
- [ ] Build Settings screen
- [ ] Add preference editors: home airport picker, currency selector
- [ ] Add interest/tag selection grid
- [ ] Add notification preferences toggles
- [ ] Add theme toggle (system/light/dark)
- [ ] Add "Delete Account" and "Log Out" actions

## Phase 10: Backend API

- [ ] Initialise Node.js + Express project in `server/` directory
- [ ] Set up PostgreSQL database (local Docker or Supabase)
- [ ] Install and configure Prisma ORM
- [ ] Create Prisma schema matching database design in PROJECT_PLAN.md
- [ ] Run initial migration
- [ ] Build auth endpoints: POST /auth/register, POST /auth/login, POST /auth/refresh
- [ ] Build destination endpoints: GET /destinations, GET /destinations/:id
- [ ] Build swipe endpoints: POST /swipes, GET /swipes/history
- [ ] Build wishlist endpoints: GET /wishlist, POST /wishlist, DELETE /wishlist/:id
- [ ] Build user endpoints: GET /users/me, PATCH /users/me
- [ ] Add JWT middleware for protected routes
- [ ] Add request validation with zod
- [ ] Add rate limiting with express-rate-limit
- [ ] Seed database with destination data

## Phase 11: Connect Frontend to Backend

- [ ] Update Axios base URL to point at backend
- [ ] Replace mock auth with real API calls
- [ ] Replace mock destination data with API fetches via TanStack Query
- [ ] Wire up swipe recording to POST /swipes
- [ ] Wire up wishlist CRUD to API
- [ ] Add error handling and retry logic
- [ ] Add pull-to-refresh on destination feed
- [ ] Add infinite scroll / pagination for destinations

## Phase 12: Flight API Integration

- [ ] Sign up for Amadeus API (or Kiwi.com Tequila)
- [ ] Build flight search service in backend
- [ ] Create endpoint: GET /flights?origin=X&destination=Y&date=Z
- [ ] Cache flight results in Redis or database (TTL: 1 hour)
- [ ] Build Flight Results screen in app
- [ ] Show flight cards with airline, price, times, duration
- [ ] Add sort by price/duration/stops
- [ ] Deep link to airline/booking site on tap

## Phase 13: Hotel API Integration

- [ ] Sign up for Booking.com Affiliate API (or Amadeus Hotels)
- [ ] Build hotel search service in backend
- [ ] Create endpoint: GET /hotels?destination=X&checkin=Y&checkout=Z
- [ ] Cache hotel results (TTL: 30 minutes)
- [ ] Build Hotel Results screen in app
- [ ] Show hotel cards with photo, name, star rating, price, review score
- [ ] Add sort and filter (price, stars, rating)
- [ ] Deep link to booking site on tap

## Phase 14: Image & Content APIs

- [ ] Integrate Unsplash API for destination hero images
- [ ] Build image fetching service with caching
- [ ] Integrate OpenWeather API for destination weather
- [ ] Integrate Google Places API for points of interest (optional)
- [ ] Add image preloading for upcoming cards in swipe stack

## Phase 15: Push Notifications

- [ ] Set up Expo Notifications
- [ ] Request notification permissions on onboarding
- [ ] Store push tokens in backend
- [ ] Implement price drop alert notifications
- [ ] Implement weekly "new destinations" digest notification
- [ ] Add notification preferences in settings

## Phase 16: Polish & UX

- [ ] Add screen transition animations
- [ ] Add micro-interactions (button presses, list items)
- [ ] Design and implement empty states for all screens
- [ ] Design and implement error states
- [ ] Add loading skeletons across all data-fetching screens
- [ ] Implement keyboard-aware scroll views on forms
- [ ] Test and fix accessibility (screen reader labels, contrast ratios)
- [ ] Add app icon and splash screen (replace Expo defaults)
- [ ] Test on small screens (iPhone SE) and large screens (iPad)

## Phase 17: Testing

- [ ] Set up Jest + React Native Testing Library
- [ ] Write unit tests for Zustand stores
- [ ] Write unit tests for utility functions
- [ ] Write component tests for DestinationCard, SwipeStack
- [ ] Write integration tests for auth flow
- [ ] Write integration tests for swipe + wishlist flow
- [ ] Set up backend API tests with Supertest
- [ ] Add E2E tests with Detox or Maestro (critical paths only)

## Phase 18: Launch Preparation

- [ ] Set up EAS Build for iOS and Android
- [ ] Configure app.json for production (bundle ID, version, permissions)
- [ ] Create App Store listing (screenshots, description, keywords)
- [ ] Create Google Play listing
- [ ] Set up Sentry for error tracking
- [ ] Set up PostHog or Mixpanel for analytics
- [ ] Run beta test via TestFlight and Google Play Internal Testing
- [ ] Fix bugs from beta feedback
- [ ] Submit to App Store and Google Play

---

## Future Tasks (Post-Launch)

- [ ] Build recommendation engine from swipe history
- [ ] Add group trip features (shared wishlists, voting)
- [ ] Build trip builder (multi-destination itineraries)
- [ ] Add social sharing (share cards, wishlists)
- [ ] Implement SwipeAway Pro subscription with RevenueCat
- [ ] Add sponsored destination cards
- [ ] Build AI trip planner with Claude API
- [ ] Add travel stories / short-form content
- [ ] Build web version

---

## Notes

- Prioritise the swipe experience above all — it's the core differentiator
- Use mock data liberally in early phases to unblock UI work
- API integrations can run in parallel with frontend work
- Ship an MVP with mock data + swipe + wishlist before integrating real APIs
- Test on both iOS and Android throughout (don't wait until the end)
