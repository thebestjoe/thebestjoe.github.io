export interface Product {
  id: number;
  name: string;
  tincture: string;
  description: string;
  imageUrl: string;
  galleryUrls: string[];
  longDescription: string;
  keyBenefits: string[];
  planetaryInfluence: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'Workshop' | 'Webinar' | 'Consultation';
  price?: number;
}

export interface ResourceItem {
  title: string;
  author?: string; // Optional: For books
  url?: string;    // Optional: For websites
  description: string;
}

export interface ResourceCategory {
  title: string;
  description: string;
  items: ResourceItem[];
}
