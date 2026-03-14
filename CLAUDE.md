# SwipeAway

Travel discovery app — swipe through destinations, save to wishlists, book flights and hotels.

## Project Structure

```
SwipeAway/
├── docs/                    # Project documentation
│   ├── PROJECT_PLAN.md      # Milestones and roadmap
│   ├── PRODUCT_SPEC.md      # Features, screens, monetisation
│   └── ARCHITECTURE.md      # Tech stack, database, APIs
├── tasks/                   # Task tracking
│   ├── TODO.md              # Upcoming tasks by phase
│   └── DONE.md              # Completed tasks log
├── app/                     # Expo Router screens and layouts
│   ├── (tabs)/              # Tab navigation screens
│   ├── screens/             # Screen-level components
│   ├── components/          # Reusable UI components
│   └── hooks/               # Custom React hooks
├── backend/                 # Node.js + Express API (future)
├── assets/                  # Images, icons, fonts
│   └── images/
├── constants/               # Theme colours, spacing, typography
└── scripts/                 # Build and utility scripts
```

## Tech Stack

- **Frontend:** React Native 0.81 + Expo 54 + TypeScript
- **Navigation:** Expo Router (file-based)
- **State:** Zustand (global) + TanStack Query (server)
- **Animations:** React Native Reanimated + Gesture Handler
- **Backend:** Node.js + Express + PostgreSQL + Prisma (planned)
- **APIs:** Amadeus (flights), Booking.com (hotels), Unsplash (images)

## Development Commands

```bash
npm start          # Start Expo dev server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run in browser
npm run lint       # Run ESLint
```

## Conventions

- Use `@/` path alias for imports from project root
- Components use named exports (not default) except screen files
- File names use kebab-case (e.g. `themed-text.tsx`)
- Screens export default functions
- Keep components small and focused — one component per file
- Use Zustand for client state, TanStack Query for server state
