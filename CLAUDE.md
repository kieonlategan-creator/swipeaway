# SwipeAway

Travel discovery app — swipe through destinations, save to wishlists, book flights and hotels.

## Claude Development Workflow

At the start of every session:

1. Read `docs/PROJECT_PLAN.md` to understand milestones and current phase
2. Read `tasks/TODO.md` to find the next unfinished task
3. Work on the next unchecked task in order
4. Explain what you changed and why
5. Mark the task complete in `tasks/TODO.md` (change `- [ ]` to `- [x]`)
6. Move completed tasks to `tasks/DONE.md` under the appropriate phase heading
7. Update `docs/CHANGELOG.md` — add a bullet under the current version for each meaningful change
8. Commit with a clear message describing what was done
9. Keep code simple, well-documented, and consistent with existing patterns

### Rules

- Always work through tasks **in order** — don't skip ahead
- One task at a time — finish and commit before starting the next
- If a task is blocked, note why in TODO.md and move to the next
- Ask the user before making architectural decisions not covered in the docs
- Run `npm run lint` after code changes to catch issues early
- Test on web (`npm run web`) as a quick smoke test when possible

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
