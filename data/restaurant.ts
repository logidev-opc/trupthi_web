import { RestaurantInfo } from "@/types/restaurant";
export type { RestaurantInfo };

export const restaurantData: RestaurantInfo = {
  name: "TRUPTHI",
  teluguName: "తృప్తి",
  tagline: "Pure Organic Food. Authentic Telugu Taste.",
  teluguTagline: "ప్రకృతి నుంచి... పళ్లెం వరకు",
  teluguSubtitle: "గోవు ఆధారిత ప్రకృతి ఉత్పత్తులు మరియు ఆహారం",
  badge: "100% Pure Telugu Vegetarian",
  phonePlaceholder: "+91 91234 56789",
  emailPlaceholder: "namaste@trupthi-restaurant.com",
  addressPlaceholder: "Q9H3+963 Petrol Bunk, Yendada, Endada, Visakhapatnam, Andhra Pradesh 530045",
  city: "Visakhapatnam, Andhra Pradesh",

  openingHours: [
    {
      days: "Morning Tiffins (Breakfast)",
      timings: "08:00 AM – 11:00 AM",
      session: "Authentic South Indian & Telugu Heritage Breakfast",
    },
    {
      days: "Afternoon Lunch Feast (Bhojanam)",
      timings: "12:00 PM – 03:30 PM",
      session: "Traditional Pure Veg Banana Leaf Feast",
    },
    {
      days: "Evening Tiffins & Dinner",
      timings: "07:00 PM – 11:00 PM",
      session: "Delicious Evening Delicacies & Wholesome Dinner",
    },
  ],
  socials: [
    { platform: "Instagram", handle: "@trupthi.bhojanam", url: "https://instagram.com/trupthi.bhojanam" },
    { platform: "Facebook", handle: "Trupthi Bhojanashala", url: "https://facebook.com/trupthi.bhojanashala" },
    { platform: "YouTube", handle: "Trupthi Telugu Kitchen", url: "https://youtube.com/@trupthi-telugu-kitchen" },
  ],
};
