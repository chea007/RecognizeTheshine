
export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  icon: string;
  priceStart: number;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface QuoteRequest {
  serviceType: string;
  bedrooms: number;
  bathrooms: number;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  address: string;
  phone: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  image?: string; // Base64 encoded image
}
