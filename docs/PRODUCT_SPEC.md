# SwipeAway — Product Specification

---

## Product Overview

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

## Core Features

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

## UI Screens

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

## Monetisation Strategy

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
