export interface OpeningHour {
  days: string;
  timings: string;
  session: string;
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon?: string;
}

export interface RestaurantInfo {
  name: string;
  teluguName: string;
  tagline: string;
  teluguTagline: string;
  teluguSubtitle: string;
  badge: string;
  phonePlaceholder: string;
  emailPlaceholder?: string;
  addressPlaceholder: string;
  city: string;
  openingHours: OpeningHour[];
  socials: SocialLink[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  highlight: string;
  date?: string;
}

