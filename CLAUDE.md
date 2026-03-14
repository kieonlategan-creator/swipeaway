# SwipeAway

Travel discovery app — swipe through destinations, save to wishlists, book flights and hotels.

## Session Start

1. Read `docs/PROJECT_PLAN.md` — know the current milestone
2. Read `tasks/TODO.md` — find the next unchecked task
3. Briefly explain the next task before coding

## How to Work

- For non-trivial tasks, propose a short plan first
- Keep code simple and avoid over-engineering
- Tell me which files you changed and why
- Use plain English when explaining changes
- If blocked, note why in TODO.md and move on
- Flag risky assumptions before making big changes

## Task Tracking

- Mark completed items in `tasks/TODO.md` (`- [ ]` → `- [x]`)
- Move finished items into `tasks/DONE.md` under the appropriate phase
- Update `docs/CHANGELOG.md` after meaningful work
- Commit with a clear message after each task

## Quality

- Do not mark work complete unless it is tested or clearly verified
- Prefer minimal-impact edits — change only what's needed
- Run `npm run lint` after code changes
- Ask before making architectural decisions not covered in docs/

## Project Structure

```
SwipeAway/
├── docs/                    # Project documentation
│   ├── PROJECT_PLAN.md      # Milestones and roadmap
│   ├── PRODUCT_SPEC.md      # Features, screens, monetisation
│   ├── ARCHITECTURE.md      # Tech stack, database, APIs
│   ├── FEATURES.md          # Categorised feature list
│   ├── CHANGELOG.md         # Version history (Claude maintains this)
│   └── PROJECT_MAP.md       # Quick nav — where every file lives
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
- Prefer simple, readable code over clever abstractions
- Only add comments where the logic isn't self-evident
- Don't over-engineer — build for what's needed now, not hypothetical futures
