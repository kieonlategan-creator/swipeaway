# SwipeAway — Travel Discovery App

## Project Roadmap

---

## 1. Product Overview

**SwipeAway** is a mobile-first travel discovery app that lets users swipe through curated travel destinations, flights, and hotels — Tinder-style — to build personalised trip wishlists and book travel on the spot.

### Vision

Make travel planning spontaneous and fun. Instead of endless searching and comparing, users swipe through beautiful destination cards, save what excites them, and book when they're ready.

### Target Audience

- Millennials and Gen Z travellers (18–35)
- Spontaneous weekend-trip planners
- Budget-conscious explorers looking for deals
- Digital nomads seeking new destinations

### Value Proposition

- **Discover** destinations you'd never think to search for
- **Swipe** through flights, hotels, and experiences in seconds
- **Save** favourites to wishlists and share with friends
- **Book** directly through the app with real-time pricing

---

## 2. Core Features

### MVP (Phase 1)

| Feature | Description |
|---|---|
| **Destination Cards** | Swipeable cards showing destination photos, brief info, and estimated cost |
| **Swipe Mechanics** | Right = save to wishlist, Left = skip, Up = book now |
| **User Profiles** | Account creation, preferences, travel history |
| **Wishlist** | Saved destinations with flight/hotel pricing |
| **Search & Filters** | Filter by budget, continent, travel dates, trip type |
| **Flight Deals** | Real-time flight pricing from user's nearest airport |
| **Hotel Listings** | Accommodation options with photos and ratings |

### Phase 2

| Feature | Description |
|---|---|
| **Smart Recommendations** | ML-based suggestions from swipe history |
| **Trip Builder** | Combine flights + hotels + activities into itineraries |
| **Social Sharing** | Share wishlists, invite friends to group trips |
| **Push Notifications** | Price drop alerts for wishlisted destinations |
| **Offline Mode** | Cache destination cards for offline browsing |

### Phase 3

| Feature | Description |
|---|---|
| **In-App Booking** | Direct flight and hotel booking with payment |
| **Reviews & Ratings** | User-generated destination reviews |
| **Travel Stories** | Short-form content from travellers (photos/videos) |
| **Loyalty Programme** | Points for bookings, referrals, reviews |
| **AR Preview** | AR-powered destination previews |

---

## 3. App Architecture

```
┌─────────────────────────────────────────────────┐
│                   Mobile App                     │
│              (React Native + Expo)               │
│                                                  │
│  ┌───────────┐ ┌───────────┐ ┌───────────────┐  │
│  │  Screens  │ │Components │ │    Hooks /     │  │
│  │ (Expo     │ │(Cards,    │ │    State       │  │
│  │  Router)  │ │ Modals,   │ │  (Zustand /    │  │
│  │           │ │ Lists)    │ │   TanStack)    │  │
│  └─────┬─────┘ └─────┬─────┘ └──────┬────────┘  │
│        │              │              │            │
│  ┌─────┴──────────────┴──────────────┴────────┐  │
│  │             API Service Layer               │  │
│  │          (Axios / Fetch wrappers)           │  │
│  └─────────────────┬───────────────────────────┘  │
└────────────────────┼──────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│                 Backend API                      │
│              (Node.js / Express)                 │
│                                                  │
│  ┌────────────┐ ┌───────────┐ ┌──────────────┐  │
│  │   Auth     │ │ Destination│ │   Booking    │  │
│  │  (JWT +    │ │  Service   │ │   Service    │  │
│  │  OAuth)    │ │            │ │              │  │
│  └─────┬──────┘ └─────┬─────┘ └──────┬───────┘  │
│        │              │              │            │
│  ┌─────┴──────────────┴──────────────┴────────┐  │
│  │           Database + Cache Layer            │  │
│  │         (PostgreSQL + Redis)                │  │
│  └─────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│              Third-Party APIs                    │
│                                                  │
│  Amadeus  ·  Unsplash  ·  Booking.com           │
│  Skyscanner · Google Places · Stripe            │
└─────────────────────────────────────────────────┘
```

### Key Architectural Decisions

- **File-based routing** via Expo Router for navigation
- **Zustand** for lightweight global state (user prefs, wishlist, swipe history)
- **TanStack Query** for server state, caching, and background refetching
- **React Native Reanimated + Gesture Handler** for smooth swipe animations
- **Modular service layer** to abstract API calls from UI logic

---

## 4. Tech Stack

### Frontend (Mobile App)

| Technology | Purpose |
|---|---|
| React Native 0.81+ | Cross-platform mobile framework |
| Expo 54 | Build tooling, OTA updates, native modules |
| Expo Router | File-based navigation |
| TypeScript | Type safety |
| React Native Reanimated | Swipe and transition animations |
| React Native Gesture Handler | Touch/swipe gesture detection |
| Zustand | Global state management |
| TanStack Query | API data fetching and caching |
| Axios | HTTP client |
| Expo Image | Optimised image loading and caching |
| Expo Secure Store | Token and credential storage |
| React Native Maps | Destination map views |

### Backend

| Technology | Purpose |
|---|---|
| Node.js + Express | REST API server |
| PostgreSQL | Primary database |
| Redis | Caching, session management, rate limiting |
| Prisma | ORM and database migrations |
| JWT + OAuth 2.0 | Authentication |
| Stripe SDK | Payment processing |

### Infrastructure

| Technology | Purpose |
|---|---|
| Vercel / Railway | Backend hosting |
| Supabase | Alternative BaaS option (auth + DB + storage) |
| AWS S3 / Cloudflare R2 | Image and media storage |
| Expo EAS | App builds and submissions |
| Sentry | Error tracking and monitoring |
| PostHog / Mixpanel | Analytics and event tracking |

---

## 5. Database Structure

### Users

```sql
users
├── id              UUID PRIMARY KEY
├── email           VARCHAR UNIQUE NOT NULL
├── password_hash   VARCHAR
├── display_name    VARCHAR
├── avatar_url      VARCHAR
├── home_airport    VARCHAR(3)       -- IATA code
├── currency        VARCHAR(3)       -- ISO 4217
├── preferences     JSONB            -- { budget, interests, trip_types }
├── created_at      TIMESTAMP
└── updated_at      TIMESTAMP
```

### Destinations

```sql
destinations
├── id              UUID PRIMARY KEY
├── name            VARCHAR NOT NULL
├── country         VARCHAR NOT NULL
├── continent       VARCHAR NOT NULL
├── description     TEXT
├── latitude        DECIMAL
├── longitude       DECIMAL
├── avg_cost_per_day DECIMAL          -- estimated daily budget
├── best_months     INTEGER[]         -- [1,2,3] = Jan,Feb,Mar
├── tags            VARCHAR[]         -- ['beach','adventure','culture']
├── hero_image_url  VARCHAR
├── image_urls      VARCHAR[]
├── rating          DECIMAL
├── created_at      TIMESTAMP
└── updated_at      TIMESTAMP
```

### Swipes

```sql
swipes
├── id              UUID PRIMARY KEY
├── user_id         UUID REFERENCES users(id)
├── destination_id  UUID REFERENCES destinations(id)
├── direction       VARCHAR NOT NULL  -- 'right','left','up'
├── created_at      TIMESTAMP
└── UNIQUE(user_id, destination_id)
```

### Wishlists

```sql
wishlists
├── id              UUID PRIMARY KEY
├── user_id         UUID REFERENCES users(id)
├── destination_id  UUID REFERENCES destinations(id)
├── notes           TEXT
├── travel_dates    DATERANGE
├── budget          DECIMAL
├── created_at      TIMESTAMP
└── updated_at      TIMESTAMP
```

### Flights (cached deals)

```sql
flight_deals
├── id              UUID PRIMARY KEY
├── origin          VARCHAR(3)
├── destination     VARCHAR(3)
├── airline         VARCHAR
├── price           DECIMAL
├── currency        VARCHAR(3)
├── departure_date  DATE
├── return_date     DATE
├── booking_url     VARCHAR
├── fetched_at      TIMESTAMP
└── expires_at      TIMESTAMP
```

### Hotels (cached listings)

```sql
hotel_listings
├── id              UUID PRIMARY KEY
├── destination_id  UUID REFERENCES destinations(id)
├── name            VARCHAR
├── star_rating     INTEGER
├── price_per_night DECIMAL
├── currency        VARCHAR(3)
├── image_url       VARCHAR
├── booking_url     VARCHAR
├── review_score    DECIMAL
├── fetched_at      TIMESTAMP
└── expires_at      TIMESTAMP
```

---

## 6. APIs Needed

### Flight Data

| API | Use Case | Pricing |
|---|---|---|
| **Amadeus Flight Offers** | Real-time flight search and pricing | Free tier: 500 req/mo |
| **Skyscanner API** | Flight comparison and redirect links | Free with affiliate |
| **Kiwi.com Tequila** | Budget flight search, multi-city | Free tier available |

### Hotel & Accommodation

| API | Use Case | Pricing |
|---|---|---|
| **Booking.com Affiliate** | Hotel search, pricing, booking links | Affiliate commission |
| **Amadeus Hotel Search** | Hotel availability and rates | Free tier: 500 req/mo |
| **Hostelworld API** | Budget accommodation for backpackers | Affiliate |

### Images & Media

| API | Use Case | Pricing |
|---|---|---|
| **Unsplash API** | High-quality destination photos | Free: 50 req/hr |
| **Google Places Photos** | Location-specific photos | Pay-per-use |
| **Pexels API** | Additional stock photography | Free |

### Location & Maps

| API | Use Case | Pricing |
|---|---|---|
| **Google Places API** | Place details, reviews, POIs | Pay-per-use |
| **Mapbox** | Interactive maps in-app | Free tier: 50k loads/mo |
| **OpenWeather** | Current weather at destinations | Free tier: 1k req/day |

### Payments

| API | Use Case | Pricing |
|---|---|---|
| **Stripe** | In-app payments and subscriptions | 2.9% + 30¢ per txn |

### Authentication

| API | Use Case | Pricing |
|---|---|---|
| **Google OAuth** | Sign in with Google | Free |
| **Apple Sign In** | Sign in with Apple (required for iOS) | Free |

---

## 7. UI Screens

### Tab Navigation

```
┌─────────────────────────────────┐
│         SwipeAway               │
├─────────────────────────────────┤
│                                 │
│    [ Discover ]  (Main swipe    │
│                   feed)         │
│                                 │
│    [ Wishlist ]  (Saved         │
│                   destinations) │
│                                 │
│    [ Trips ]     (Planned &     │
│                   booked trips) │
│                                 │
│    [ Profile ]   (Settings &    │
│                   preferences)  │
│                                 │
└─────────────────────────────────┘
```

### Screen Inventory

| Screen | Description |
|---|---|
| **Onboarding** | Welcome slides, preference selection (budget, interests, home airport) |
| **Sign Up / Login** | Email + password, Google OAuth, Apple Sign In |
| **Discover (Home)** | Swipeable destination cards — the core experience |
| **Destination Detail** | Full-screen photos, description, weather, costs, flights, hotels |
| **Wishlist** | Grid/list of saved destinations with price summaries |
| **Trip Builder** | Combine destination + flights + hotels into an itinerary |
| **Flight Results** | Flight options for a specific route with prices |
| **Hotel Results** | Hotel options at a destination with filters |
| **Booking Confirmation** | Payment and booking summary |
| **Profile** | User info, preferences, travel stats |
| **Settings** | Notifications, currency, home airport, theme |
| **Search** | Manual destination search with filters |

### Swipe Card Design

```
┌─────────────────────────────┐
│                             │
│                             │
│      [Destination Photo]    │
│       (Full bleed image)    │
│                             │
│                             │
├─────────────────────────────┤
│  🏖  Bali, Indonesia       │
│  From £450 return · 4 days  │
│  #beach #culture #tropical  │
│                             │
│  ← Skip    ♥ Save    ↑ Book│
└─────────────────────────────┘
```

---

## 8. Development Milestones

### Milestone 1 — Foundation (Weeks 1–2)

- Project setup and configuration
- Navigation structure (tabs + stacks)
- Theme system (light/dark mode)
- Basic component library (cards, buttons, inputs)
- Authentication screens (UI only)

### Milestone 2 — Core Swipe Experience (Weeks 3–5)

- Swipe card component with gesture handling
- Card animations (spring physics, rotation on drag)
- Destination data model and mock data
- Discover feed with card stack
- Destination detail screen

### Milestone 3 — Backend & Data (Weeks 6–8)

- Backend API server setup
- Database schema and migrations
- User authentication (JWT + OAuth)
- Destination CRUD endpoints
- Swipe tracking and wishlist API
- Seed database with real destinations

### Milestone 4 — API Integrations (Weeks 9–11)

- Amadeus flight search integration
- Hotel search API integration
- Unsplash/Pexels image fetching
- Weather data integration
- Price caching layer

### Milestone 5 — Wishlist & Trip Planning (Weeks 12–13)

- Wishlist screen with saved destinations
- Price tracking for wishlisted destinations
- Basic trip builder (destination + dates)
- Flight and hotel results screens

### Milestone 6 — Polish & Launch Prep (Weeks 14–16)

- UI polish, animations, and micro-interactions
- Error handling and empty states
- Offline caching for browsed destinations
- Push notification setup
- App Store assets (screenshots, description)
- Beta testing via TestFlight / Google Play Internal

### Milestone 7 — Launch (Week 17)

- App Store and Google Play submission
- Marketing website
- Social media launch campaign
- Analytics and monitoring setup

---

## 9. Future Features

### Short-Term (Post-Launch)

- **Group Trips** — invite friends, vote on destinations together
- **Price Alerts** — notify when flight prices drop for wishlisted routes
- **Travel Calendar** — visual calendar showing cheapest dates to fly
- **Explore by Map** — interactive map with destination pins
- **User Reviews** — rate and review visited destinations

### Medium-Term (3–6 Months)

- **AI Trip Planner** — generate full itineraries with Claude API
- **Travel Stories** — short-form photo/video content from users
- **Social Feed** — see where friends are travelling
- **Multi-City Trips** — plan routes across multiple destinations
- **Offline Maps** — download maps for destinations

### Long-Term (6–12 Months)

- **In-App Booking Engine** — full flight and hotel booking without redirects
- **AR Destination Preview** — point camera to see destination overlays
- **Travel Insurance** — integrated travel insurance offerings
- **Loyalty Programme** — earn points for bookings and engagement
- **Business Travel Mode** — corporate travel features
- **Web App** — full web experience alongside mobile

---

## 10. Monetisation Strategy

### Revenue Streams

| Stream | Model | Est. Revenue |
|---|---|---|
| **Affiliate Commissions** | Earn commission on flight/hotel bookings via affiliate links (Booking.com, Skyscanner, Kiwi) | 3–8% per booking |
| **Premium Subscription** | "SwipeAway Pro" — unlimited swipes, price alerts, AI trip planning, ad-free | £4.99/mo or £39.99/yr |
| **Sponsored Destinations** | Tourism boards and airlines pay to promote destinations in the feed | Per-impression pricing |
| **In-App Booking Fees** | Small service fee on direct bookings | 2–5% per transaction |
| **Featured Hotels** | Hotels pay for premium placement in results | CPC or CPM model |

### Freemium Tiers

**Free Tier:**
- 50 swipes per day
- Basic wishlist (up to 20 destinations)
- Affiliate booking links
- Standard destination cards

**Pro Tier (£4.99/mo):**
- Unlimited swipes
- Unlimited wishlist
- Price drop alerts
- AI-powered trip planning
- Ad-free experience
- Priority customer support
- Exclusive deals and early access

### Projected Revenue Model

| Metric | Month 1 | Month 6 | Month 12 |
|---|---|---|---|
| Downloads | 5,000 | 50,000 | 200,000 |
| MAU | 3,000 | 30,000 | 120,000 |
| Pro subscribers (5%) | 150 | 1,500 | 6,000 |
| Subscription revenue | £750 | £7,500 | £30,000 |
| Affiliate revenue | £500 | £10,000 | £50,000 |
| **Total monthly** | **£1,250** | **£17,500** | **£80,000** |

---

## Appendix: Key Decisions Log

| Decision | Choice | Rationale |
|---|---|---|
| State management | Zustand | Lightweight, minimal boilerplate, good DX |
| Navigation | Expo Router | File-based routing, deep linking built-in |
| Backend | Node.js + Express | Same language as frontend, large ecosystem |
| Database | PostgreSQL | Relational data (users, destinations, bookings), JSONB for flexibility |
| Image loading | Expo Image | Native caching, blur placeholders, fast |
| Animations | Reanimated + Gesture Handler | Runs on UI thread, 60fps swipe animations |
| Auth | JWT + OAuth | Stateless, works well with mobile apps |
| Payments | Stripe | Industry standard, good React Native SDK |
