export type MenuCategoryType =
  | "all"
  | "idli-vada"
  | "millet-specials"
  | "pesarattu"
  | "beverages"
  | "pantry"
  | "meals"
  | "tiffins"
  | "curries"
  | "sweets";

export interface MenuItem {
  id: string;
  category: MenuCategoryType;
  teluguName?: string;
  englishName: string;
  description?: string;
  teluguDescription?: string;
  price: string;
  pricePlaceholder?: string;
  image?: string;
  tags?: string[];
  isSignature?: boolean;
  badge?: string;
  dietTags?: string[];
  grainInfo?: string;
}

export interface MenuCategory {
  id: MenuCategoryType;
  label: string;
  teluguLabel?: string;
  iconName?: string;
}

export interface PantryProduct {
  id: string;
  name: string;
  teluguName?: string;
  description: string;
  image: string;
  price?: string;
}
