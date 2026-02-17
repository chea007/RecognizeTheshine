
import { Service, Testimonial } from './types';

export const LOGO_URL = 'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/recognize-the-shine-logo.png';

export const SERVICES: Service[] = [
  {
    id: 'recurring-cleaning',
    title: 'Recurring Cleaning',
    description: 'Maintain the palace standard with weekly, bi-weekly, or monthly visits.',
    detailedDescription: 'Our Recurring Cleaning service is designed for those who value consistency and peace of mind. We establish a custom rotation schedule to ensure your home remains in pristine condition year-round. Our elite staff handles all standard tasks plus a rotating "deep-focus" area during each visit.',
    benefits: ['Priority Scheduling', 'Dedicated Cleaning Team', 'Reduced Rates for Frequency', 'Customized Routine'],
    icon: 'fa-calendar-check',
    priceStart: 120,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'A comprehensive, top-to-bottom scrub for a total home restoration.',
    detailedDescription: 'The Royal Deep Clean is our most thorough service. We go beyond the surface to tackle neglected areas: inside cabinets, deep baseboard scrubbing, window tracks, and detailed sanitization of every corner. Perfect for seasonal resets or preparing for special occasions.',
    benefits: ['Detail-oriented focus', 'Industrial strength safe products', 'Behind-furniture cleaning', 'Full appliance exterior polishing'],
    icon: 'fa-sparkles',
    priceStart: 250,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    description: 'Professional workspace maintenance for corporate headquarters and local businesses.',
    detailedDescription: 'First impressions matter. We provide high-end janitorial and office cleaning services that reflect the professionalism of your brand. From glass-walled boardrooms to high-traffic lobbies, we ensure a sanitized and inspiring environment for your employees and clients.',
    benefits: ['After-hours service available', 'Medical-grade sanitization', 'Eco-friendly office products', 'Customized facility protocols'],
    icon: 'fa-building',
    priceStart: 200,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'move-in-cleaning',
    title: 'Move-In Cleaning',
    description: 'Start your new chapter in a crystal-clear, sanitized sanctuary.',
    detailedDescription: 'Moving into a new home should be a celebration, not a chore. Our Move-In service ensures that the previous residents\' traces are completely erased. We deep clean every drawer, closet, and surface so you can unpack with confidence in a perfectly hygienic space.',
    benefits: ['Total sanitization', 'Closet and drawer detailing', 'Oven and Fridge interior included', 'Air quality focus'],
    icon: 'fa-door-open',
    priceStart: 300,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'move-out-cleaning',
    title: 'Move-Out Cleaning',
    description: 'Secure your deposit and leave a legacy of cleanliness for the next owners.',
    detailedDescription: 'Leave with grace. Our Move-Out service is designed to meet the rigorous standards of landlords and real estate agents. We provide a full-property restoration that makes the space look "just listed," ensuring a smooth handover or sale process.',
    benefits: ['Standard-compliant checklists', 'Full appliance detailing', 'Floor-to-ceiling dusting', 'Wall smudge removal'],
    icon: 'fa-truck-moving',
    priceStart: 300,
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-construction-cleaning',
    title: 'Post-Construction Cleaning',
    description: 'The final touch to your renovation. We remove the dust to reveal the design.',
    detailedDescription: 'Construction is messy. Fine dust settles in places you can\'t see. Our specialists use industrial HEPA filtration and specialized techniques to remove drywall dust, paint splatters, and adhesive residue, making your newly renovated space finally livable.',
    benefits: ['HEPA air filtration', 'Fine dust removal', 'Window and frame detailing', 'Safe residue removal'],
    icon: 'fa-helmet-safety',
    priceStart: 450,
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'post-event-cleaning',
    title: 'Post-Event Cleaning',
    description: 'Restore the peace and polish after your gala, party, or corporate event.',
    detailedDescription: 'Hosting is stressful enough. Let us handle the aftermath. Whether it was an intimate dinner party or a large corporate gala, our rapid-response team restores your space to its original glory, handling trash removal, floor restoration, and deep sanitization.',
    benefits: ['Fast turnaround', 'Full waste removal', 'Kitchen and bar sanitization', 'Furniture realignment'],
    icon: 'fa-glass-cheers',
    priceStart: 200,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Sarah Jenkins", location: "Main Line, PA", comment: "The attention to detail is royal! My house hasn't looked this good since the day we moved in.", rating: 5 },
  { id: 2, name: "Michael Chen", location: "Center City, Philadelphia", comment: "Reliable, professional, and they truly recognize the shine. Highly recommended.", rating: 5 },
  { id: 3, name: "Amanda Ross", location: "Bucks County, PA", comment: "The AI quote was so accurate. Their deep clean package is worth every penny.", rating: 5 }
];
