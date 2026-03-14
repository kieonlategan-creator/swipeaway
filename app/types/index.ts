// Core data types for SwipeAway

export interface User {
  id: string;
  email: string;
  displayName: string;
  avatarUrl: string | null;
  homeAirport: string | null; // IATA code, e.g. 'LHR'
  currency: string; // ISO 4217, e.g. 'GBP'
  preferences: UserPreferences;
  createdAt: string;
  updatedAt: string;
}

export interface UserPreferences {
  budget: 'budget' | 'mid-range' | 'luxury';
  interests: string[]; // e.g. ['beach', 'culture', 'adventure']
  tripTypes: string[]; // e.g. ['weekend', 'week-long', 'backpacking']
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  description: string;
  latitude: number;
  longitude: number;
  avgCostPerDay: number;
  bestMonths: number[]; // 1-12
  tags: string[];
  heroImageUrl: string;
  imageUrls: string[];
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export type SwipeDirection = 'left' | 'right' | 'up';

export interface Swipe {
  id: string;
  userId: string;
  destinationId: string;
  direction: SwipeDirection;
  createdAt: string;
}

export interface WishlistItem {
  id: string;
  userId: string;
  destinationId: string;
  destination?: Destination;
  notes: string | null;
  travelDates: { start: string; end: string } | null;
  budget: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface FlightDeal {
  id: string;
  origin: string; // IATA code
  destination: string; // IATA code
  airline: string;
  price: number;
  currency: string;
  departureDate: string;
  returnDate: string;
  bookingUrl: string;
  fetchedAt: string;
  expiresAt: string;
}

export interface HotelListing {
  id: string;
  destinationId: string;
  name: string;
  starRating: number;
  pricePerNight: number;
  currency: string;
  imageUrl: string;
  bookingUrl: string;
  reviewScore: number;
  fetchedAt: string;
  expiresAt: string;
}

// Auth types
export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
  displayName: string;
}

// Filter types
export interface DiscoverFilters {
  budget: [number, number] | null; // min/max daily cost
  continents: string[];
  tags: string[];
  travelMonth: number | null; // 1-12
}
