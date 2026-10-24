export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  recommendedStay?: string;
  mealTip?: string;
}

export interface CostBreakdown {
  currency: string;
  localCurrency?: string;
  totalEstimate: string;
  stayPerNight: string;
  foodPerDay: string;
  localTransport: string;
  activities: string;
  disclaimer: string;
}

export interface TravelArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  imageAlt: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  publishedDate: string;
  updatedDate?: string;
  category: 'Bangladesh' | 'Mountains' | 'Beaches' | 'Adventure' | 'Culture & Food' | 'Budget Travel' | 'International' | 'Travel Tips';
  destination: string;
  country: string;
  region: 'Bangladesh' | 'South Asia' | 'East Asia' | 'Europe' | 'Middle East' | 'Southeast Asia';
  readingTime: string;
  featured?: boolean;
  trending?: boolean;
  estimatedCost: CostBreakdown;
  itinerary: ItineraryDay[];
  highlights: string[];
  packingEssentials: string[];
  galleryImages: { url: string; caption: string }[];
  contentSections: {
    id: string;
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: 'Bangladesh' | 'South Asia' | 'East Asia' | 'Europe' | 'Middle East' | 'Southeast Asia';
  style: 'Mountains & Clouds' | 'Beaches & Islands' | 'Ancient Heritage' | 'Rainforest & Tea Gardens' | 'Scenic Train Journeys';
  coverImage: string;
  bestTimeToVisit: string;
  typicalDailyBudget: string;
  highlights: string[];
  summary: string;
  articleSlug?: string;
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
  likes: number;
}

export interface AdsterraConfig {
  showBanner: boolean;
  showSocialBar: boolean;
  showPopunder: boolean;
  bannerPublisherKey: string;
  socialBarKey: string;
  popunderKey: string;
}
