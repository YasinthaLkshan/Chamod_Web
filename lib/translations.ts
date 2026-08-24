export const translations = {
  si: {
    callLabel: "අමතන්න",
    phone: "077 123 4567",
    nav: {
      home: "මුල් පිටුව",
      products: "පොහොර වර්ග",
      about: "අප ගැන",
      contact: "සම්බන්ධ වන්න",
    },
    brand: "Dilshan",
    brandSub: "පොහොර වෙළඳසැල",
    hero: {
      titleLine1: "හොඳ අස්වැන්නකට",
      titleLine2: "හොඳ පොහොරක්",
      desc: "ගුණාත්මක හා විශ්වාසනීය පොහොර විසඳුම් බබගේ වගාවට හොඳම සහය.",
      cta: "දැන් මිලදී ගන්න",
    },
    categoriesTitle: "පොහොර වර්ග",
    categories: [
      { label: "NPK පොහොර", icon: "npk" },
      { label: "කාර්බනික පොහොර", icon: "organic" },
      { label: "දියර පොහොර", icon: "liquid" },
      { label: "යූරියා පොහොර", icon: "urea" },
      { label: "පෝෂක ද්‍රව්‍ය", icon: "sprayer" },
      { label: "පස් සාරවත් කිරීම", icon: "soil" },
    ],
    features: [
      {
        title: "ගුණාත්මක භාණ්ඩ",
        desc: "100% ගුණාත්මක සහ විශ්වාසනීය",
        icon: "quality",
      },
      {
        title: "කඩිනම් බෙදාහැරීම්",
        desc: "දිවයින පුරා බෙදාහැරීම",
        icon: "delivery",
      },
      {
        title: "ආරක්ෂිත ගෙවීම්",
        desc: "සුරක්ෂිත ගෙවීම් ක්‍රම",
        icon: "secure",
      },
      {
        title: "පාරිභෝගික සහය",
        desc: "ඔබට අවශ්‍ය සෑම විටකම",
        icon: "support",
      },
    ],
    footer: "© 2025 Dilshan පොහොර වෙළඳසැල. සියලු හිමිකම් ඇවිරිණි.",
    searchPlaceholder: "සොයන්න...",
  },
  en: {
    callLabel: "Call",
    phone: "077 123 4567",
    nav: {
      home: "Home",
      products: "Products",
      about: "About Us",
      contact: "Contact",
    },
    brand: "Dilshan",
    brandSub: "Fertilizer Store",
    hero: {
      titleLine1: "Good Harvest Needs",
      titleLine2: "Good Fertilizer",
      desc: "Quality and reliable fertilizer solutions to support your cultivation best.",
      cta: "Shop Now",
    },
    categoriesTitle: "Product Categories",
    categories: [
      { label: "NPK Fertilizer", icon: "npk" },
      { label: "Organic Fertilizer", icon: "organic" },
      { label: "Liquid Fertilizer", icon: "liquid" },
      { label: "Urea Fertilizer", icon: "urea" },
      { label: "Nutrients", icon: "sprayer" },
      { label: "Soil Enrichment", icon: "soil" },
    ],
    features: [
      {
        title: "Quality Products",
        desc: "100% quality and reliable",
        icon: "quality",
      },
      {
        title: "Fast Delivery",
        desc: "Island-wide delivery",
        icon: "delivery",
      },
      {
        title: "Secure Payment",
        desc: "Safe payment methods",
        icon: "secure",
      },
      {
        title: "Customer Support",
        desc: "Whenever you need us",
        icon: "support",
      },
    ],
    footer: "© 2025 Dilshan Fertilizer Store. All rights reserved.",
    searchPlaceholder: "Search...",
  },
} as const;

export type Translations = typeof translations.si;
