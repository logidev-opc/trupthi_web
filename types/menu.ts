export type MenuCategoryType = "all" | "meals" | "tiffins" | "curries" | "sweets" | "beverages";

export interface MenuItem {
  id: string;
  category: MenuCategoryType;
  teluguName: string;
  englishName: string;
  description: string;
  teluguDescription?: string;
  pricePlaceholder: string;
  image: string;
  tags?: string[];
  isSignature?: boolean;
  prepTime?: string;
  dietTags?: string[];
}

export interface MenuCategory {
  id: MenuCategoryType;
  label: string;
  teluguLabel: string;
  iconName?: string;
}
