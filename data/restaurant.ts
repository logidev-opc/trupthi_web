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
  addressPlaceholder: "Plot No. 18, VIP Road, Near Siripuram Circle, Waltair Uplands, Visakhapatnam (Vizag), Andhra Pradesh - 530003",
  city: "Visakhapatnam, Andhra Pradesh",

  openingHours: [
    {
      days: "Monday – Friday",
      timings: "07:00 AM – 10:30 PM",
      session: "Breakfast: 7:00 AM - 11:00 AM | Lunch Feast: 12:00 PM - 3:30 PM | Dinner: 7:00 PM - 10:30 PM",
    },
    {
      days: "Saturday – Sunday & Festive Days",
      timings: "06:30 AM – 11:00 PM",
      session: "Breakfast: 6:30 AM - 11:30 AM | Traditional Grand Feast: 12:00 PM - 4:00 PM | Dinner: 7:00 PM - 11:00 PM",
    },
  ],
  socials: [
    { platform: "Instagram", handle: "@trupthi.bhojanam", url: "https://instagram.com/trupthi.bhojanam" },
    { platform: "Facebook", handle: "Trupthi Bhojanashala", url: "https://facebook.com/trupthi.bhojanashala" },
    { platform: "YouTube", handle: "Trupthi Telugu Kitchen", url: "https://youtube.com/@trupthi-telugu-kitchen" },
  ],
};
