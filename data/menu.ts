import { MenuItem, MenuCategory, PantryProduct } from "@/types/menu";
export type { MenuItem, MenuCategory, PantryProduct };

export const menuCategories: MenuCategory[] = [
  { id: "all", label: "All Items", teluguLabel: "అన్నీ" },
  { id: "bhojanam", label: "Bhojanam", teluguLabel: "భోజనం" },
  { id: "idli-vada", label: "Idli & Vada", teluguLabel: "ఇడ్లీ & వడ" },
  { id: "millet-specials", label: "Millet Specials", teluguLabel: "మిల్లెట్ స్పెషల్స్" },
  { id: "pesarattu", label: "Pesarattu", teluguLabel: "పెసరట్టు" },
  { id: "beverages", label: "Beverages", teluguLabel: "పానీయాలు" },
  { id: "pantry", label: "Traditional Pantry", teluguLabel: "సాంప్రదాయ నిల్వలు" },
];

export const featuredDish: MenuItem = {
  id: "millet-cone-idly",
  category: "millet-specials",
  englishName: "MILLET CONE IDLY",
  teluguName: "మిల్లెట్ కోన్ ఇడ్లీ",
  price: "₹90",
  badge: "Healthy Choice",
  image: "/images/menu/millet-cone-idli.jpg",
  description:
    "Steamed conical idlis made with stone-ground native millets, served piping hot with traditional country chutneys and aromatic sambar.",
  grainInfo: "Ragi • Sajja • Jonna",
  isSignature: true,
};

export const bhojanamItems: MenuItem[] = [
  {
    id: "full-thali",
    category: "bhojanam",
    englishName: "Full Thali",
    teluguName: "సంపూర్ణ అరటి ఆకు భోజనం",
    price: "₹314",
    image: "https://res.cloudinary.com/djaaoxrv9/image/upload/v1789108767/hero-bhojanam-feast_oiht8s.jpg",
    description:
      "Unlimited traditional royal Andhra feast served on fresh banana leaf with steamed rice, clay-pot cooked Mudda Pappu, Kandi Podi, Desi Cow Ghee, Sambar, Rasam, Majjiga Pulusu, seasonal Vepudu, Gongura Pachadi, fresh curd, appadam, and traditional sweet payasam.",
    isSignature: true,
    badge: "Unlimited Feast",
  },
];

export const idliVadaItems: MenuItem[] = [
  { id: "idly", category: "idli-vada", englishName: "Idly", teluguName: "ఇడ్లీ", price: "₹80" },
  { id: "sambar-idly", category: "idli-vada", englishName: "Sambar Idly", teluguName: "సాంబారు ఇడ్లీ", price: "₹100" },
  { id: "ghee-idly", category: "idli-vada", englishName: "Ghee Idly", teluguName: "నెయ్యి ఇడ్లీ", price: "₹100" },
  { id: "vada-2", category: "idli-vada", englishName: "Vada (2)", teluguName: "వడ (2)", price: "₹100" },
  {
    id: "sambar-vada",
    category: "idli-vada",
    englishName: "Sambar Vada",
    teluguName: "సాంబారు వడ",
    price: "₹120",
    image: "/images/menu/idli-vada.jpg",
    description: "Crispy golden lentil medu vada immersed in piping hot vegetable sambar with fresh coconut chutney.",
    isSignature: true,
  },
  {
    id: "poori-3",
    category: "idli-vada",
    englishName: "Poori (3)",
    teluguName: "పూరి (3)",
    price: "₹150",
    image: "/images/menu/poori-dish.jpg",
    description: "Fluffy golden-brown pooris served with traditional spiced potato aloo saagu and fresh chutney.",
  },
];

export const milletDosaItems: MenuItem[] = [
  { id: "millet-dosa", category: "millet-specials", englishName: "Millet Dosa", teluguName: "మిల్లెట్ దోశ", price: "₹100" },
  { id: "millet-onion-dosa", category: "millet-specials", englishName: "Millet Onion Dosa", teluguName: "మిల్లెట్ ఉల్లి దోశ", price: "₹150" },
  { id: "millet-ghee-dosa", category: "millet-specials", englishName: "Millet Ghee Dosa", teluguName: "మిల్లెట్ నెయ్యి దోశ", price: "₹150" },
  { id: "millet-onion-ghee-dosa", category: "millet-specials", englishName: "Millet Onion Ghee Dosa", teluguName: "మిల్లెట్ ఉల్లి నెయ్యి దోశ", price: "₹180" },
  {
    id: "millet-masala-dosa",
    category: "millet-specials",
    englishName: "Millet Masala Dosa",
    teluguName: "మిల్లెట్ మసాలా దోశ",
    price: "₹150",
    image: "/images/menu/millet-dosa.jpg",
    description: "Crispy slow-roasted millet crepe filled with flavorful spiced potato masala, roasted with pure desi ghee.",
    isSignature: true,
  },
  { id: "millet-ghee-onion-masala-dosa", category: "millet-specials", englishName: "Millet Ghee Onion Masala Dosa", teluguName: "మిల్లెట్ నెయ్యి ఉల్లి మసాలా దోశ", price: "₹180" },
];

export const pesarattuItems: MenuItem[] = [
  { id: "chitti-pesarattu", category: "pesarattu", englishName: "Chitti Pesarattu", teluguName: "చిట్టి పెసరట్టు", price: "₹120" },
  { id: "plain-pesarattu", category: "pesarattu", englishName: "Plain Pesarattu", teluguName: "ప్లెయిన్ పెసరట్టు", price: "₹120" },
  { id: "ghee-pesarattu", category: "pesarattu", englishName: "Ghee Pesarattu", teluguName: "నెయ్యి పెసరట్టు", price: "₹150" },
  { id: "onion-pesarattu", category: "pesarattu", englishName: "Onion Pesarattu", teluguName: "ఉల్లి పెసరట్టు", price: "₹150" },
  { id: "onion-ghee-pesarattu", category: "pesarattu", englishName: "Onion Ghee Pesarattu", teluguName: "ఉల్లి నెయ్యి పెసరట్టు", price: "₹180" },
  { id: "upma-pesarattu", category: "pesarattu", englishName: "Upma Pesarattu", teluguName: "ఉప్మా పెసరట్టు", price: "₹180" },
  { id: "onion-upma-pesarattu", category: "pesarattu", englishName: "Onion Upma Pesarattu", teluguName: "ఉల్లి ఉప్మా పెసరట్టు", price: "₹190" },
  {
    id: "ghee-upma-pesarattu",
    category: "pesarattu",
    englishName: "Ghee Upma Pesarattu",
    teluguName: "నెయ్యి ఉప్మా పెసరట్టు",
    price: "₹199",
    image: "/images/menu/pesarattu.jpg",
    description: "Classic Godavari green moong crepe stuffed with hot rava upma, roasted with pure desi cow ghee and allam pachadi.",
    isSignature: true,
  },
  { id: "ghee-upma-onion-pesarattu", category: "pesarattu", englishName: "Ghee Upma Onion Pesarattu", teluguName: "నెయ్యి ఉప్మా ఉల్లి పెసరట్టు", price: "₹210" },
];

export const beverageItems: MenuItem[] = [
  {
    id: "filter-coffee",
    category: "beverages",
    englishName: "FILTER COFFEE",
    teluguName: "డిగ్రీ ఫిల్టర్ కాఫీ",
    price: "₹80",
    image: "/images/menu/filter-coffee.jpg",
    description: "Brewed fresh in traditional brass filter with thick farm milk and served in stainless-steel dabarah.",
  },
  {
    id: "hot-desi-cow-milk",
    category: "beverages",
    englishName: "HOT DESI COW MILK (A2)",
    teluguName: "వేడి దేశీ ఆవు పాలు (A2)",
    price: "₹120",
    image: "/images/menu/desi-cow-milk.jpg",
    description: "Warm, unadulterated pure indigenous A2 whole milk naturally rich in nutrients and sweet aroma.",
  },
];

export const pantryProducts: PantryProduct[] = [
  {
    id: "sesame-oil",
    name: "Sesame Oil",
    teluguName: "నువ్వుల నూనె",
    description: "Bull-driven unrefined sesame oil with intense natural aroma.",
    image: "/images/pantry/sesame-oil.jpg",
  },
  {
    id: "groundnut-oil",
    name: "Groundnut Oil",
    teluguName: "వేరుశెనగ నూనె",
    description: "Fresh stone-crushed native groundnut oil preserving natural vitality.",
    image: "/images/pantry/groundnut-oil.jpg",
  },
  {
    id: "mustard-oil",
    name: "Mustard Oil",
    teluguName: "ఆవనూనె",
    description: "Aromatic bull-driven pure mustard seed oil crafted traditionally.",
    image: "/images/pantry/pure-mustard-oil.jpg",
  },
  {
    id: "kusum-oil",
    name: "Kusum Oil",
    teluguName: "కుసుమ నూనె",
    description: "Traditional bull-driven safflower oil extracted for wellness and wholesome cooking.",
    image: "/images/pantry/kusum-oil.jpg",
  },
  {
    id: "desi-cow-ghee",
    name: "Desi Cow Ghee",
    teluguName: "దేశీ ఆవు నెయ్యి",
    description: "Bilona-churned golden pure A2 cow ghee with divine aroma and purity.",
    image: "/images/pantry/desi-cow-ghee.jpg",
  },
];

export const menuItems: MenuItem[] = [
  featuredDish,
  ...bhojanamItems,
  ...idliVadaItems,
  ...milletDosaItems,
  ...pesarattuItems,
  ...beverageItems,
];
