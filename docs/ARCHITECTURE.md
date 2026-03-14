# SwipeAway — Architecture & Technical Specification

---

## System Architecture

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

## Tech Stack

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

## Database Structure

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

## APIs

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

## Key Decisions Log

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
