# SwipeAway — Project Map

Quick reference for where things live. Updated as new files are added.

---

## Screens

| What | Where | Status |
|---|---|---|
| Home / Discover (swipe feed) | `app/(tabs)/index.tsx` | Placeholder — needs swipe cards |
| Explore | `app/(tabs)/explore.tsx` | Template demo — will become Search |
| Modal example | `app/modal.tsx` | Template demo |
| Destination detail | `app/screens/DestinationDetail.tsx` | Not yet created |
| Wishlist | `app/screens/Wishlist.tsx` | Not yet created |
| Trip builder | `app/screens/TripBuilder.tsx` | Not yet created |
| Flight results | `app/screens/FlightResults.tsx` | Not yet created |
| Hotel results | `app/screens/HotelResults.tsx` | Not yet created |
| Login | `app/screens/Login.tsx` | Not yet created |
| Sign up | `app/screens/SignUp.tsx` | Not yet created |
| Onboarding | `app/screens/Onboarding.tsx` | Not yet created |
| Profile | `app/screens/Profile.tsx` | Not yet created |
| Settings | `app/screens/Settings.tsx` | Not yet created |

## Layouts & Navigation

| What | Where |
|---|---|
| Root layout | `app/_layout.tsx` |
| Tab navigator | `app/(tabs)/_layout.tsx` |

## Components

| What | Where |
|---|---|
| Destination card | `app/components/DestinationCard.tsx` — not yet created |
| Swipe card stack | `app/components/SwipeStack.tsx` — not yet created |
| Parallax scroll view | `app/components/parallax-scroll-view.tsx` |
| Themed text | `app/components/themed-text.tsx` |
| Themed view | `app/components/themed-view.tsx` |
| External link | `app/components/external-link.tsx` |
| Haptic tab button | `app/components/haptic-tab.tsx` |
| Hello wave animation | `app/components/hello-wave.tsx` |
| Collapsible section | `app/components/ui/collapsible.tsx` |
| Icon (Android/Web) | `app/components/ui/icon-symbol.tsx` |
| Icon (iOS) | `app/components/ui/icon-symbol.ios.tsx` |

## Hooks

| What | Where |
|---|---|
| Color scheme detection | `app/hooks/use-color-scheme.ts` |
| Color scheme (web) | `app/hooks/use-color-scheme.web.ts` |
| Theme color resolver | `app/hooks/use-theme-color.ts` |

## State (Zustand stores — not yet created)

| What | Where |
|---|---|
| User store | `app/stores/useUserStore.ts` |
| Swipe store | `app/stores/useSwipeStore.ts` |
| Wishlist store | `app/stores/useWishlistStore.ts` |

## Backend API (not yet created)

| What | Where |
|---|---|
| Server entry point | `backend/index.ts` |
| Auth endpoints | `backend/routes/auth.ts` |
| Destination endpoints | `backend/routes/destinations.ts` |
| Swipe endpoints | `backend/routes/swipes.ts` |
| Wishlist endpoints | `backend/routes/wishlist.ts` |
| Flight search service | `backend/services/flights.ts` |
| Hotel search service | `backend/services/hotels.ts` |
| Image service | `backend/services/images.ts` |
| Database schema | `backend/prisma/schema.prisma` |

## Constants & Config

| What | Where |
|---|---|
| Theme (colours, fonts) | `constants/theme.ts` |
| App config | `app.json` |
| TypeScript config | `tsconfig.json` |
| ESLint config | `eslint.config.js` |
| Project reset script | `scripts/reset-project.js` |

## Documentation

| What | Where |
|---|---|
| Claude operating manual | `CLAUDE.md` |
| Milestones & roadmap | `docs/PROJECT_PLAN.md` |
| Product specification | `docs/PRODUCT_SPEC.md` |
| Architecture & tech stack | `docs/ARCHITECTURE.md` |
| Feature list | `docs/FEATURES.md` |
| Changelog | `docs/CHANGELOG.md` |
| This file | `docs/PROJECT_MAP.md` |
| Task list | `tasks/TODO.md` |
| Completed tasks | `tasks/DONE.md` |
