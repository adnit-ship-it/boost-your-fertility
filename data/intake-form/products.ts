import type { Product, ProductCategory } from "~/types/intake-form/checkout";

// --- PRODUCT DATA ---
// This is the master list of all available products.
export const products: Product[] = [
  {
    id: "mounjaro-injection",
    name: "Mounjaro Injection",
    description:
      "Weekly GLP-1 injection for weight loss and diabetes management",
    img: "/assets/images/products/mounjaro-injection.png",
    thumbnail: "/assets/images/products/mounjaro-injection.png",
    prices: {
      monthly: 399,
      semiannually: 349,
    },
    popular: true,
    availability: "in_stock",
    type: "injection",
    category: "weight-loss",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Effective for weight loss",
      "Diabetes management",
      "Prescription required",
    ],
  },
  {
    id: "ozempic-injection",
    name: "Ozempic Injection",
    description:
      "Weekly GLP-1 injection for weight loss and blood sugar control",
    img: "/assets/images/products/ozempic-injection.png",
    thumbnail: "/assets/images/products/ozempic-injection.png",
    prices: {
      monthly: 399,
      semiannually: 349,
    },
    availability: "in_stock",
    type: "injection",
    category: "weight-loss",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Weight loss support",
      "Blood sugar control",
      "Prescription required",
    ],
  },
  {
    id: "methylcobalamin-injection",
    name: "Methylcobalamin Injection",
    description: "Vitamin B12 injection for energy and neurological health",
    img: "/assets/images/products/methylcobalamin-injection.png",
    thumbnail: "/assets/images/products/methylcobalamin-injection.png",
    prices: {
      monthly: 399,
      semiannually: 349,
    },
    availability: "in_stock",
    type: "injection",
    category: "wellness",
    features: [
      "Vitamin B12 supplement",
      "Energy boost",
      "Neurological support",
      "Methylated form for better absorption",
      "Prescription required",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getPopularProducts(): Product[] {
  return products.filter((product) => product.popular);
}

// --- CATEGORY LABELS ---
// Mapping of category keys to display names
export const categoryLabels: Record<ProductCategory, string> = {
  "weight-loss": "Weight Loss",
  "sexual health": "Sexual",
  "wellness": "Wellness",
  "hair": "Hair",
  "skin": "Skin",
};

// --- UTILITY FUNCTION ---
/**
 * Gets all unique categories that have at least one product
 * @returns Array of category strings that exist in the products array
 */
export function getAvailableCategories(): ProductCategory[] {
  const categories = new Set<ProductCategory>();
  products.forEach((product) => {
    if (product.category) {
      categories.add(product.category);
    }
  });
  return Array.from(categories);
}
