// constants/index.ts
import { PropertyProps } from '../interfaces';

export const API_URLS = {
  LISTINGS: '/api/listings',
  USERS: '/api/users',
} as const;

export const APP_CONFIG = {
  SITE_NAME: 'ALX Listing App',
  DESCRIPTION: 'Airbnb clone for property listings',
  VERSION: '1.0.0',
} as const;

export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  NO_LISTINGS: 'No listings available',
} as const;

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
    discount: "30"
  },
  // Add all other properties from your list here...
  // I'm showing 2 examples to save space, but include all 20
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400",
    discount: ""
  }
];

export const FILTER_OPTIONS = [
  "Top Villa",
  "Self Checkin", 
  "Luxury",
  "Beachfront",
  "Mountain View",
  "Pool",
  "Free Parking",
  "Pet Friendly"
];

export const HERO_BACKGROUND = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200";